Template.user.helpers({
  tweets: function() {
    if(this && this.profile && this.profile.name) {
      return Tweets.find({ userId : this._id}, { sort: {"submitted": -1}});
    } else {
      return [];
    }
  }
});

Template.user.events({
  "submit form": function(e) {
    e.preventDefault();

    var tweet = {
      texto: $(e.target).find('[name="tweet"]').val()
    };

    Meteor.call('post', tweet);
  }
});