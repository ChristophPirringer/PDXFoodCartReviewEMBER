import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,

  actions: {
    showForm() {
      this.set('formShowing', true);
    },
    hideForm() {
      this.set('formShowing', false);
    },
    destroyFoodcart(foodcart) {
      if(confirm('are you sure?')) {
        this.sendAction('destroyFoodcart', foodcart);
      }
    },
    editFoodcart(foodcart) {
      var params = {
        address: this.get('address') || undefined,
        latitude: this.get('latitude') || undefined,
        longitude: this.get('longitude') || undefined,
        name: this.get('name') || undefined,
        neighborhood: this.get('neighborhood') || undefined,
        phone: this.get('phone') || undefined,
        picture: this.get('picture') || undefined,
        website: this.get('website') || undefined,
        rating: this.get('rating') || undefined
      }
      this.sendAction('editFoodcart', foodcart, params);
      this.set('formShowing', false);
    }

  }
});
