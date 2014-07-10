Template.list.helpers({
  tweets: function() {
    return Tweets.find({}, { sort: {"submitted": -1}});
  }
});

Template.list.events({
  "submit form": function(e) {
    e.preventDefault();

    var tweet = {
      texto: $(e.target).find('[name="tweet"]').val()
    };

    Meteor.call('post', tweet);
  }
});