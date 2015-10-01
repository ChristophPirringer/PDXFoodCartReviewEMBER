import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  actions: {
    showReviewEditForm() {
      this.set('formShowing', true);
    },
    hideReviewEditForm() {
      this.set('formShowing', false);
    },
    editReview(review) {
      var params = {
        name: this.get('name') || undefined,
        date: this.get('date') || undefined,
        rating: this.get('rating') || undefined,
        body: this.get('body') || undefined
      };
      this.sendAction('editReview', review, params);
      this.set('formShowing', false);
    },
    destroyReview(review) {
      if(confirm('are you sure?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
