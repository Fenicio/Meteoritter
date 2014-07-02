Template.header.helpers({
  currentUsername: function() {
    return Meteor.user().username;
  }
});