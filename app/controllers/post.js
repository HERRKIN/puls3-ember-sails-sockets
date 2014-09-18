import Ember from 'ember';

export default Ember.ObjectController.extend({
	
  actions: {
    voteUp: function() {
      	this.set('votes', this.get('votes')+1);
        console.log("voting up");
        this.model.save();
    },
    voteDown: function() {
    	console.log("voting down");
      this.set('votes', this.get('votes')-1);
      this.model.save();
    }
  }
});
