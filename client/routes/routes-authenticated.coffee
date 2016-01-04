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

Router.route('posts/:_id'
  name: 'postDetail'
  waitOn: ->
    Meteor.subscribe 'posts'
  data: ->
    Posts.findOne({_id: this.params._id})
)

# user route
Router.route 'feed'
Router.route 'followers'
Router.route 'following'
Router.route 'settings'

Router.route 'about-us',
  template: 'aboutUs'

Router.route 'support'

Router.route 'privacy'

Router.route 'terms'


