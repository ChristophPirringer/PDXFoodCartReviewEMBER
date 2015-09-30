import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('foodcart', params.foodcart_id)
    // return Ember.RSVP.hash ({
    //   reviews: this.store.findAll('review'),
    // });
  },
  actions: {
    createReview(foodcart, params) {
      var newReview = this.store.createRecord('review', params);
      debugger;
      newReview.save();
      foodcart.save();

      this.transitionTo('foodcart');
    }
  }
});
