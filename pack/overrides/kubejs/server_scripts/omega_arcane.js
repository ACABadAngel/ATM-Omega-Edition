// Arcane entry and shared material chain. Exact Ars Nouveau 5.13.3 JSON codecs.
ServerEvents.recipes(event => {
  event.remove({ output: 'ars_nouveau:enchanting_apparatus' });
  event.shaped('ars_nouveau:enchanting_apparatus', ['GSG', 'CEC', 'GSG'], {
    G: 'minecraft:gold_ingot', S: 'ars_nouveau:source_gem',
    C: 'ars_nouveau:sourcestone', E: 'omega:electrical_core'
  }).id('omega:enchanting_apparatus');

  // Both native golden bowl variants have the same entry cost.
  for (var variant of ['', 'dark_']) {
    event.remove({ output: 'occultism:' + variant + 'golden_sacrificial_bowl' });
    event.shaped('occultism:' + variant + 'golden_sacrificial_bowl', ['GGG', 'OCO', ' B '], {
      G: 'minecraft:gold_ingot', O: 'occultism:otherstone',
      C: 'omega:electrical_core', B: 'occultism:' + variant + 'sacrificial_bowl'
    }).id('omega:' + variant + 'golden_sacrificial_bowl');
  }

  // Imbuement pedestal ingredients are reusable catalysts, not consumed inputs.
  event.custom({
    type: 'ars_nouveau:imbuement', input: { item: 'minecraft:amethyst_shard' },
    output: { id: 'omega:runic_crystal', count: 1 }, source: 500,
    pedestalItems: [{ item: 'ars_nouveau:source_gem' }, { item: 'occultism:spirit_attuned_gem' }]
  }).id('omega:runic_crystal');

  // Apparatus consumes all eight pedestal stacks and the Electrical Core reagent.
  event.custom({
    type: 'ars_nouveau:enchanting_apparatus', reagent: { item: 'omega:electrical_core' },
    result: { id: 'omega:arcane_binder', count: 1 }, sourceCost: 1000, keepNbtOfReagent: false,
    pedestalItems: [
      { item: 'ars_nouveau:source_gem' }, { item: 'ars_nouveau:source_gem' },
      { item: 'occultism:otherstone' }, { item: 'occultism:otherstone' },
      { item: 'minecraft:gold_ingot' }, { item: 'minecraft:gold_ingot' },
      { item: 'occultism:spirit_attuned_gem' }, { item: 'occultism:spirit_attuned_gem' }
    ]
  }).id('omega:arcane_binder');

  // Distinct from the native ars_nouveau:arcane_core apparatus base block.
  event.shaped('omega:arcane_core', ['SBS', 'RTG', 'SBS'], {
    S: 'ars_nouveau:source_gem', B: 'omega:arcane_binder', R: 'omega:runic_crystal',
    T: 'ars_nouveau:wilden_tribute', G: 'occultism:spirit_attuned_gem'
  }).id('omega:arcane_core');
});
