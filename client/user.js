Template.user.helpers({
  tweets: function() {
    if(this && this.profile && this.profile.name)
      return Tweets.find({ username: this.profile.name});
    else
      return [];
  }
});