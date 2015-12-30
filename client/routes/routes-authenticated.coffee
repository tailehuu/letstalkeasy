Router.route('posts',
  waitOn: ->
    Meteor.subscribe 'posts'
  onBeforeAction: ->
    @next()
)

Router.route('photos'
  waitOn: ->
    Meteor.subscribe 'posts'
)

Router.route('videos'
  waitOn: ->
    Meteor.subscribe 'posts'
)

Router.route 'about-us',
  template: 'aboutUs'

Router.route 'support'

Router.route 'privacy'

Router.route 'terms'


