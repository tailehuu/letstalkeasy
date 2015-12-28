Template.files.onCreated( () => Template.instance().subscribe( 'files' ) );

Template.files.helpers({
  files() {
    var files = Posts.find( {}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  }
});
