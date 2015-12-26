Meteor.publish 'files', ->
  data = Files.find('userId': @userId)
  if data
    return data
  @ready()