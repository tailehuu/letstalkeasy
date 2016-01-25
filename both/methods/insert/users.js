Meteor.methods({
    changeMyPassword: function (newPassword) {
        Accounts.setPassword(Meteor.userId(), newPassword, logout = false);
    },
    updateProfileInDatabase: function (post) {
        check(post, Object);
        var profile;

        if (post.profile.avatar != undefined) {
            profile = {
                'profile.avatar': post.profile.avatar,
                'profile.name': post.profile.name,
                'profile.marked_as_favourites': post.profile.marked_as_favourites,
                'profile.i_am_mentioned': post.profile.i_am_mentioned,
                'profile.i_get_a_reply': post.profile.i_get_a_reply,
                'profile.someone_follows_me': post.profile.someone_follows_me,
                'profile.anyone_to_tag_me': post.profile.anyone_to_tag_me,
                'profile.location_to_my_posts': post.profile.location_to_my_posts,
            };
        } else {
            profile = {
                'profile.name': post.profile.name,
                'profile.marked_as_favourites': post.profile.marked_as_favourites,
                'profile.i_am_mentioned': post.profile.i_am_mentioned,
                'profile.i_get_a_reply': post.profile.i_get_a_reply,
                'profile.someone_follows_me': post.profile.someone_follows_me,
                'profile.anyone_to_tag_me': post.profile.anyone_to_tag_me,
                'profile.location_to_my_posts': post.profile.location_to_my_posts,
            };
        }
        try {
            Meteor.users.update({
                _id: Meteor.userId()
            }, {
                $set: profile
            });
        } catch (exception) {
            return exception;
        }
    }
});
