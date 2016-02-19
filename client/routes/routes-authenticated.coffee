Router.route('posts',
  waitOn: ->
    [Meteor.subscribe('otherposts'), Meteor.subscribe('userData'), Meteor.subscribe('notifications'), Meteor.subscribe('friends')]
  onBeforeAction: ->
    @next()
)

Router.route('photos'
  waitOn: ->
    Meteor.subscribe 'otherposts'
)

Router.route('videos'
  waitOn: ->
    Meteor.subscribe 'otherposts'
)

Router.route('posts/:_id'
  name: 'postDetail'
  waitOn: ->
    [Meteor.subscribe('otherposts'), Meteor.subscribe('comments'), Meteor.subscribe('userData')]
  data: ->
    Posts.findOne({_id: this.params._id})
)

# user route
Router.route('feed',
  waitOn: ->
    [Meteor.subscribe('posts'), Meteor.subscribe('userData')]
)
Router.route('followers',
  waitOn: ->
    [Meteor.subscribe('userData'), Meteor.subscribe('friends'), Meteor.subscribe('otherposts')]
)

Router.route('following',
  waitOn: ->
    [Meteor.subscribe('userData'), Meteor.subscribe('friends'), Meteor.subscribe('otherposts')]
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
Router.route('callVideo/:roomName'
  name: 'callVideo'
)


