Meteor.publish('tweets', function(options) {
  return Tweets.find(options, { sort: {"submitted": -1}});
});

Meteor.publish('userData', function(userId) {
  return Meteor.users.find({_id: userId});
});