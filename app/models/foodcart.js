import DS from 'ember-data';

export default DS.Model.extend({
    address: DS.attr(),
    latitude: DS.attr(),
    longitude: DS.attr(),
    name: DS.attr(),
    phone: DS.attr(),
    picture: DS.attr(),
    rating: DS.attr(),
    website: DS.attr(),
    reviews: DS.hasMany('review', {async: true})
});
