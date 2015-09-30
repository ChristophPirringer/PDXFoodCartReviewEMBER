import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createReview(params) {
      var newReview = this.store.createRecord('review', params);
      debugger;
      newReview.save();

      this.transitionTo('foodcart');
    }
  }
});
