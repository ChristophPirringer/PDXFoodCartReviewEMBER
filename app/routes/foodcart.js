import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('foodcart', params.foodcart_id);
  },
  actions: {
    createReview(foodcart, params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      foodcart.save();

      this.transitionTo('foodcart');
    },
    editReview(review, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          review.set(key, params[key]);
        }
      });
      review.save();
      this.transitionTo('foodcart');
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('foodcart');
    }
  }
});
