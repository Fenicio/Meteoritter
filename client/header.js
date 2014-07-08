Template.header.helpers({
  currentUsername: function() {
    return Meteor.user().profile.name;
  }
});