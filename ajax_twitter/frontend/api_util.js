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
  }
};

module.exports = APIUtil;
 