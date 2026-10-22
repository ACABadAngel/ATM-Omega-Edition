// Disposable instance only: read saved circuits and native ME item/chemical cells.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(100,callback => {
    var server=event.server,level=server.overworld(),checks=[],failure='',items=0,chemicals=0;
    var Pos=Java.loadClass('net.minecraft.core.BlockPos');
    var Reg=Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var RL=Java.loadClass('net.minecraft.resources.ResourceLocation');
    var QuestFile=Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var AEItemKey=Java.loadClass('appeng.api.stacks.AEItemKey');
    var ChemicalKey=Java.loadClass('me.ramidzkh.mekae2.ae2.MekanismKey');
    var Chemistry=Java.loadClass('mekanism.api.chemical.ChemicalStack');
    var MekAPI=Java.loadClass('mekanism.api.MekanismAPI');
    var UUID=Java.loadClass('java.util.UUID');
    var check=(ok,msg) => {if(!ok)throw new Error(msg);checks.push(msg);};
    var id=stack => String(Reg.ITEM.getKey(stack.getItem()));
    try {
      var chest=level.getBlockEntity(new Pos(92,96,6)),drive=level.getBlockEntity(new Pos(67,96,8));
      check(id(chest.getItem(0)) === 'omega:industrial_circuit' && id(chest.getItem(1)) === 'omega:industrial_circuit','Two natively processed Industrial Circuits persist');
      check(id(chest.getItem(2)) === 'omega:industrial_core' && chest.getItem(2).getCount() === 1 && id(chest.getItem(3)) === 'omega:industrial_core','Both test Industrial Core stacks persist');
      check(id(chest.getItem(7)) === 'ae2:logic_processor','Native Logic Processor persists');
      check(id(chest.getItem(6)) === 'ae2:fluix_crystal' && chest.getItem(6).getCount() === 2,'Native water-reaction Fluix output persists');
      check(drive.getMainNode().isOnline(),'Saved ME drive comes online after full JVM restart');
      var storage=drive.getMainNode().getGrid().getStorageService().getInventory();
      var key=AEItemKey['of(net.minecraft.world.item.ItemStack)'](Item.of('minecraft:copper_ingot'));
      items=Number(storage.getAvailableStacks().get(key));
      check(items === 96 && items === server.persistentData.getInt('omega_industrial_expected_items'),'Item cell retains exactly 96 copper after restart');
      var chemicalId=server.persistentData.getString('omega_industrial_chemical');
      var chemical=MekAPI.CHEMICAL_REGISTRY.get(RL.parse(chemicalId));
      var chem=ChemicalKey.of(new Chemistry(chemical,1));
      chemicals=Number(storage.getAvailableStacks().get(chem));
      check(chemicals === 96 && chemicals === server.persistentData.getInt('omega_industrial_expected_chemical'),'Chemical cell retains exactly 96 naturally produced units after restart');
      var file=QuestFile.INSTANCE,chapters=file.getAllChapters();
      check(chapters.size() === 4 && chapters.get(3).getQuests().size() === 20,'All four chapters and 20 industrial quests remain loaded');
      var original=file.getOrCreateTeamData(UUID.fromString('00000000-0000-0000-0000-000000000123'));
      check(original.getProgress(chapters.get(0).getQuests().get(9).getTasks().get(0)) === 120,'Original 120-sheet delivery is unchanged');
      var arcane=file.getOrCreateTeamData(UUID.fromString(server.persistentData.getString('omega_arcane_test_team')));
      check(arcane.getProgress(chapters.get(2).getQuests().get(14).getTasks().get(1)) === 1,'Existing native boss-kill progress is unchanged');
    }catch(error){failure=String(error);}
    JsonIO.write('kubejs/export/omega-industrial-restart.json',{success:failure === '',failure:failure,checks:checks,stored_copper:items,stored_chemical:chemicals});
    console.info('[OMEGA INDUSTRIAL RESTART] '+(failure === ''?'PASS':'FAIL '+failure));
  });
});
