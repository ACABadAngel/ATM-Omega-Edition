// Fresh disposable world only: bounded natural-osmium sample, not a resource survey.
ServerEvents.loaded(event => {
  event.server.scheduleInTicks(60, callback => {
    var server = event.server;
    var level = server.overworld();
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var Reg = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var found = null;
    var inspected = 0;
    try {
      server.runCommandSilent('forceload add 0 0 31 31');
      level.getChunk(0, 0);
      level.getChunk(0, 1);
      level.getChunk(1, 0);
      level.getChunk(1, 1);
      sample:
      for (var x = 0; x < 32; x++) {
        for (var z = 0; z < 32; z++) {
          for (var y = -64; y < 64; y++) {
            inspected++;
            var name = String(Reg.BLOCK.getKey(level.getBlockState(new Pos(x, y, z)).getBlock()));
            if (name === 'mekanism:osmium_ore' || name === 'mekanism:deepslate_osmium_ore') {
              found = {id: name, x: x, y: y, z: z};
              break sample;
            }
          }
        }
      }
      JsonIO.write('kubejs/export/omega-worldgen-smoke.json', {
        success: found !== null, inspected_blocks: inspected, first_natural_osmium: found,
        note: 'One fresh-world sample; no ore blocks placed by the fixture'
      });
      console.info('[OMEGA WORLDGEN] ' + (found !== null ? 'PASS natural osmium found' : 'FAIL no osmium in sample'));
    } catch (error) {
      JsonIO.write('kubejs/export/omega-worldgen-smoke.json', {success: false, failure: String(error)});
      console.error('[OMEGA WORLDGEN] ' + String(error));
    }
  });
});
