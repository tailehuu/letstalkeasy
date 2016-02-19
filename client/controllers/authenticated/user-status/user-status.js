Deps.autorun(function(){
    Meteor.subscribe("chatrooms");
    Meteor.subscribe("videos");
});
Template.userStatus.helpers({
  users: function() {
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
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
  },
  userCall: function(){
	  var ref, ref1;
	    if ((ref = this.status) != null ? ref.online : void 0) {
	      return true;
	    } else {
	    	return false;
	    }
  }
});
Template.userStatus.events({
    'click .userchat':function(event){
    	event.preventDefault();
    	$('#room-chat').removeClass("messages-chat");
    	
        Session.set('currentId',this._id);
        var res=ChatRooms.findOne({chatIds:{$all:[this._id,Meteor.userId()]}});
        if(res)
        {
            //already room exists
            Session.set("callid",res._id);
        }
        else{
            //no room exists
            var newRoom= ChatRooms.insert({chatIds:[this._id , Meteor.userId()],messages:[]});
            Session.set('callid',newRoom);
        }
    },
    'click .usercall':function(event){
    	event.preventDefault();    	
        Session.set('currentId',this._id);
       
        var res = Videos.findOne({chatIds:{$all:[this._id,Meteor.userId()]}});
        if(res)
        {
            //already room exists
            Session.set("callid",res._id);
        }
        else{
            //no room exists
            var newRoom= Videos.insert({chatIds:[this._id , Meteor.userId()]});
            Session.set('callid',newRoom);
        }
        Meteor.call('insertNotificationCall', Session.get('callid'), this._id , function(error) {
            if (error){
              throwError(error.reason);
            }
        });
        Router.go('webrtc', {roomName: Session.get('callid')});

    }
});
