Template.commentItem.helpers({
  submittedText: function() {
	  console.log("comment item");
	  console.log(this.userId);
    return this.body.toString();
  },
  avatar: function () {
      var user = Meteor.users.findOne({_id: this.userId});
      return user.profile.avatar;
  },
  timepost: function() {
	  return moment(this.submitted);
  }
});