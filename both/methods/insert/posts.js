Meteor.methods({
    storePostInDatabase: function (title, url, type) {
        check(title, String);
        check(url, String);
        check(type, String);

        Modules.both.checkUrlValidity(url);

        try {
            Posts.insert({
                title: title,
                url: url,
                type: type,
                userId: Meteor.userId(),
                added: new Date()
            });
        } catch (exception) {
            return exception;
        }
    },
    countPostByUser: function (userId) {
        check(userId, String);

        try {
            var dempost = Posts.find({ userId: userId }).count();
        	return dempost;
        } catch (exception) {
            return exception;
        }
    }
	
});
