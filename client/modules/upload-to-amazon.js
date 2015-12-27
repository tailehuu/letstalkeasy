let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
  template.find( ".alert span" ).innerText = string;
};

let _addPostToDatabase = ( post ) => {
  Meteor.call( "storePostInDatabase", post.title, post.url, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
      _setPlaceholderText();
    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );
      _setPlaceholderText();
    }
  });
};

let _uploadFileToAmazon = ( post ) => {
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );
  let file = post.files[0];

  uploader.send( file, ( error, url ) => {
    if ( error ) {
      Bert.alert( error.message, "warning" );
      _setPlaceholderText();
    } else {
      _addPostToDatabase({
        title: post.title,
        url: url
      });
    }
  });
};

let upload = ( options ) => {
  template = options.template;
  //let file = _getFileFromInput( options.event );
  let post = options.post;

  _setPlaceholderText( `Uploading...` );
  _uploadFileToAmazon( post );
};

Modules.client.uploadToAmazonS3 = upload;
