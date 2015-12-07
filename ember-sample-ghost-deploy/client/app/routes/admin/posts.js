import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['all', 'admin', 'posts'];
  }
});