Meteor.publish 'userData', ->
  currentUser = undefined
  currentUser = @userId
  if currentUser

    ###
    Meteor.users.find({_id: currentUser}, {
      fields: {
        "services.facebook.email": 1
        "services.github.email": 1
        "services.google.email": 1
        "services.twitter.screenName": 1
        "emails.address[0]": 1
        "profile": 1
      }
    })\
    ###

    Meteor.users.find _id: currentUser
  else
    @ready()
Meteor.publish null, ->
  [
    Meteor.users.find({}, fields:
      'services.facebook.email': 1
      'services.github.email': 1
      'services.google.email': 1
      'services.twitter.screenName': 1
      'emails.address[0]': 1
      'profile': 1
      'status': 1)
    UserStatus.connections.find()
  ]
Meteor.publish 'posts', ->
  data = undefined
  data = Posts.find('userId': @userId)
  Counts.publish this, 'numberOfVideos', Posts.find(
    'userId': @userId
    'type': 'video/mp4')
  Counts.publish this, 'numberOfPhotos', Posts.find(
    'userId': @userId
    'type': $ne: 'video/mp4')
  Counts.publish this, 'numberOfPosts', Posts.find('userId': @userId)
  if data
    return data
  @ready()
Meteor.publish 'otherposts', ->
  userIds = [ @userId ]
  friends = Friends.find('follower_id': @userId)
  friends.forEach (doc) ->
    userIds.push doc.following_id
    return
  data = Posts.find(userId: $in: userIds)
  Counts.publish this, 'numbersOfVideos', Posts.find(
    'userId': $in: userIds
    'type': 'video/mp4')
  Counts.publish this, 'numbersOfPhotos', Posts.find(
    'userId': $in: userIds
    'type': $ne: 'video/mp4')
  Counts.publish this, 'numbersOfPosts', Posts.find('userId': $in: userIds)
  if data
    return data
  @ready()
Meteor.publish 'chatrooms', ->
  data = undefined
  data = ChatRooms.find()
  if data
    return data
  @ready()
Meteor.publish 'comments', ->
  data = undefined
  data = Comments.find()
  if data
    return data
  @ready()
Meteor.publish 'friends', ->
  data = undefined
  data = Friends.find()
  Counts.publish this, 'numberOfFollowing', Friends.find('following_id': @userId)
  Counts.publish this, 'numberOfFollowers', Friends.find('follower_id': @userId)
  if data
    return data
  @ready()
Meteor.publish 'notifications', ->
  Notifications.find
    userId: @userId
    read: false