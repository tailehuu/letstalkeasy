Notifications = new Mongo.Collection('notifications');
createCommentNotification = function (comment) {
    var post = Posts.findOne(comment.postId);
    if (comment.userId !== post.userId) {
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            commentId: comment._id,
            commenterName: comment.author,
            submitted: new Date(),
            read: false
        });
    }
};