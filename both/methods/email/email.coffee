# sendWelcomeEmail: Send an email to our user to welcome them to the app.
Meteor.methods(
  sendWelcomeEmail: (userData)->
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