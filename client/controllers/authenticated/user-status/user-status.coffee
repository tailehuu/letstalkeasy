Template.userStatus.helpers
  users: -> Meteor.users.find()
  userClass: ->
    if @status?.online
      if @status?.idle
        "idle"
      else
        "online"
    else
      "offline"