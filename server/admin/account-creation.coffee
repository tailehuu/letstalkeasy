determineEmail = (user)->
  if user.emails
    emailAddress = user.emails[0].address
  else if user.services
    services = user.services
    emailAddress = switch
      when services.facebook then services.facebook.email
      when services.github then services.github.email
      when services.google then services.google.email
      when services.twitter then null
      else
        null
  else
    null

Accounts.onCreateUser((options, user)->
  userData =
    email: determineEmail(user)
    name: if options.profile then options.profile.name else ""

  if userData.email != null
    Meteor.call 'sendWelcomeEmail', userData, (error)->
      console.log error if error

  if options.profile
    user.profile = options.profile

  user
)

# Methods
# sendWelcomeEmail: Send an email to our user to welcome them to the app.
Meteor.methods(
  sendWelcomeEmail: (userData)->
    # Check our userData argument against our expected pattern.
    check(userData, {email: String, name: String})

    # Compile and render our email template using meteorhacks:ssr.
    SSR.compileTemplate('welcomeEmail', Assets.getText('email/welcome-email.html'))

    emailTemplate = SSR.render('welcomeEmail',
      name: if userData.name != "" then userData.name else null
      url: "http://localhost:3000"
    )

    # Send off our email to the user.
    Email.send(
      to: userData.email
      from: "The Meteor Chef - Demo <demo@themeteorchef.com>"
      subject: "Welcome aboard, team matey!"
      html: emailTemplate
    )
)
