const FollowToggle = require('./follow_toggle');

$(() => {
  $('.follow-toggle').each((idx, ele) => {
    new FollowToggle(ele);
  });
  
});

