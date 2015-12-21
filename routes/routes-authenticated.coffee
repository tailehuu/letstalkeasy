Router.map ->
  @route 'posts',
    waitOn: ->
      Meteor.subscribe 'userData'
    onBeforeAction: ->
      Session.set 'currentRoute', 'posts'
      @next()
  @route 'photos'
  @route 'videos'
  @route 'about-us',
    template: 'aboutUs'
  @route 'support'
  @route 'privacy'
  @route 'terms'