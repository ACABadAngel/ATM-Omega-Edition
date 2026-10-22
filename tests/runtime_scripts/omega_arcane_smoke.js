// DISPOSABLE copied-world fixture only. Never ship or run in a player world.
// Supplies test ingredients; native Ars/Occultism blocks perform the processing.
const omegaArcaneTest = server => {
  server.scheduleInTicks(80, callback => {
    var level = server.overworld();
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var Reg = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var Types = Java.loadClass('net.minecraft.world.item.crafting.RecipeType');
    var Input = Java.loadClass('net.minecraft.world.item.crafting.CraftingInput');
    var List = Java.loadClass('java.util.ArrayList');
    var UUID = Java.loadClass('java.util.UUID');
    var Date = Java.loadClass('java.util.Date');
    var QuestFile = Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var AABB = Java.loadClass('net.minecraft.world.phys.AABB');
    var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
    var checks = [], elapsed = 0, stage = 0, sourceBefore = 0, binders = 0;
    var jarHistory = [], done = false;
    var id = function(stack) { return String(Reg.ITEM.getKey(stack.getItem())); };
    var tile = function(x,z) { return level.getBlockEntity(new Pos(x,90,z)); };
    var block = function(x,y,z,name) { server.runCommandSilent('setblock '+x+' '+y+' '+z+' '+name); };
    var check = function(test,message) {
      if (!test) throw new Error(message);
      checks.push(message); console.info('[OMEGA ARCANE] '+message);
    };
    var finish = function(error) {
      if (done) return; done = true;
      JsonIO.write('kubejs/export/omega-arcane-smoke.json', {
        success: error === '', failure: error, checks: checks, elapsed_ticks: elapsed,
        binder_outputs: binders, jar_samples: jarHistory,
        source_supply: 'native Volcanic Sourcelinks burning coal blocks; no injected source',
        kill_test_scope: 'native KillTask.kill adapter with real entity classes; not a player combat test'
      });
      console.info('[OMEGA ARCANE] '+(error === '' ? 'PASS' : 'FAIL '+error));
    };
    var grid = function(items) {
      var stacks = new List(); for (var i=0;i<9;i++) stacks.add(Item.of(items[i] || 'minecraft:air'));
      return Input.of(3,3,stacks);
    };
    var craft = function(items,expected) {
      var input=grid(items), matches=server.getRecipeManager().getRecipesFor(Types.CRAFTING,input,level);
      check(matches.size() === 1, 'Exactly one craft for '+expected);
      check(id(matches.get(0).value().assemble(input,server.registryAccess())) === expected, 'Correct crafting output '+expected);
    };
    var pedestals = [[46,-2],[48,-2],[50,-2],[46,0],[50,0],[46,2],[48,2],[50,2]];
    var ingredients = ['ars_nouveau:source_gem','ars_nouveau:source_gem','occultism:otherstone','occultism:otherstone',
      'minecraft:gold_ingot','minecraft:gold_ingot','occultism:spirit_attuned_gem','occultism:spirit_attuned_gem'];
    var startBinder = function() {
      for (var i=0;i<8;i++) tile(pedestals[i][0],pedestals[i][1]).setItem(0,Item.of(ingredients[i]));
      sourceBefore=Number(tile(48,3).getSource());
      tile(48,0).setItem(0,Item.of('omega:electrical_core'));
      check(tile(48,0).isCrafting, 'Native apparatus starts binder '+(binders+1));
      check(Number(tile(48,3).getSource()) === sourceBefore-1000, 'Apparatus consumes exactly 1000 generated source');
    };
    try {
      var chapters=QuestFile.INSTANCE.getAllChapters();
      check(chapters.size() >= 3 && chapters.get(2).getQuests().size() === 16, 'Third real FTB chapter imports all 16 arcane quests');
      for (var item of ['omega:runic_crystal','omega:arcane_binder','omega:arcane_core']) check(Item.exists(item),'Registered '+item);
      // Every quest item must exist, including third-party item names in the guide.
      for (var quest of chapters.get(2).getQuests()) for (var task of quest.getTasks()) {
        if (String(task.getType().getTypeId()) === 'ftbquests:item') check(!task.getItemStack().isEmpty(), 'Quest item resolves '+id(task.getItemStack()));
      }
      craft(['minecraft:gold_ingot','ars_nouveau:source_gem','minecraft:gold_ingot',
        'ars_nouveau:sourcestone','omega:electrical_core','ars_nouveau:sourcestone',
        'minecraft:gold_ingot','ars_nouveau:source_gem','minecraft:gold_ingot'],'ars_nouveau:enchanting_apparatus');
      for (var variant of ['', 'dark_']) {
        craft(['minecraft:gold_ingot','minecraft:gold_ingot','minecraft:gold_ingot',
          'occultism:otherstone','omega:electrical_core','occultism:otherstone',null,'occultism:'+variant+'sacrificial_bowl'],
          'occultism:'+variant+'golden_sacrificial_bowl');
        var old=['minecraft:gold_ingot','minecraft:gold_ingot','minecraft:gold_ingot','minecraft:gold_ingot',
          'occultism:'+variant+'sacrificial_bowl','minecraft:gold_ingot','minecraft:gold_ingot','minecraft:gold_ingot','minecraft:gold_ingot'];
        check(server.getRecipeManager().getRecipesFor(Types.CRAFTING,grid(old),level).isEmpty(), 'Old '+variant+'golden bowl bypass removed');
      }
      craft(['ars_nouveau:source_gem','omega:arcane_binder','ars_nouveau:source_gem',
        'omega:runic_crystal','ars_nouveau:wilden_tribute','occultism:spirit_attuned_gem',
        'ars_nouveau:source_gem','omega:arcane_binder','ars_nouveau:source_gem'],'omega:arcane_core');
      check(server.getRecipeManager().byKey(RL.parse('ars_nouveau:enchanting_apparatus')).isEmpty(), 'Native apparatus crafting bypass removed');
      var testUUID=UUID.randomUUID();
      server.persistentData.putString('omega_arcane_test_team',String(testUUID));
      var team=QuestFile.INSTANCE.getOrCreateTeamData(testUUID);
      var bossQuest=chapters.get(2).getQuests().get(14), kill=bossQuest.getTasks().get(1);
      check(kill.getMaxProgress() === 1, 'Native KillTask requires one boss');
      var zombie=Reg.ENTITY_TYPE.get(RL.parse('minecraft:zombie')).create(level);
      var chimera=Reg.ENTITY_TYPE.get(RL.parse('ars_nouveau:wilden_boss')).create(level);
      check(chimera !== null,'Native registered boss entity constructs successfully');
      // A new UUID in a fresh copy keeps this test independent from restart verification.
      check(team.getProgress(kill) === 0, 'Boss kill starts at zero');
      kill.kill(team,zombie); check(team.getProgress(kill) === 0, 'Unrelated zombie does not satisfy boss task');
      kill.kill(team,chimera); check(team.getProgress(kill) === 1, 'Correct native boss increments KillTask');
      kill.kill(team,chimera); check(team.getProgress(kill) === 1, 'Completed kill task does not double count');
      QuestFile.INSTANCE.saveNow();

      server.runCommandSilent('forceload add 32 -16 63 15');
      level.getChunk(2,0);level.getChunk(3,0);level.getChunk(2,-1);level.getChunk(3,-1);
      server.runCommandSilent('fill 32 89 -4 58 94 8 minecraft:air');
      server.runCommandSilent('fill 32 89 -4 58 89 8 minecraft:bedrock');
      block(34,90,0,'ars_nouveau:imbuement_chamber');tile(34,0).setItem(0,Item.of('minecraft:lapis_lazuli'));
      block(38,90,0,'ars_nouveau:imbuement_chamber');
      for (var p of [[37,0],[39,0],[40,2],[48,6]]) block(p[0],90,p[1],'ars_nouveau:arcane_pedestal');
      tile(37,0).setItem(0,Item.of('ars_nouveau:source_gem'));
      tile(39,0).setItem(0,Item.of('occultism:spirit_attuned_gem'));
      for (var p of [[38,2],[48,3]]) block(p[0],90,p[1],'ars_nouveau:source_jar');
      for (var p of [[39,2],[48,5]]) block(p[0],90,p[1],'ars_nouveau:volcanic_sourcelink');
      tile(40,2).setItem(0,Item.of('minecraft:coal_block'));tile(48,6).setItem(0,Item.of('minecraft:coal_block'));
      tile(38,0).setItem(0,Item.of('minecraft:amethyst_shard'));
      block(48,89,0,'ars_nouveau:arcane_core');block(48,90,0,'ars_nouveau:enchanting_apparatus');
      for (var p of pedestals) block(p[0],90,p[1],'ars_nouveau:arcane_pedestal');
      block(56,90,0,'occultism:spirit_fire');block(58,90,0,'occultism:spirit_fire');
      level.addFreshEntity(new ItemEntity(level,56.5,90.1,0.5,Item.of('minecraft:andesite')));
      level.addFreshEntity(new ItemEntity(level,58.5,90.1,0.5,Item.of('minecraft:diamond')));
      block(56,90,5,'minecraft:chest');
    } catch (error) { finish(String(error));return; }
    var tick=function() {
      try {
        elapsed+=20;
        jarHistory.push({tick:elapsed,runic:Number(tile(38,2).getSource()),apparatus:Number(tile(48,3).getSource())});
        if (elapsed === 200 || elapsed === 400) {
          tile(40,2).setItem(0,Item.of('minecraft:coal_block'));tile(48,6).setItem(0,Item.of('minecraft:coal_block'));
        }
        if (stage === 0 && elapsed>=200 && Number(tile(48,3).getSource())>=1000) {startBinder();stage=1;}
        if (stage === 1 && id(tile(48,0).getItem(0)) === 'omega:arcane_binder') {
          binders++;tile(56,5).setItem(binders-1,tile(48,0).getItem(0).copy());tile(48,0).setItem(0,Item.of('minecraft:air'));
          check(pedestals.every(p => tile(p[0],p[1]).getItem(0).isEmpty()), 'Apparatus consumes all eight pedestal ingredients for binder '+binders);
          stage=binders === 2 ? 3 : 2;
        }
        if (stage === 2 && Number(tile(48,3).getSource())>=1000) {startBinder();stage=1;}
        if (stage === 3 && elapsed>=1200) {
          check(id(tile(38,0).getItem(0)) === 'omega:runic_crystal','Real chamber makes Runic Crystal');
          check(id(tile(37,0).getItem(0)) === 'ars_nouveau:source_gem' && id(tile(39,0).getItem(0)) === 'occultism:spirit_attuned_gem',
            'Both imbuement catalysts remain reusable');
          check(id(tile(34,0).getItem(0)) === 'ars_nouveau:source_gem','Native lapis bootstrap works via passive chamber source');
          check(tile(38,2).getSource()>0 && tile(48,3).getSource()>0,'Both jars received real generated source');
          check(tile(40,2).getItem(0).isEmpty() && tile(48,6).getItem(0).isEmpty(),'Volcanic links consume test fuel');
          var drops=level.getEntitiesOfClass(ItemEntity,new AABB(54,89,-2,60,94,2));
          var other=false,gem=false;
          for (var entity of drops) {if (id(entity.getItem()) === 'occultism:otherstone') other=true;if (id(entity.getItem()) === 'occultism:spirit_attuned_gem') gem=true;}
          check(other && gem,'Real Spirit Fire converts andesite and diamond into both occult materials');
          tile(56,5).setItem(2,tile(38,0).getItem(0).copy());tile(38,0).setItem(0,Item.of('minecraft:air'));
          tile(56,5).setItem(3,Item.of('omega:arcane_core'));
          // Isolate jar storage before restart so no producer or consumer changes the meter.
          block(39,90,2,'minecraft:air');block(48,90,5,'minecraft:air');
          server.persistentData.putInt('omega_arcane_runic_jar',Number(tile(38,2).getSource()));
          server.persistentData.putInt('omega_arcane_apparatus_jar',Number(tile(48,3).getSource()));
          finish('');return;
        }
        if (elapsed>=2000) throw new Error('Native arcane processing timeout; stage '+stage);
      } catch(error) {finish(String(error));return;}
      server.scheduleInTicks(20,tick);
    };server.scheduleInTicks(20,tick);
  });};
let omegaArcaneStarted=false;
ServerEvents.tick(event => {
  if (!omegaArcaneStarted) {omegaArcaneStarted=true;omegaArcaneTest(event.server);}
});
