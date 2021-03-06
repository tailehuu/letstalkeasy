Meteor.startup(->
  # Environment Variable: MAIL_URL
  process.env.MAIL_URL = "Insert your own MAIL_URL from your email provider here."

  # Try setting this so it works on meteor.com (https://github.com/oortcloud/unofficial-meteor-faq)
  process.env.HTTP_FORWARDED_COUNT = 1

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
  createServiceConfiguration('facebook', '1063899113676317', '1a07e579da1561828f2b67d8b1f6259c')
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

  # create dummies data
  users = [

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
  return

  # Custom Browser Policies
  customBrowserPolicies()
)
