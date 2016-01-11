Slingshot.fileRestrictions( "uploadToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif", "video/mp4" ],
  maxSize: 20 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "letstalkeasy",
  region: "ap-southeast-1",
  acl: "public-read",
  authorize: function () {
    let userFileCount = Posts.find( { "userId": this.userId } ).count();

    //return userFileCount < 3 ? true : false;

    return true;
  },
  key: function ( file ) {
    var user = Meteor.users.findOne( this.userId );
    var path = Meteor.call('createStoragePath', user);
    path = path != null ? path : 'unknow';

    return path + "/" + file.name;
  }
});
