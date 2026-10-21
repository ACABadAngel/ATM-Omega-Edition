// Run ONLY on the stopped/saved world from omega_electrical_smoke.js.
// Disable that construction fixture first so it cannot reset this stored state.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(40, callback => {
    var server = event.server;
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var Reg = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var QuestFile = Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var UUID = Java.loadClass('java.util.UUID');
    var checks = [];
    var energy = 0;
    var failure = '';
    var check = function(value, message) {
      if (!value) throw new Error(message);
      checks.push(message);
    };
    try {
      var level = server.overworld();
      server.runCommandSilent('forceload add 16 0 31 15');
      level.getChunk(1, 0);
      var chest = level.getBlockEntity(new Pos(22, 84, 0));
      check(chest !== null && String(Reg.ITEM.getKey(chest.getItem(0).getItem())) === 'omega:electrical_core'
        && chest.getItem(0).getCount() === 2, 'Two Electrical Cores remain in the saved chest after full restart');
      var cube = level.getBlockEntity(new Pos(18, 84, 5));
      energy = Number(cube.getEnergyContainer().getEnergy());
      check(energy > 0, 'The charged Energy Cube retains energy after full restart');
      var file = QuestFile.INSTANCE;
      var team = file.getOrCreateTeamData(UUID.fromString('00000000-0000-0000-0000-000000000123'));
      var delivery = file.getAllChapters().get(0).getQuests().get(9).getTasks().get(0);
      check(team.getProgress(delivery) === 120, 'Original alpha delivery progress remains 120');
      check(file.getAllChapters().size() === 2 && file.getAllChapters().get(1).getQuests().size() === 10,
        'The new electrical chapter loads after restart');
    } catch (error) { failure = String(error); }
    JsonIO.write('kubejs/export/omega-electrical-restart.json', {
      success: failure === '', checks: checks, failure: failure, cube_energy_joules: energy
    });
    console.info('[OMEGA RESTART] ' + (failure === '' ? 'PASS' : 'FAIL ' + failure));
  });
});
