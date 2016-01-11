Meteor.startup(->
  # Environment Variable: MAIL_URL
  process.env.MAIL_URL = "Insert your own MAIL_URL from your email provider here."

  createServiceConfiguration = (service,clientId,secret)->
    ServiceConfiguration.configurations.remove(
      service: service
    )
    config =
      generic:
        service: service
        clientId: clientId
        secret: secret
      facebook:
        service: service
        appId: clientId
        secret: secret
      twitter:
        service: service
        consumerKey: clientId
        secret: secret

    switch service
      when 'facebook' then ServiceConfiguration.configurations.insert(config.facebook)
      when 'twitter' then ServiceConfiguration.configurations.insert(config.twitter)
      else ServiceConfiguration.configurations.insert(config.generic)

  # Facebook
  createServiceConfiguration('facebook', '537973636357552', 'a9cf3a7ccba92e2cd11ecc62f836ad92')
  # Generate your Client & Secret here: https://developers.facebook.com/apps/

  # GitHub
  createServiceConfiguration('github', '26b5594cffdb67b4951a', 'f87771da4293dac251695b9346c678baf9c88b7b')
  # Generate your Client & Secret here: https://github.com/settings/applications

  # Google
  createServiceConfiguration('google', '555872587024-dd7nr36mpfakpn98qseds8dhctov8h0n.apps.googleusercontent.com', '24EvRLKkXd0dLhgx5U8UGkVN')
  # Generate your Client & Secret here: https://console.developers.google.com

  # Twitter
  createServiceConfiguration('twitter', 'LIGtJkPkpFbqttl5iblXgH4x2', 'Xs4pnWT5YjIMtieQvW0CN08Ttyl33Mqc6PwZo38kJTXT7daPzi')
  # Generate your Client & Secret here: https://apps.twitter.com/

  # Create an array of user accounts.
  users = [
    { name: "Admin", email: "admin@admin.com", password: "password" },
    { name: "lte one", email: "lte1@admin.com", password: "password" },
    { name: "lte two", email: "lte2@admin.com", password: "password" },
    { name: "lte three", email: "lte3@admin.com", password: "password" },
    { name: "lte four", email: "lte4@admin.com", password: "password" },
    { name: "lte five", email: "lte5@admin.com", password: "password" },
    { name: "lte six", email: "lte6@admin.com", password: "password" },
    { name: "lte seven", email: "lte7@admin.com", password: "password" },
  ]

  # Loop through array of user accounts.
  for user in users
    # Check if the user already exists in the DB.
    checkUser = Meteor.users.findOne({"emails.address": user.email});

    # If an existing user is not found, create the account.
    if not checkUser
      id = Accounts.createUser(
        email: user.email
        password: user.password
        profile:
          name: user.name
      )

  # Custom Browser Policies
  customBrowserPolicies()
)
