Accounts.onCreateUser((options, user)->
  userData =
    email: Meteor.call('determineEmail', user)
    name: if options.profile then options.profile.name else ""

  if userData.email != null
    Meteor.call 'sendWelcomeEmail', userData, (error)->
      console.log error if error

  if options.profile
    user.profile = options.profile

  user
)