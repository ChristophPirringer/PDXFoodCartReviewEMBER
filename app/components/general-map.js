import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(foodcarts) {

      var coordArray = [];
      // debugger;
      foodcarts.forEach(function(foodcart) {
        coordArray.push([foodcart.get('latitude'), foodcart.get('longitude')]),
        console.log(foodcart.get('latitude'))
      });



      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(51.503454, -0.119562),
        zoom: 5
      };
      var map = this.get('map').findMap(container, options);
      // var latLng2 = {lat: 51.503454, lng: -0.119562};
      // var marker = new google.maps.Marker({
      //   position: {lat: 51.503454, lng: -0.119562},
      //   map: this.get('map').findMap(container, options),
      //   title: 'Hello World!'
      // });
      var marker, i;
      for ( i = 0; i < coordArray.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(coordArray[i][0], coordArray[i][1]),
          map: map
        });
          console.log(marker.position);
      }
      // this.get('map').findMap(container, marker);
    }
  }
});
