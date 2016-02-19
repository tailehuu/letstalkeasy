Notifications = new Mongo.Collection('notifications');
createCommentNotification = function (comment) {
    var post = Posts.findOne(comment.postId);
    if (comment.userId !== post.userId) {
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            type: 'comment',
            commentId: comment._id,
            commenterName: comment.author,
            submitted: new Date(),
            read: false
        });
    }
};
Meteor.methods({
	insertNotificationCall: function (callroomid, userId) {
        check(callroomid, String);
        try {
        	Notifications.insert({
        		userId: userId,
                type: 'call',
                callId: callroomid,
                submitted: new Date(),
                read: false
            });
        } catch (exception) {
            return exception;
        }
    }
});
