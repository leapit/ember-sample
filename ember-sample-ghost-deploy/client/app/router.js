import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('posts');
  });
  this.route('about', { path: '/admin/about' });
});

export default Router;
