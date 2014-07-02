if(Tweets.find().count()===0) {
  Tweets.insert({
    texto: "First tweet",
    autor: "username",
    submitted: new Date().getTime()
  });
}