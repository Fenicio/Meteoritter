Meteor.publish('tweets', function(options) {
  return Tweets.find({}, options);
});