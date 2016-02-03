Router.configure
  layoutTemplate: 'masterLayout'
  loadingTemplate: 'loading'
  notFoundTemplate: 'notFound'
  yieldTemplates:
    header: to: 'header'
    jumbotron: to: 'jumbotron'
    footer: to: 'footer'
  waitOn: ->
    [Meteor.subscribe('posts'), Meteor.subscribe('notifications')]