Template.header.helpers({
  currentUsername: function() {
    return Meteor.user().profile.name;
  },
  currentUserId: function() {
    return Meteor.user()._id;
  }
});