import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(foodcarts) {

      var coordArray = [];
      var contentArray = [];
      var markerarray = [];

      foodcarts.forEach(function(foodcart) {
        coordArray.push([foodcart.get('latitude'), foodcart.get('longitude')]),
        contentArray.push([foodcart.get('name'), foodcart.get('website')])
      });

      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(41.40338, 2.17403),
        zoom: 5
      };
      var map = this.get('map').findMap(container, options);

      var infowindow = new google.maps.InfoWindow();
      var marker;
      var i = 0;
      var j = 0;

      for ( i = 0; i < coordArray.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(coordArray[i][0], coordArray[i][1]),
          map: map,
          title:coordArray[i][2]
        });
        markerarray.push(marker);
      };

      markerarray.forEach(function(marker, j){
        google.maps.event.addListener(marker, 'click',  function() {
          infowindow.setContent(contentArray[j-1][0] + " " + contentArray[j-1][1]);
        console.log("j at setContent" + j);
          infowindow.open(map, this);
        });
        console.log("j" + j);
        console.log('content' + contentArray[j][0]);
        j++;
      });



    }
  }
});
