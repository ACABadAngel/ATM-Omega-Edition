// Disposable test instance only; never export this fixture.
// Pinned Mekanism source a00109e4856fd38b9c5b3dd7f22ce4a59cd65a80.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(60, callback => {
    var server = event.server;
    var level = server.overworld();
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var Reg = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var Types = Java.loadClass('net.minecraft.world.item.crafting.RecipeType');
    var Input = Java.loadClass('net.minecraft.world.item.crafting.CraftingInput');
    var List = Java.loadClass('java.util.ArrayList');
    var Chemistry = Java.loadClass('mekanism.api.chemical.ChemicalStack');
    var QuestFile = Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var checks = [];
    var stage = 0;
    var elapsed = 0;
    var stored = 0;
    var id = function(stack) { return String(Reg.ITEM.getKey(stack.getItem())); };
    var check = function(condition, message) {
      if (!condition) throw new Error(message);
      checks.push(message);
      console.info('[OMEGA ELECTRICAL] ' + message);
    };
    var finish = function(error) {
      JsonIO.write('kubejs/export/omega-electrical-smoke.json', {
        success: error === '', failure: error, checks: checks, elapsed_ticks: elapsed,
        cube_energy_joules: stored, power_source: 'coal-fueled heat generators; no injected energy'
      });
      console.info('[OMEGA ELECTRICAL] ' + (error === '' ? 'PASS' : 'FAIL ' + error));
    };
    var craft = function(items, expected, count) {
      var stacks = new List();
      for (var i = 0; i < 9; i++) stacks.add(Item.of(items[i] || 'minecraft:air'));
      var input = Input.of(3, 3, stacks);
      var matches = server.getRecipeManager().getRecipesFor(Types.CRAFTING, input, level);
      check(matches.size() === 1, 'Exactly one crafting match for ' + expected + ' (' + items.join(',') + ')');
      var output = matches.get(0).value().assemble(input, server.registryAccess());
      check(id(output) === expected && output.getCount() === count, 'Correct output ' + count + ' ' + expected);
    };
    try {
      for (var row = 0; row < 3; row++) {
        var bread = [];
        bread[row * 3] = 'minecraft:wheat';
        bread[row * 3 + 1] = 'minecraft:wheat';
        bread[row * 3 + 2] = 'minecraft:wheat';
        craft(bread, 'minecraft:bread', 1);
      }
      craft(['minecraft:wheat'], 'omega:plant_fiber', 1);
      craft(['minecraft:iron_ingot', 'minecraft:furnace', 'minecraft:iron_ingot',
        'minecraft:redstone', 'omega:mechanical_core', 'minecraft:redstone',
        'minecraft:iron_ingot', 'minecraft:furnace', 'minecraft:iron_ingot'], 'mekanism:metallurgic_infuser', 1);
      // The removed native recipe must not bypass the Mechanical Core gate.
      var oldGrid = new List();
      for (var old of ['minecraft:iron_ingot', 'minecraft:furnace', 'minecraft:iron_ingot',
        'minecraft:redstone', 'mekanism:ingot_osmium', 'minecraft:redstone',
        'minecraft:iron_ingot', 'minecraft:furnace', 'minecraft:iron_ingot']) oldGrid.add(Item.of(old));
      check(server.getRecipeManager().getRecipesFor(Types.CRAFTING, Input.of(3, 3, oldGrid), level).isEmpty(),
        'Old osmium-only infuser recipe is removed');
      craft(['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
        'minecraft:oak_planks', 'mekanism:ingot_osmium', 'minecraft:oak_planks',
        'minecraft:copper_ingot', 'minecraft:furnace', 'minecraft:copper_ingot'], 'mekanismgenerators:heat_generator', 1);
      craft(['mekanism:ingot_steel', 'minecraft:redstone', 'mekanism:ingot_steel'], 'mekanism:basic_universal_cable', 8);
      craft(['minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:quartz',
        'minecraft:quartz', 'minecraft:magma_cream'], 'omega:infernal_essence', 1);
      craft(['mekanism:alloy_infused', 'mekanism:basic_control_circuit', 'mekanism:alloy_infused',
        'mekanism:ingot_steel', 'omega:infernal_essence', 'mekanism:ingot_steel',
        'mekanism:alloy_infused', 'omega:mechanical_core', 'mekanism:alloy_infused'], 'omega:electrical_core', 1);
      var chapters = QuestFile.INSTANCE.getAllChapters();
      check(chapters.size() === 2 && chapters.get(0).getQuests().size() === 12 && chapters.get(1).getQuests().size() === 10,
        'Both bilingual quest chapters load: 12 preserved plus 10 electrical quests');

      server.runCommandSilent('forceload add 16 0 31 15');
      level.getChunk(1, 0);
      server.runCommandSilent('fill 16 82 0 22 87 7 minecraft:air');
      server.runCommandSilent('setblock 16 84 0 mekanismgenerators:heat_generator[facing=east]');
      server.runCommandSilent('setblock 17 84 0 mekanism:metallurgic_infuser[facing=north]');
      server.runCommandSilent('setblock 20 84 0 minecraft:furnace');
      server.runCommandSilent('setblock 16 84 5 mekanismgenerators:heat_generator[facing=east]');
      server.runCommandSilent('setblock 17 84 5 mekanism:basic_universal_cable');
      server.runCommandSilent('setblock 18 84 5 mekanism:basic_energy_cube[facing=east]');
      // /setblock skips item-side default components. Configure energy inputs as a player would.
      server.runCommandSilent('data merge block 17 84 0 {component_config:{config0:[I;1,1,1,1,1,1]}}');
      server.runCommandSilent('data merge block 18 84 5 {component_config:{config0:[I;1,1,1,1,1,1]}}');
      var generator = level.getBlockEntity(new Pos(16, 84, 0));
      var infuser = level.getBlockEntity(new Pos(17, 84, 0));
      var storageGenerator = level.getBlockEntity(new Pos(16, 84, 5));
      var cube = level.getBlockEntity(new Pos(18, 84, 5));
      var furnace = level.getBlockEntity(new Pos(20, 84, 0));
      check(generator !== null && infuser !== null && cube !== null && storageGenerator !== null, 'Real electrical test structures exist');
      generator.getInventorySlots(null).get(0).setStack(Item.of('minecraft:coal', 64));
      storageGenerator.getInventorySlots(null).get(0).setStack(Item.of('minecraft:coal', 64));
      var slots = infuser.getInventorySlots(null);
      slots.get(0).setStack(Item.of('minecraft:redstone', 16));
      slots.get(1).setStack(Item.of('minecraft:copper_ingot', 4));
      var poll = function() {
        try {
          elapsed += 20;
          if (generator.getInventorySlots(null).get(0).getStack().isEmpty()) generator.getInventorySlots(null).get(0).setStack(Item.of('minecraft:coal', 64));
          if (storageGenerator.getInventorySlots(null).get(0).getStack().isEmpty()) storageGenerator.getInventorySlots(null).get(0).setStack(Item.of('minecraft:coal', 64));
          stored = Number(cube.getEnergyContainer().getEnergy());
          var result = slots.get(2).getStack();
          if (stage === 0 && id(result) === 'mekanism:alloy_infused' && result.getCount() === 4) {
            check(true, 'Coal generator directly powers infuser: four copper become four Infused Alloy');
            slots.get(2).setStack(Item.of('minecraft:air'));
            slots.get(1).setStack(Item.of('mekanism:ingot_osmium'));
            stage = 1;
          } else if (stage === 1 && id(result) === 'mekanism:basic_control_circuit') {
            check(result.getCount() === 1, 'Powered infuser produces a Basic Control Circuit from osmium');
            slots.get(2).setStack(Item.of('minecraft:air'));
            slots.get(0).setStack(Item.of('minecraft:air'));
            // Simulate the documented player action of dumping the residual redstone infusion.
            infuser.getChemicalTanks(null).get(0).setStack(Chemistry.EMPTY);
            slots.get(0).setStack(Item.of('minecraft:coal', 8));
            slots.get(1).setStack(Item.of('minecraft:iron_ingot', 2));
            stage = 2;
          } else if (stage === 2 && id(result) === 'mekanism:enriched_iron' && result.getCount() === 2) {
            check(true, 'Powered carbon infusion produces two Enriched Iron');
            slots.get(2).setStack(Item.of('minecraft:air'));
            slots.get(1).setStack(Item.of('mekanism:enriched_iron', 2));
            stage = 3;
          } else if (stage === 3 && id(result) === 'mekanism:dust_steel' && result.getCount() === 2) {
            check(true, 'Second carbon infusion produces two Steel Dust');
            slots.get(2).setStack(Item.of('minecraft:air'));
            furnace.setItem(0, Item.of('mekanism:dust_steel', 2));
            furnace.setItem(1, Item.of('minecraft:coal'));
            stage = 4;
          } else if (stage === 4 && id(furnace.getItem(2)) === 'mekanism:ingot_steel' && furnace.getItem(2).getCount() === 2 && stored > 0) {
            check(true, 'Real furnace smelts Steel Dust into two steel ingots');
            check(true, 'Second coal generator charges Energy Cube through a Basic Universal Cable');
            server.runCommandSilent('setblock 22 84 0 minecraft:chest{Items:[{Slot:0b,id:"omega:electrical_core",count:2}]}');
            finish('');
            return;
          }
          if (elapsed >= 3600) throw new Error('Timed out at stage ' + stage + ', output ' + result + ', stored ' + stored);
          server.scheduleInTicks(20, poll);
        } catch (error) { finish(String(error)); }
      };
      server.scheduleInTicks(20, poll);
    } catch (error) { finish(String(error)); }
  });
});
