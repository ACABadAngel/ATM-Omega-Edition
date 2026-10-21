// Test fixture ONLY. Never ship in pack/overrides or use on a player's world.
// Reads real registries/recipes/FTB data and writes a chest + synthetic quest team.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(40, callback => {
    var server = event.server;
    var checks = [];
    let failure = '';
    let resumed = false;
    function check(value, message) {
      if (!value) throw new Error(message);
      checks.push(message);
    }
    try {
      var OmegaResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
      var OmegaRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
      var OmegaRecipeType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType');
      var OmegaCraftingInput = Java.loadClass('net.minecraft.world.item.crafting.CraftingInput');
      var OmegaArrayList = Java.loadClass('java.util.ArrayList');
      var OmegaUUID = Java.loadClass('java.util.UUID');
      var OmegaDate = Java.loadClass('java.util.Date');
      var OmegaBlockPos = Java.loadClass('net.minecraft.core.BlockPos');
      var OmegaQuestFile = Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
      var manager = server.getRecipeManager();
      var level = server.overworld();
      var itemId = function(stack) { return String(OmegaRegistries.ITEM.getKey(stack.getItem())); }
      var craft = function(items, expected, count) {
        var stacks = new OmegaArrayList();
        for (let i = 0; i < 9; i++) stacks.add(items[i] ? Item.of(items[i]) : Item.of('minecraft:air'));
        var input = OmegaCraftingInput.of(3, 3, stacks);
        var found = manager.getRecipeFor(OmegaRecipeType.CRAFTING, input, level);
        check(found.isPresent(), 'Matching recipe exists for ' + expected);
        var result = found.get().value().assemble(input, server.registryAccess());
        check(itemId(result) === expected && result.getCount() === count, 'Crafting returns ' + count + ' ' + expected);
      }
      for (var id of ['plant_fiber', 'tree_resin', 'primitive_core', 'pressed_core', 'mechanical_core', 'infernal_essence', 'electrical_core', 'runic_crystal', 'arcane_binder', 'arcane_core']) {
        check(Item.exists('omega:' + id), 'Registered omega:' + id);
      }
      craft(['minecraft:wheat'], 'omega:plant_fiber', 1);
      craft(['minecraft:oak_log', 'minecraft:flint'], 'omega:tree_resin', 1);
      craft(['minecraft:copper_ingot', 'minecraft:flint'], 'create:copper_sheet', 1);
      craft(['create:copper_sheet', 'omega:plant_fiber', 'create:copper_sheet',
        'omega:tree_resin', 'minecraft:charcoal', 'omega:tree_resin',
        'create:copper_sheet', 'omega:plant_fiber', 'create:copper_sheet'], 'omega:primitive_core', 1);
      craft(['minecraft:oak_planks', 'minecraft:oak_planks', 'minecraft:oak_planks',
        'create:shaft', 'omega:primitive_core', 'create:shaft',
        'minecraft:oak_planks', 'minecraft:oak_planks', 'minecraft:oak_planks'], 'create:water_wheel', 1);
      craft([null, 'minecraft:iron_block', null, 'create:shaft', 'omega:primitive_core', 'create:shaft',
        null, 'create:andesite_casing'], 'create:mechanical_press', 1);
      craft(['create:andesite_alloy', 'create:shaft', 'create:andesite_alloy',
        'create:copper_sheet', 'omega:pressed_core', 'create:copper_sheet',
        'create:andesite_alloy', 'minecraft:redstone', 'create:andesite_alloy'], 'omega:mechanical_core', 1);
      var pressing = manager.byKey(OmegaResourceLocation.parse('omega:press_primitive_core'));
      check(pressing.isPresent(), 'Create pressing recipe is loaded');
      check(String(OmegaRegistries.RECIPE_TYPE.getKey(pressing.get().value().getType())) === 'create:pressing',
        'Pressed Core uses the native Create pressing recipe type');

      var file = OmegaQuestFile.INSTANCE;
      check(file !== null && file.getAllChapters().size() === 3, 'Three real FTB chapters loaded');
      var chapter = file.getAllChapters().get(0);
      check(chapter.getQuests().size() === 12, 'Twelve real FTB quests loaded');
      check(String(chapter.getRawTitle()).indexOf('Survival') >= 0, 'English quest translation resolves');
      var team = file.getOrCreateTeamData(OmegaUUID.fromString('00000000-0000-0000-0000-000000000123'));
      var delivery = chapter.getQuests().get(9).getTasks().get(0);
      check(delivery.getMaxProgress() === 120 && delivery.consumesResources(), 'Copper contract consumes exactly 120 sheets');
      resumed = server.persistentData.getBoolean('omega_smoke_written');
      if (!resumed) {
        for (let i = 0; i < 8; i++) team.setCompleted(chapter.getQuests().get(i).getId(), new OmegaDate());
        var simulated = delivery.insert(team, Item.of('create:copper_sheet', 64), true);
        check(simulated.isEmpty() && team.getProgress(delivery) === 0, 'Simulated delivery does not change saved progress');
        var first = delivery.insert(team, Item.of('create:copper_sheet', 64), false);
        var second = delivery.insert(team, Item.of('create:copper_sheet', 64), false);
        check(first.isEmpty() && second.getCount() === 8 && team.getProgress(delivery) === 120,
          'Delivery consumes 64 plus 56 sheets and returns the remaining 8');
        var extra = delivery.insert(team, Item.of('create:copper_sheet', 64), false);
        check(extra.getCount() === 64 && team.getProgress(delivery) === 120, 'Completed delivery cannot consume twice');
        server.runCommandSilent('forceload add 0 0');
        level.getChunk(0, 0);
        server.runCommandSilent('setblock 0 80 0 minecraft:chest{Items:[{Slot:0b,id:"omega:mechanical_core",count:3}]}');
        server.persistentData.putBoolean('omega_smoke_written', true);
        file.saveNow();
      } else {
        check(team.getProgress(delivery) === 120, 'FTB team delivery progress survives full restart');
        server.runCommandSilent('forceload add 0 0');
        level.getChunk(0, 0);
      }
      var chest = level.getBlockEntity(new OmegaBlockPos(0, 80, 0));
      check(chest !== null && itemId(chest.getItem(0)) === 'omega:mechanical_core' && chest.getItem(0).getCount() === 3,
        resumed ? 'Custom item stack survives world save and restart' : 'Custom item stack can be stored in a world inventory');
    } catch (error) {
      failure = String(error);
      console.error('[OMEGA SMOKE] ' + failure);
    }
    JsonIO.write('kubejs/export/omega-smoke.json', {success: failure === '', resumed: resumed, checks: checks, failure: failure});
    console.info('[OMEGA SMOKE] ' + (failure === '' ? 'PASS ' : 'FAIL ') + checks.length + ' runtime checks');
  });
});
