Template.notificationItem.helpers({
    notificationPostPath: function () {
        return Router.routes.postDetail.path({_id: this.postId});
    }
});

Template.notificationItem.events({
    'click .view-notification': function () {
    	console.log("abc");
        Notifications.update(this._id, {$set: {read: true}});
    }
});