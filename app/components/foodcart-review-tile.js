import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  actions: {
    showReviewForm() {
      this.set('formShowing', true);
    },
    hideReviewForm() {
      this.set('formShowing', false);
    },
    createReview(foodcart) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        rating: this.get('rating'),
        body: this.get('body'),
        foodcart: foodcart
      }
      this.sendAction('createReview', foodcart, params);
      this.set('FormShowing', false);
    }
  }
});
