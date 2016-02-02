Deps.autorun(function(){
    Meteor.subscribe("chatrooms");
});
Template.userStatus.helpers({
  users: function() {
    return Meteor.users.find();
  },
  userClass: function() {
    var ref, ref1;
    if ((ref = this.status) != null ? ref.online : void 0) {
      if ((ref1 = this.status) != null ? ref1.idle : void 0) {
        return "idle";
      } else {
        return "online";
      }
    } else {
      return "offline";
    }
  }
});
Template.userStatus.events({
    'click .userchat':function(event){
    	event.preventDefault();
    	var size = $( ".chat-window:last-child" ).css("margin-left");
	     size_total = parseInt(size) + 400;
	    alert(size_total);
	    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
	    clone.css("margin-left", size_total);    	
        Session.set('currentId',this._id);
        var res=ChatRooms.findOne({chatIds:{$all:[this._id,Meteor.userId()]}});
        if(res)
        {
            //already room exists
            Session.set("roomid",res._id);
        }
        else{
            //no room exists
            var newRoom= ChatRooms.insert({chatIds:[this._id , Meteor.userId()],messages:[]});
            Session.set('roomid',newRoom);
        }
    }
});
