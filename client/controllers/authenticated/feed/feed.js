Template.feed.helpers({
	posts() {
		Session.set( "currentURL", "feed" );
	    var posts = Posts.find( {}, { sort: { "added": -1 } } );
	    if ( posts ) {
	      return posts;
	    }
	  }
});
