Template.followingItem.helpers({
	user: function(){
		var user = Meteor.users.findOne({_id: this.follower_id});		
		return user;
	},
	follower_count: function(){
    	return Posts.find({ "userId": this.follower_id }).count();
    },
    follower: function(){
    	return Friends.find({"following_id": this.follower_id}).count();
    },
    following: function(){
    	return Friends.find({"follower_id": this.follower_id}).count();
    }
});
