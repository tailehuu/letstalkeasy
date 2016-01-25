###
  Publications
  Data being published to the client.
###

# /profile
Meteor.publish('userData', ->
  # Cache this.userId first since we use it twice below.
  currentUser = this.userId
  # If a current user is available, find the current user and publish the
  # specified fields. Note: Meteor stores OAuth emails differently than it does
  # for accounts created using the standard accounts-password package.
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

    # return full user's info
    Meteor.users.find({_id: currentUser})
  else
    this.ready()
)

# user-status
Meteor.publish null, ->
  [
    Meteor.users.find {}, # online users only
      fields: {
        "services.facebook.email": 1
        "services.github.email": 1
        "services.google.email": 1
        "services.twitter.screenName": 1
        "emails.address[0]": 1
        "profile": 1
        "status": 1
      }
    UserStatus.connections.find()
  ]

# /posts
Meteor.publish 'posts', ->
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

# notifications
Meteor.publish 'notifications', ->
  Notifications.find
    userId: @userId
    read: false
