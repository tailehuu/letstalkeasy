Template.notifications.helpers({
    notifications: function () {
        return Notifications.find({userId: Meteor.userId(), read: false}, { sort: { "submitted": -1 } });
    },
    notificationCount: function () {
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});