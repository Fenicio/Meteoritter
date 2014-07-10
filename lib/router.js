Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('list', {
    path: '/',
    template: 'list',
    waitOn: function() {
      return Meteor.subscribe('tweets', {});
    }
  });
  this.route('user', {
    path: '/user/:userId',
    template: 'user',
    waitOn: function() {
      return Meteor.subscribe('tweets', {username: this.params.username }) && Meteor.subscribe('userData', this.params.userId);
    },
    data: function() {
      return Meteor.users.findOne({ _id: this.params.userId});
    }
  })
});
