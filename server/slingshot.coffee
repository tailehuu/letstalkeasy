Slingshot.fileRestrictions 'uploadToAmazonS3',
  allowedFileTypes: [
    'image/png'
    'image/jpeg'
    'image/gif'
  ]
  maxSize: 1 * 1024 * 1024

Slingshot.createDirective 'uploadToAmazonS3', Slingshot.S3Storage,
  bucket: 'letstalkeasy'
  region: 'ap-southeast-1'
  acl: 'public-read'
  authorize: ->
    userFileCount = Files.find('userId': @userId).count()
    if userFileCount < 3 then true else false
  key: (file) ->
    user = Meteor.users.findOne(@userId)
    user.emails[0].address + '/' + file.name