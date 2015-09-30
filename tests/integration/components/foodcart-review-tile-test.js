import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foodcart-review-tile', 'Integration | Component | foodcart review tile', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foodcart-review-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foodcart-review-tile}}
      template block text
    {{/foodcart-review-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
