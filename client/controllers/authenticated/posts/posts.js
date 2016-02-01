Template.posts.helpers({
  posts: function (){
	  Session.set( "currentURL", "posts" );
	  var userIds = [Meteor.userId()];
	  var friends = Friends.find({"follower_id": Meteor.userId()});
	  friends.forEach(function (doc) {
		  userIds.push(doc.following_id);
		 });
	  var posts = Posts.find({userId: {$in:userIds}},{sort: {added: -1}}).map(function(post, index) {
		  
		  if((index+1)%4 === 0)
			  post.rank = true;  
	      return post;
	    });
	  if ( posts ) {
	      return posts;
	    }	  
  }
});
