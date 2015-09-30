import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  foodcart: DS.belongsTo('foodcart', {async: true})
});
