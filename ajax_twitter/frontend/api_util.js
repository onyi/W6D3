const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'post',
      dataType: 'json'
      });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'delete',
      dataType: 'json'
    });
  },

  searchUsers: (queryVal, success) => {
    const promise1 = $.ajax({
      url: '/users/search',
      method: 'get',
      dataType: 'json',
      data: {
        query: queryVal 
      }
    });
    promise1.then(success);
  },
  
  createTweet: (data) => {
    return $.ajax({
      url: '/tweets',
      method: 'post',
      dataType: 'json',
      data: data
    });
  }
};

module.exports = APIUtil;
 