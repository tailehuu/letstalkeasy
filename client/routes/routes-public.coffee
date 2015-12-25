Router.route('index',
  path: '/'
  template: 'index'
  layoutTemplate: 'loginLayout'
  onBeforeAction: ->
    @next()
)

Router.route('recover-password',
  path: '/recover-password'
  template: 'recoverPassword'
  onBeforeAction: ->
    Session.set 'currentRoute', 'recover-password'
    @next()
)

Router.route('reset-password',
  path: '/reset-password/:token'
  template: 'resetPassword'
  onBeforeAction: ->
    Session.set 'currentRoute', 'reset-password'
    Session.set 'resetPasswordToken', @params.token
    @next()
)
