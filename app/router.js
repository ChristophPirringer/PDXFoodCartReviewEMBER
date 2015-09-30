import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('foodcart', {path: '/foodcart/:foodcart_id'});
  this.route('admin');
});

export default Router;
