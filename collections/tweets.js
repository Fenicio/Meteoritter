Tweets = new Meteor.Collection('tweets');

Tweets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  post: function(tweetAttr) {
    var user = Meteor.user();

    if(!user)
      throw new Meteor.Error(401, "Se necesita estar conectado para postear.");

    if(!tweetAttr.text)
      throw new Meteor.Error(402, "Un Tweet necesita texto");

    var tweet = _.extend(_.pick(tweetAttr, 'texto'), {
      userId: user._id,
      autor: user.username,
      submitted: new Date().getTime()
    });

    var tweetId = Tweets.insert(tweet);

    return tweetId;
  }
});