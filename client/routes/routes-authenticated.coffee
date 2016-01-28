Router.route('posts',
  waitOn: ->
    [Meteor.subscribe('posts'), Meteor.subscribe('userData'), Meteor.subscribe('notifications')]
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
    [Meteor.subscribe('posts'), Meteor.subscribe('comments'), Meteor.subscribe('userData')]
  data: ->
    Posts.findOne({_id: this.params._id})
)

# user route
Router.route('feed'
  waitOn: ->
    [Meteor.subscribe('posts'), Meteor.subscribe('userData')]
)
Router.route('followers',
  name: 'followers'
  waitOn: ->
    [Meteor.subscribe('userData'), Meteor.subscribe('friends')]
)
Router.route('following',
  name: 'following'
  waitOn: ->
    [Meteor.subscribe('userData'), Meteor.subscribe('friends')]
)

Router.route('settings',
  waitOn: -> Meteor.subscribe('userData')
)

Router.route 'about-us',
  template: 'aboutUs'

Router.route 'support'

Router.route 'privacy'

Router.route 'terms'
Router.route 'demo'
Router.route('webrtc/:roomName'
  name: 'webrtc'
)


