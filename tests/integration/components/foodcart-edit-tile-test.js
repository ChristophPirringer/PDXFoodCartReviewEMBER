import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foodcart-edit-tile', 'Integration | Component | foodcart edit tile', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foodcart-edit-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foodcart-edit-tile}}
      template block text
    {{/foodcart-edit-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
