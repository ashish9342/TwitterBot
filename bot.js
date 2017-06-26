const Twit = require('twit')
const config = require('./config');
const T = new Twit(config);

var params = { q: 'javascript', count: 5 };
T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text)
  }
}