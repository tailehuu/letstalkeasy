checkUserLoggedIn = ->
  if not Meteor.loggingIn() and not Meteor.user()
    Router.go '/'
  else
    @next()

userAuthenticated = ->
  if not Meteor.loggingIn() and Meteor.user()
    Router.go '/posts'
  else
    @next()

# Run Filters
Router.onBeforeAction checkUserLoggedIn, except: [
  'index',
  'signup',
  'login',
  'recover-password',
  'reset-password'
]

Router.onBeforeAction userAuthenticated, only: [
  'index',
  'signup',
  'login',
  'recover-password',
  'reset-password'
]
