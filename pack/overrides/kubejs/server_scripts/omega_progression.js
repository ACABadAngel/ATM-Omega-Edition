// v0.1 vertical slice. All custom recipes have stable omega:* IDs.
// The hand-sheet route bootstraps the first core before a press exists.
ServerEvents.recipes(event => {
  event.shapeless('3x omega:plant_fiber', ['3x minecraft:wheat'])
    .id('omega:plant_fiber');
  event.shapeless('omega:tree_resin', ['#minecraft:logs', 'minecraft:flint'])
    .id('omega:tree_resin');
  event.shapeless('create:copper_sheet', ['minecraft:copper_ingot', 'minecraft:flint'])
    .id('omega:hand_copper_sheet');

  event.shaped('omega:primitive_core', ['CFC', 'RHR', 'CFC'], {
    C: 'create:copper_sheet',
    F: 'omega:plant_fiber',
    R: 'omega:tree_resin',
    H: 'minecraft:charcoal'
  }).id('omega:primitive_core');

  // Large water wheels already require a small water wheel in the pinned Create build.
  event.remove({ output: 'create:water_wheel' });
  event.shaped('create:water_wheel', ['PPP', 'SCS', 'PPP'], {
    P: '#minecraft:planks', S: 'create:shaft', C: 'omega:primitive_core'
  }).id('omega:water_wheel');

  event.remove({ output: 'create:mechanical_press' });
  event.shaped('create:mechanical_press', [' I ', 'SCS', ' A '], {
    I: 'minecraft:iron_block', S: 'create:shaft',
    C: 'omega:primitive_core', A: 'create:andesite_casing'
  }).id('omega:mechanical_press');

  // Native Create 6 recipe schema. No KubeJS Create add-on is required for this recipe.
  event.custom({
    type: 'create:pressing',
    ingredients: [{ item: 'omega:primitive_core' }],
    results: [{ id: 'omega:pressed_core' }]
  }).id('omega:press_primitive_core');

  event.shaped('omega:mechanical_core', ['ASA', 'CPC', 'ARA'], {
    A: 'create:andesite_alloy', S: 'create:shaft',
    C: 'create:copper_sheet', P: 'omega:pressed_core', R: 'minecraft:redstone'
  }).id('omega:mechanical_core');
});
