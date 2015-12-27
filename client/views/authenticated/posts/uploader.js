Template.uploader.events({
  //'change input[type="file"]' ( event, template ) {
  //  Modules.client.uploadToAmazonS3( { event: event, template: template } );
  //}
  'submit #upload' (e, template) {
    e.preventDefault();

    var post = {
      title: $('#upload [name=title]').val(),
      files: document.getElementById('fileUpload').files
    };
    Modules.client.uploadToAmazonS3( { post: post, template: template } );
  }
});
