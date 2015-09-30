import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      foodcarts: this.store.findAll('foodcart'),
      // reviews will go here
    });
  }
});
