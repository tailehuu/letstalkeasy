Template.commentItem.helpers({
  submittedText: function() {
    return this.body.toString();
  },
  profile: function () {
      var user = Meteor.users.findOne({_id: this.userId});
      return user.profile;
  },
  timepost: function() {
	  return moment(this.submitted);
  }
});