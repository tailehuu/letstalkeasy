Template.following.helpers({
	users: function() {	
		return Friends.find({"following_id": Meteor.userId()});
	  }	
});