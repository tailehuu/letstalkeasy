Template.notificationItem.helpers({
    notificationPostPath: function () {
        return Router.routes.postDetail.path({_id: this.postId});
    },
    notiType: function(){
    	if(this.type === 'call')
    		return false;
    	else
    		return true;
    },
    idCallroom: function(){
    	if(this.type === 'call'){
    		return this.callId;
    	}
    }
});

Template.notificationItem.events({
    'click .view-notification': function () {
        Notifications.update(this._id, {$set: {read: true}});
    }
});