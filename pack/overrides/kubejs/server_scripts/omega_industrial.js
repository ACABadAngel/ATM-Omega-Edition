// Industrial entry: keep native AE2 acceptor conversions; replace only its base craft.
ServerEvents.recipes(event => {
  event.remove({ output: 'industrialforegoing:fluid_extractor' });
  event.shaped('industrialforegoing:fluid_extractor', ['IGI', 'CEC', 'IPI'], {
    I: 'minecraft:iron_ingot', G: 'minecraft:light_weighted_pressure_plate',
    C: 'minecraft:cobblestone', E: 'omega:electrical_core', P: 'minecraft:piston'
  }).id('omega:fluid_extractor');

  event.remove({ output: 'industrialforegoing:latex_processing_unit' });
  event.shaped('industrialforegoing:latex_processing_unit', ['IRI', 'BAB', 'IFI'], {
    I: 'minecraft:iron_ingot', R: 'minecraft:redstone_block', B: 'minecraft:bucket',
    A: 'omega:arcane_core', F: 'minecraft:furnace'
  }).id('omega:latex_processing_unit');

  event.remove({ output: 'ae2:inscriber' });
  event.shaped('ae2:inscriber', ['IPI', 'CEI', 'IPI'], {
    I: 'minecraft:iron_ingot', P: 'minecraft:piston', C: 'minecraft:copper_ingot',
    E: 'omega:electrical_core'
  }).id('omega:inscriber');

  event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' });
  event.shaped('ae2:energy_acceptor', ['IQI', 'QAQ', 'IQI'], {
    I: 'minecraft:iron_ingot', Q: 'ae2:quartz_glass', A: 'omega:arcane_core'
  }).id('omega:energy_acceptor');

  event.remove({ output: 'ae2:drive' });
  event.shaped('ae2:drive', ['IPI', 'CAC', 'IPI'], {
    I: 'minecraft:iron_ingot', P: 'ae2:engineering_processor', C: 'ae2:fluix_glass_cable',
    A: 'omega:arcane_core'
  }).id('omega:me_drive');

  event.remove({ output: 'ae2:controller' });
  event.shaped('ae2:controller', ['SFS', 'FCF', 'SFS'], {
    S: 'ae2:smooth_sky_stone_block', F: 'ae2:fluix_crystal', C: 'omega:industrial_core'
  }).id('omega:me_controller');

  // PRESS consumes BOTH plate slots; INSCRIBE would wrongly preserve the plastic/alloy.
  event.custom({ type: 'ae2:inscriber', mode: 'press',
    ingredients: { top: { item: 'industrialforegoing:plastic' },
      middle: { item: 'omega:electrical_core' }, bottom: { item: 'mekanism:alloy_reinforced' } },
    result: { id: 'omega:industrial_circuit', count: 1 }
  }).id('omega:industrial_circuit');

  // Empty components only: never consume a storage cell containing items or chemicals.
  event.shaped('omega:industrial_core', ['PCP', 'HAL', 'PCP'], {
    P: 'industrialforegoing:plastic', C: 'omega:industrial_circuit',
    H: 'appmek:chemical_cell_housing', A: 'omega:arcane_core', L: 'ae2:cell_component_1k'
  }).id('omega:industrial_core');
});
