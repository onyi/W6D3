
class FollowToggle {
  
  constructor($el) {
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.$el = $el;
    this.render();
    this.$el.on('click', 'button', handleClick);
  }

  render() {
    if (this.followState) this.$el.append('Follow!'); 
    else this.$el.append('Unfollow!');
  }

  handleClick(e) {
    e.preventDefault();
    $.ajax( {
      url: `/users/${this.userId}/follow`,
      method: `${this.followState ? 'delete' : 'post'}`,
      dataType: 'json',
      success: () => {this.followState = !this.followState;}
    });
  }
  
}

module.exports = FollowToggle;