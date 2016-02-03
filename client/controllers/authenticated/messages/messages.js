Template.messages.helpers({
    'msgs':function(){
        var result=ChatRooms.findOne({_id:Session.get('roomid')});
        
        return result.messages;
    }
});		  
Template.messages.events({
    'click .icon_close': function (event) {
    	event.preventDefault();
    	$( "#chat_window_1" ).remove();
	}
});