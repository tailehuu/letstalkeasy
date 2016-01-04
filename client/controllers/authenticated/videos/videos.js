Template.videos.helpers({
  posts() {
    var posts = Posts.find( {"type": "video/mp4"}, { sort: { "added": -1 } } );
    if ( posts ) {
      return posts;
    }
  }
});
