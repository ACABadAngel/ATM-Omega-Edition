// Verify a saved copied world without rebuilding any machines or synthetic progress.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(80, callback => {
    var server=event.server,level=server.overworld(),checks=[],failure='';
    var Pos=Java.loadClass('net.minecraft.core.BlockPos');
    var Reg=Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var UUID=Java.loadClass('java.util.UUID');
    var QuestFile=Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var check=function(ok,message) {if(!ok) throw new Error(message);checks.push(message);};
    var runic=0,apparatus=0;
    try {
      var chest=level.getBlockEntity(new Pos(56,90,5));
      var id=function(stack){return String(Reg.ITEM.getKey(stack.getItem()));};
      check(id(chest.getItem(0)) === 'omega:arcane_binder' && id(chest.getItem(1)) === 'omega:arcane_binder','Both naturally processed binders persist');
      check(id(chest.getItem(2)) === 'omega:runic_crystal','Naturally imbued Runic Crystal persists');
      check(id(chest.getItem(3)) === 'omega:arcane_core','New Omega Arcane Core stack persists');
      runic=Number(level.getBlockEntity(new Pos(38,90,2)).getSource());
      apparatus=Number(level.getBlockEntity(new Pos(48,90,3)).getSource());
      check(runic>0 && runic === server.persistentData.getInt('omega_arcane_runic_jar'),'Isolated runic jar retains exact source after full restart');
      check(apparatus>0 && apparatus === server.persistentData.getInt('omega_arcane_apparatus_jar'),'Isolated apparatus jar retains exact source after full restart');
      var file=QuestFile.INSTANCE,chapters=file.getAllChapters();
      check(chapters.size() >= 3 && chapters.get(2).getQuests().size() === 16,'All three chapters remain loaded');
      var team=file.getOrCreateTeamData(UUID.fromString(server.persistentData.getString('omega_arcane_test_team')));
      check(team.getProgress(chapters.get(2).getQuests().get(14).getTasks().get(1)) === 1,'Synthetic native boss-kill progress persists');
      var original=file.getOrCreateTeamData(UUID.fromString('00000000-0000-0000-0000-000000000123'));
      check(original.getProgress(chapters.get(0).getQuests().get(9).getTasks().get(0)) === 120,'Original 120-sheet delivery still persists');
    }catch(error){failure=String(error);}
    JsonIO.write('kubejs/export/omega-arcane-restart.json',{success:failure === '',failure:failure,checks:checks,runic_jar_source:runic,apparatus_jar_source:apparatus});
    console.info('[OMEGA ARCANE RESTART] '+(failure === '' ? 'PASS' : 'FAIL '+failure));
  });
});
