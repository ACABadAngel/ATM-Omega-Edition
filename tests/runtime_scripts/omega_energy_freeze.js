// Test world only. Run after the electrical chain passes, with its construction fixture disabled.
// Stop completely after this export, then disable this fixture and enable omega_electrical_restart.js.
ServerEvents.loaded(event => {
  var server = event.server;
  server.scheduleInTicks(20, callback => {
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var level = server.overworld();
    server.runCommandSilent('forceload add 16 0 31 15');
    level.getChunk(1, 0);
    server.runCommandSilent('setblock 17 84 5 minecraft:air');
    server.scheduleInTicks(10, settled => {
      try {
        var cube = level.getBlockEntity(new Pos(18, 84, 5));
        var energy = Number(cube.getEnergyContainer().getEnergy());
        if (energy <= 0 || !level.getBlockState(new Pos(17, 84, 5)).isAir()) throw new Error('Energy isolation failed');
        server.persistentData.putLong('omega_test_expected_cube_energy', energy);
        JsonIO.write('kubejs/export/omega-energy-freeze.json', {
          success: true, expected_energy_joules: energy, cable_removed: true
        });
        console.info('[OMEGA FREEZE] PASS isolated stored energy ' + energy);
      } catch (error) {
        JsonIO.write('kubejs/export/omega-energy-freeze.json', {success: false, failure: String(error)});
      }
    });
  });
});
