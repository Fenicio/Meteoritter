Meteor.publish('tweets', function(options) {
  return Tweets.find(options, { sort: {"submitted": -1}});
});