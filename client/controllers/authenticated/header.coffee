Template.header.events(
  'click .logout': (e,t) ->
    Meteor.logout((error)->
      if error
        Bert.alert error.reason, 'danger'
      else
        Bert.alert 'Succesfully logged out!', 'success'
    )
)
