Template.serverStatus.helpers
  anonymous: -> UserConnections.find(userId: $exists: false)
  users: -> Meteor.users.find()
  userClass: -> if @status?.idle then "warning" else "success"
  connections: -> UserConnections.find(userId: @_id)