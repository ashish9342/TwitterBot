const Twit = require('twit')
const config = require('./config');
const T = new Twit(config);

function tweetIt(){
  var r = Math.floor(Math.random()*100);

  var tweet = {
    status: '#' + r + ' This is fun #Nodejs #BotTweet'
  };

  T.post('statuses/update', tweet, tweeted)

  function tweeted(err, data, response) {
    if(err){
      console.error(err);
      console.log("Error Occured");
    }else {
      console.log("Tweeted");
    }
  }
}