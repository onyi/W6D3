const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(() => {
  $('.follow-toggle').each((idx, ele) => {
    new FollowToggle($(ele));
  });

  $(".users-search").each((idx, ele) => {
    new UsersSearch($(ele));
  });
  
});

