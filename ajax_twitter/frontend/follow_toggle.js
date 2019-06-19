const util = require('./api_util');
class FollowToggle {
  
  constructor($el) {
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.$el = $el;
    this.render();
    this.$el.on('click', (e) => {
      this.handleClick(e);
    });
  }

  render() {
    this.$el.empty();
    if (this.followState) this.$el.append('Unfollow!'); 
    else this.$el.append('Follow!');
  }

  handleClick(e) {
    let userId = this.userId;
    e.preventDefault();
    if (this.followState){
      util.unfollowUser(userId).then(this.changeFollowState.bind(this));
    }else{
      util.followUser(userId).then(this.changeFollowState.bind(this));
    }
  }

  changeFollowState(){
    this.followState = !this.followState;
    this.render();

  }
  
}

module.exports = FollowToggle;