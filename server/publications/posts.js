Meteor.publish('posts', function () {
    var data = Posts.find({"userId": this.userId});

    if (data) {
        return data;
    }

    return this.ready();
});

