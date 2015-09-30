import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      foodcarts: this.store.findAll('foodcart'),
      // reviews will go here
    });
  },
  actions: {
    destroyFoodcart(foodcart) {
      foodcart.destroyRecord();
      this.transitionTo('admin');
    },
    editFoodcart(foodcart, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          foodcart.set(key, params[key]);
        }
      });
      foodcart.save();
      this.transitionTo('admin');
    }
  }
});