import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(foodcart) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(foodcart.get('latitude'), foodcart.get('longitude')),
        zoom: 15
      };
      var latLng = {lat: options.center.H, lng: options.center.L};
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.get('map').findMap(container, options),
        title: 'Hello World!'
      });

      this.get('map').findMap(container, marker);
    }
  }
});
