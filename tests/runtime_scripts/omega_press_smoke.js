// Disposable test world ONLY. Not distributed as a gameplay script.
// Real flowing water -> Water Wheel -> shaft -> Mechanical Press -> Depot.
// Pinned Create source: ac0c444d9828da3453ae8cc65338e8de063286fb.
ServerEvents.loaded(event => {
  var server = event.server;
  server.scheduleInTicks(60, callback => {
    var Pos = Java.loadClass('net.minecraft.core.BlockPos');
    var Regs = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var level = server.overworld();
    var checks = [];
    var stage = 0;
    var elapsed = 0;
    var speed = 0;
    var finish = function(error) {
      JsonIO.write('kubejs/export/omega-press-smoke.json', {
        success: error === '', failure: error, checks: checks,
        press_rpm: speed, elapsed_ticks: elapsed,
        power_source: 'create:water_wheel with flowing minecraft:water'
      });
      console.info('[OMEGA PRESS] ' + (error === '' ? 'PASS' : 'FAIL ' + error));
    };
    try {
      server.runCommandSilent('forceload add 0 0');
      level.getChunk(0, 0);
      server.runCommandSilent('fill 4 78 -2 10 86 3 minecraft:air');
      server.runCommandSilent('fill 4 78 -2 10 78 3 minecraft:stone');
      // Narrow vertical channel beside the wheel; source water falls under gravity.
      server.runCommandSilent('fill 5 79 1 5 85 1 minecraft:stone');
      server.runCommandSilent('fill 7 79 1 7 85 1 minecraft:stone');
      server.runCommandSilent('fill 6 79 2 6 85 2 minecraft:stone');
      server.runCommandSilent('fill 6 79 0 6 85 0 minecraft:stone');
      server.runCommandSilent('setblock 6 82 0 create:water_wheel[facing=east]');
      server.runCommandSilent('setblock 7 82 0 create:shaft[axis=x]');
      server.runCommandSilent('setblock 8 82 0 create:mechanical_press[facing=east]');
      server.runCommandSilent('setblock 8 80 0 create:depot');
      server.runCommandSilent('setblock 6 85 1 minecraft:water');
      var depot = level.getBlockEntity(new Pos(8, 80, 0));
      var press = level.getBlockEntity(new Pos(8, 82, 0));
      var wheel = level.getBlockEntity(new Pos(6, 82, 0));
      if (depot === null || press === null || wheel === null) throw new Error('Test structure is missing');
      depot.setHeldItem(Item.of('omega:primitive_core'));
      var poll = function() {
        try {
          elapsed += 20;
          speed = Math.abs(press.getSpeed());
          var item = depot.getHeldItem();
          if (stage === 0 && String(Regs.ITEM.getKey(item.getItem())) === 'omega:pressed_core') {
            if (speed === 0 || Math.abs(wheel.getGeneratedSpeed()) === 0) throw new Error('Press has no real water power');
            if (item.getCount() !== 1) throw new Error('Pressed Core output count mismatch');
            checks.push('Flowing water drives a real water wheel and press');
            checks.push('Real press converts one Primitive Core to one Pressed Core');
            depot.setHeldItem(Item.of('minecraft:copper_ingot'));
            stage = 1;
          } else if (stage === 1 && String(Regs.ITEM.getKey(item.getItem())) === 'create:copper_sheet') {
            if (item.getCount() !== 1) throw new Error('Copper sheet output count mismatch');
            checks.push('Same powered press converts a copper ingot into one copper sheet');
            finish('');
            return;
          }
          if (elapsed >= 1200) throw new Error('Press timed out at stage ' + stage + ', RPM ' + speed + ', item ' + item);
          server.scheduleInTicks(20, poll);
        } catch (error) { finish(String(error)); }
      };
      server.scheduleInTicks(20, poll);
    } catch (error) { finish(String(error)); }
  });
});
