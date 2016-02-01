Template.followers.helpers({
    users: function () {    	
        var users = Meteor.users.find();   
        //var friend = Friends.find({"follower_id": Meteor.userId()}).count();
        
        return users;
    }
});

Template.followers.onRendered(function () {
	
});
Template.followers.events({
    'submit form': function (event) {
        event.preventDefault();
    }
});
