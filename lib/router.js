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
    path: '/:username',
    template: 'user',
    waitOn: function() {
      return Meteor.subscribe('tweets', {username: this.params.username });
    },
    data: function() {
      return Meteor.users.findOne({ profile: {name: this.params.username }});
    }
  })
});
