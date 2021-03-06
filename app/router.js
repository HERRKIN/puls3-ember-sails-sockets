import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Puls3ENV.locationType
});

Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: ':post_id' });
});

export default Router;
