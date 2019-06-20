const util = require('./api_util');

class TweetCompose {
  constructor($el) {
    this.$el = $el;
    this.$inputs = this.$el.find(':input');
    $el.on("submit", this.submit.bind(this));
    $el.find("textarea").on("keyup", function(e) {
      let textLength = $(e.currentTarget).val().length;
      // console.log(`Textarea Length: ${textLength}`);
      let $strong = $el.find('.chars-left');
      $strong.empty();
      $strong.append(`${140 - $el.find("textarea").val().length} characters left`);
    });

  }

  submit(e) {
    e.preventDefault();
    let obj = this.$el.serializeJSON();
    console.log(`${obj}`);
    this.$inputs.prop('disabled', 'true');
    util.createTweet(obj).then((res) => {this.handleSuccess(res);}); //TODO
  }

  clearInput() {
    this.$inputs.empty();
  }

  handleSuccess(res) {
    let new_feed = JSON.stringify(res);
    // console.log(`${new_feed}`);
    let $li = $('<li>');
    let created_at = new Date(res.created_at);
    console.log(`Date: ${created_at}`);
    $li.append(`${res.content} -- <a href="/users/${res.user.id}">${res.user.username}</a> -- ${created_at}`);
    this.clearInput();
    this.$inputs.removeProp('disabled');
    $('#feed').prepend($li);
  }
}

module.exports = TweetCompose;