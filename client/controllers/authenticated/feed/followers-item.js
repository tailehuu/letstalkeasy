Template.followersItem.helpers({
    avatar: function () {        
        return this.profile.avatar;
    },
    name: function (){
    	return this.profile.name;
    },
    userId: function (){
    	return this._id;
    },
    checkBox: function (){
    	var friend = Friends.find({"follower_id": Meteor.userId(), "following_id": this._id}).count();
    	return friend > 0;
    },
    follower_count: function(){
    	return Posts.find({ "userId": this._id }).count();
    }
    
});
Template.followersItem.events({
	'click .check-follow': function(event){
		var post = {                
                    currentId: Meteor.userId(),
                    followId: $(event.target).attr('id'),
                    type: $(event.target).is(":checked")                              
            };
		Meteor.call("followUser", post, (error) => {
	        if (error) {
	            Bert.alert(error.reason, "warning");
	        } else {
	            Bert.alert("Successfully updated!", "success");
	        }
	    });
	}
});
