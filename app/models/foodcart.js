import DS from 'ember-data';

export default DS.Model.extend({
    address: DS.attr(),
    neighborhood: DS.attr(),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    name: DS.attr(),
    phone: DS.attr(),
    picture: DS.attr(),
    rating: DS.attr(),
    website: DS.attr(),
    reviews: DS.hasMany('review', {async: true})
});
