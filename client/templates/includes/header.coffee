Template.header.events(
  'click .logout': (e,t) ->
    Meteor.logout((error)->
      alert error.reason if error
    )
)
