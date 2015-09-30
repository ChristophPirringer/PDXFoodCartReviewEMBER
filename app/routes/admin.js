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
      foodcart.get('reviews').then(function(reviews){
        reviews.forEach(function(review) {
          review.destroyRecord();
        });
      });
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
    },
    createFoodcart(params) {
      var newCart = this.store.createRecord('foodcart', params);
      debugger;
      newCart.save();
      this.transitionTo('admin');
    }
  }
});
