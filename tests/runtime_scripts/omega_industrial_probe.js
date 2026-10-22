// Read-only diagnostic for the disposable industrial fixture. Never export.
ServerEvents.loaded(event => {});
let omegaProbeTicks=0;
ServerEvents.tick(event => {
  omegaProbeTicks++;
  if(omegaProbeTicks%200 !== 0) return;
  try {
    var Pos=Java.loadClass('net.minecraft.core.BlockPos'),level=event.server.overworld();
    var out={};
    for(var x of [80,84,88,92]) {
      var t=level.getBlockEntity(new Pos(x,96,0));if(!t) continue;
      var pos=t.getPointedBlockPos();out['extractor_'+x]={energy:t.getEnergyStorage().getEnergyStored(),pointed:String(pos),block:String(level.getBlockState(pos))};
      for(var tank of t.getMultiTankComponent().getTanks()) out['extractor_'+x][String(tank.getName())]=tank.getFluidAmount();
    }
    var p=level.getBlockEntity(new Pos(84,96,6));if(p) {out.processor_energy=p.getEnergyStorage().getEnergyStored();for(var tank of p.getMultiTankComponent().getTanks()) out['processor_'+tank.getName()]=tank.getFluidAmount();}
    var sep=level.getBlockEntity(new Pos(74,96,4));if(sep) out.separator={left:sep.leftTank.getStored(),right:sep.rightTank.getStored(),energy:sep.getEnergyContainer().getEnergy(),water:sep.fluidTank.getFluidAmount()};
    JsonIO.write('kubejs/export/omega-industrial-probe.json',out);
  }catch(error){console.info('PROBE '+error);}
});
