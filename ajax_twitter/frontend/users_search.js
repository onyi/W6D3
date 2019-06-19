const util = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {

  constructor($el) {
    this.$el = $el;
    this.username = $el.find('#user-name');
    this.$ul = $el.find('.users');
    this.username.change(this.handleInput.bind(this));
  }

  handleInput(e) {
    console.log(`Username: ${this.username.val()}`);
    let success = (res) => {
      this.$ul.empty();
      console.log(`Result: ${JSON.stringify(res)}`);
      res.forEach((user) => {
        let $li = $('<li>');
        $li.append(`<a href="/users/${user.id}">${user.username}</a>`);
        let $button = $(`<button class="follow-toggle"
                    data-user-id="${user.id}"
                    data-initial-follow-state="${user.followed}">
                    </button>`);
        new FollowToggle($button, user);            
        $li.append($button);
        this.$ul.append($li);
      });
    };
    util.searchUsers(this.username.val(), success);
  }




}

module.exports = UsersSearch;