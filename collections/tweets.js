Tweets = new Meteor.Collection('tweets');

Tweets.allow({
  update: ownsDocument,
  remove: ownsDocument,
  insert: function(userId, doc) { return Meteor.userId() === userId }
});

Meteor.methods({
  post: function(tweetAttr) {
    var user = Meteor.user();

    if(!user)
      throw new Meteor.Error(401, "Se necesita estar conectado para postear.");

    if(!tweetAttr.texto)
      throw new Meteor.Error(402, "Un Tweet necesita texto");

    console.log("post", tweetAttr);
    var tweet = _.extend(_.pick(tweetAttr, 'texto'), {
      userId: user._id,
      autor: user.profile.name,
      submitted: new Date().getTime()
    });

    var tweetId = Tweets.insert(tweet);
    console.log(tweet);
    return tweetId;
  }
});