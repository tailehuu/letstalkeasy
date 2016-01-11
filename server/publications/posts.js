Meteor.publish('posts', function () {
    var data = Posts.find({"userId": this.userId});
    Counts.publish(this, 'numberOfVideos', Posts.find( {"userId": this.userId, "type": "video/mp4"}));
    Counts.publish(this, 'numberOfPhotos', Posts.find( {"userId": this.userId, "type": {$ne: "video/mp4"}}));
    Counts.publish(this, 'numberOfPosts', Posts.find( {"userId": this.userId}));

    if (data) {
        return data;
    }

    return this.ready();
});

