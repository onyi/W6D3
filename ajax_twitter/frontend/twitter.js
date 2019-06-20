const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(() => {
  $('.follow-toggle').each((idx, ele) => {
    new FollowToggle($(ele));
  });

  $(".users-search").each((idx, ele) => {
    new UsersSearch($(ele));
  });

  $(".tweet-compose").each((idx, ele) => {
    new TweetCompose($(ele));
  });
  
});

