Router.route('posts',
  waitOn: ->
    Meteor.subscribe 'userData'
  onBeforeAction: ->
    Session.set 'currentRoute', 'posts'
    @next()
)

Router.route 'photos'
Router.route 'videos'
Router.route 'about-us',
  template: 'aboutUs'
Router.route 'support'
Router.route 'privacy'
Router.route 'terms'
