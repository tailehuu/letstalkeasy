Template.upload.onRendered( function() {
  $("#upload").validate();
});

Template.upload.events({
  'submit #upload' (e, template) {
    e.preventDefault();

    var post = {
      title: $('#upload [name=title]').val(),
      files: document.getElementById('fileUpload').files
    };

    console.log(post);
    Modules.client.uploadToAmazonS3( { post: post, template: template } );
  }
});
