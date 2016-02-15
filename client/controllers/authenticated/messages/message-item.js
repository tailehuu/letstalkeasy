Template.messageItem.helpers({
    txtChat: function(){
    	return this.text;    	
    },
    timeChat: function(){
    	return this.createdAt;
    },
    userChat: function(){
    	var user = Meteor.users.findOne({_id: this.userId});	
    	return user;
    },
    typeChat: function(){
    	return Meteor.userId() !== this.userId;
    }
});	