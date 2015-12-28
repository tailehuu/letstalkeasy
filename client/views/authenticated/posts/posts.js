Template.posts.onCreated( () => Template.instance().subscribe( 'posts' ) );

Template.posts.helpers({
  posts() {
    var posts = Posts.find( {}, { sort: { "added": -1 } } );
    if ( posts ) {
      return posts;
    }
  }
});
