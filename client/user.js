Template.user.helpers({
  tweets: function() {
    if(this && this.profile && this.profile.name) {
      console.log(Tweets.find({ userId : this.userID}));
      return Tweets.find({ userId : this.userID}); //o username: this.profile.name
    } else {
      return [];
    }
  }
});