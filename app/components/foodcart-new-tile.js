import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,

  actions: {
    showCreateForm() {
      this.set('formShowing', true);
    },
    hideCreateForm() {
      this.set('formShowing', false);
    },

    createFoodcart() {
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
      };
      this.sendAction('createFoodcart', params);
      this.set('formShowing', false);
    }

  }
});
