Template.postDetail.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      $('#myModal').modal('show');
    }
    
}
Template.postDetail.helpers({
	  isImage( url ) {
	    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
	    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
	  },
	  isVideo( url ) {
	    const formats = [ 'mp4' ];
	    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
	  },
	  titleText: function (number = 80) {
	    if (this.title.length < number) {
	      return this.title;
	    } else {
	      return this.title.substring(0, number) + ' ...';
	    }
	  },
	  userPost: function (){
		  console.log(this.userId);
		  var userPost = Meteor.users.findOne({_id: this.userId});
		  return userPost;
	  },
	  comments: function(){
		  return Comments.find({postId: this._id});
	  },
	  timepost: function() {
		  return moment(this.added);
	  }
	});

Template.postDetail.events({
	  'click .close': function(e) {
		    e.preventDefault();	  
		    $('#myModal').modal('hide');
		    Router.go('posts');
		  },
	  'click #myModal': function(e) {
		  	var element = $('#myModal');
		    if(!element.hasClass('in')){
		    	e.preventDefault();	  
			    $('#myModal').modal('hide');			    
		    	Router.go(Session.get( "currentURL"));
		    }	    
		}	 
});