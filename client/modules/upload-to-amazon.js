let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _addPostToDatabase = ( post ) => {
  Meteor.call( "storePostInDatabase", post.title, post.url, post.type, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );
      $('#upload')[0].reset();
    }
  });
};

let _uploadFileToAmazon = ( post ) => {
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );
  let file = post.files[0];

  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
    } else {
      _addPostToDatabase({
        title: post.title,
        url: url,
        type: file.type
      });
    }
  });
};

let upload = ( options ) => {
  template = options.template;
  let post = options.post;

  _uploadFileToAmazon( post );
};

Modules.client.uploadToAmazonS3 = upload;
