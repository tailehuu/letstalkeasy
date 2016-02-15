Template.messages.onRendered( function() {
	$(".msg_container_base").scrollTop($('.msg_container_base').height())
});
Template.messages.helpers({
    'msgs':function(){
    	if(Session.get('roomid')){
        var result = ChatRooms.findOne({_id:Session.get('roomid')});
        return result.messages;
    	}
    },
    userChat: function(){
    	if(Session.get('roomid')){
    		var result = ChatRooms.findOne({_id:Session.get('roomid')});
    		if(result.chatIds[0] == Meteor.userId()){
    			var user = Meteor.users.findOne({_id: result.chatIds[1]});
    		}
    		else{
    			var user = Meteor.users.findOne({_id: result.chatIds[0]});
    		}
            return user;
    	}
    	
    }
});
Template.messages.events({
    'click .icon_close': function (event) {
    	event.preventDefault();
    	$('#room-chat').addClass("messages-chat");
	},
	'click #btn-chat' : function (event) {
		var name = Meteor.user().profile.name;
        var message = document.getElementById('message-chat');

        if (message.value !== '') {
          var de = ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
           userId: Meteor.userId(),
           text: message.value,
           createdAt: Date.now()
          }}});
          document.getElementById('message-chat').value = '';
          message.value = '';
        }
	  },
	  'keydown input#message-chat' : function (event) {
		    if (event.which == 13) { 
		        if (Meteor.user())
		        {
		              var name = Meteor.user().username;
		              var message = document.getElementById('message-chat');
		    
		              if (message.value !== '') {
		                var de=ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
		                 userId: Meteor.userId(),
		                 text: message.value,
		                 createdAt: Date.now()
		                }}});
		                document.getElementById('message-chat').value = '';
		                message.value = '';
		              }
		        }		       
		    }
		  }
});
Template.messages.onRendered(function () {
	$("#panel-chat").scrollTop($("#panel-chat").height());
});

