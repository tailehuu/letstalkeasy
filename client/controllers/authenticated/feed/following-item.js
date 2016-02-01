Template.followingItem.helpers({
	user: function(){
		var user = Meteor.users.findOne({_id: this.follower_id});		
		return user;
	},
	follower_count: function(){
    	return Posts.find({ "userId": this.follower_id }).count();
    }
});
