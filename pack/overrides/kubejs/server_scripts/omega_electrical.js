// Electrical entry: mechanical infrastructure precedes the first infuser.
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event.shaped('mekanism:metallurgic_infuser', ['IFI', 'RCR', 'IFI'], {
    I: 'minecraft:iron_ingot', F: 'minecraft:furnace',
    R: 'minecraft:redstone', C: 'omega:mechanical_core'
  }).id('omega:metallurgic_infuser');

  // Nether materials, not a claim that the player's dimension visit was recorded.
  event.shapeless('omega:infernal_essence', [
    '2x minecraft:blaze_powder', '2x minecraft:quartz', 'minecraft:magma_cream'
  ]).id('omega:infernal_essence');

  event.shaped('omega:electrical_core', ['ACA', 'SES', 'ARA'], {
    A: 'mekanism:alloy_infused', C: 'mekanism:basic_control_circuit',
    S: 'mekanism:ingot_steel', E: 'omega:infernal_essence', R: 'omega:mechanical_core'
  }).id('omega:electrical_core');
});
