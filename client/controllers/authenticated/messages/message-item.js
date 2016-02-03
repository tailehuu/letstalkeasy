Template.messageItem.helpers({
    'msgs':function(){
        var result = ChatRooms.findOne({_id:Session.get('roomid')});
        return result.messages;
    },
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