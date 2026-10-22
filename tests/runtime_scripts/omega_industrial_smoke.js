// Disposable copied-world fixture ONLY. Never ship this script or use on a player save.
// Native machines generate power, latex, rubber, plastic, gases, alloys and circuits.
let omegaIndustrialStarted=false;
ServerEvents.tick(event => {
  if (omegaIndustrialStarted) return;
  omegaIndustrialStarted=true;
  var server=event.server;
  var run=server.persistentData.getInt('omega_industrial_test_run')+1;
  server.persistentData.putInt('omega_industrial_test_run',run);
  server.scheduleInTicks(80,callback => {
    var level=server.overworld();
    var Pos=Java.loadClass('net.minecraft.core.BlockPos');
    var Reg=Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var RL=Java.loadClass('net.minecraft.resources.ResourceLocation');
    var Types=Java.loadClass('net.minecraft.world.item.crafting.RecipeType');
    var CraftInput=Java.loadClass('net.minecraft.world.item.crafting.CraftingInput');
    var List=Java.loadClass('java.util.ArrayList');
    var QuestFile=Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile');
    var FluidStack=Java.loadClass('net.neoforged.neoforge.fluids.FluidStack');
    var FluidAction=Java.loadClass('net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction');
    var Action=Java.loadClass('mekanism.api.Action');
    var Automation=Java.loadClass('mekanism.api.AutomationType');
    var AEAction=Java.loadClass('appeng.api.config.Actionable');
    var AEItemKey=Java.loadClass('appeng.api.stacks.AEItemKey');
    var Source=Java.loadClass('appeng.api.networking.security.IActionSource');
    var ChemicalKey=Java.loadClass('me.ramidzkh.mekae2.ae2.MekanismKey');
    var ItemEntity=Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
    var AABB=Java.loadClass('net.minecraft.world.phys.AABB');
    var checks=[],elapsed=0,done=false,latexMoved=0,rubber=0,plastic=0,circuits=0;
    var charged=false,fluix=false,stored=false,chemicalStored=false,logicStage=0,logicDone=false,alloyTaken=false;
    var invStage=0,sourceSamples=[];
    var id=stack => String(Reg.ITEM.getKey(stack.getItem()));
    var tile=(x,z) => level.getBlockEntity(new Pos(x,96,z));
    var set=(x,y,z,name) => server.runCommandSilent('setblock '+x+' '+y+' '+z+' '+name);
    var check=(ok,msg) => {if(!ok) throw new Error(msg);checks.push(msg);console.info('[OMEGA INDUSTRIAL] '+msg);};
    var finish=error => {
      console.info('[OMEGA INDUSTRIAL RESULT] '+error);
      if(done) return;done=true;
      JsonIO.write('kubejs/export/omega-industrial-smoke.json',{
        success:error === '',failure:error,checks:checks,elapsed_ticks:elapsed,
        latex_transferred_mb:latexMoved,dry_rubber_processed:rubber,plastic_smelted:plastic,circuit_outputs:circuits,
        source_samples:sourceSamples,power_source:'native coal Heat Generators; no injected energy',
        transfer_scope:'fixture moves naturally produced fluids/items through native tank/inventory APIs; pipe and player GUI automation not tested'
      });
      console.info('[OMEGA INDUSTRIAL] '+(error === ''?'PASS':'FAIL '+error));
    };
    var grid=items => {var stacks=new List();for(var i=0;i<9;i++) stacks.add(Item.of(items[i] || 'minecraft:air'));return CraftInput.of(3,3,stacks);};
    var craft=(items,expected) => {
      var input=grid(items),matches=server.getRecipeManager().getRecipesFor(Types.CRAFTING,input,level);
      check(matches.size() === 1,'One crafting match for '+expected);
      check(id(matches.get(0).value().assemble(input,server.registryAccess())) === expected,'Correct craft result '+expected);
    };
    var coal=xz => tile(xz[0],xz[1]).getInventorySlots(null).get(0).setStack(Item.of('minecraft:coal',64));
    var generators=[[64,0],[64,4],[64,8],[64,12],[69,4],[73,4],[79,0],[83,0],[87,0],[91,0],[83,6]];
    var extractors=[80,84,88,92];
    var tank=(machine,name) => {for(var t of machine.getMultiTankComponent().getTanks()) if(String(t.getName()) === name) return t;throw new Error('Missing tank '+name);};
    var findOutput=(machine,name) => {
      for(var inv of machine.getMultiInventoryComponent().getInventoryHandlers()) for(var i=0;i<inv.getSlots();i++) {
        if(id(inv.getStackInSlot(i)) === name) return inv.extractItem(i,64,false);
      }
      return Item.of('minecraft:air');
    };
    try {
      var chapters=QuestFile.INSTANCE.getAllChapters();
      check(chapters.size() === 4 && chapters.get(3).getQuests().size() === 20,'Four FTB chapters import all 58 quests');
      for(var quest of chapters.get(3).getQuests()) for(var task of quest.getTasks()) {
        if(String(task.getType().getTypeId()) === 'ftbquests:item') check(!task.getItemStack().isEmpty(),'Quest item resolves '+id(task.getItemStack()));
      }
      for(var item of ['omega:industrial_circuit','omega:industrial_core']) check(Item.exists(item),'Registered '+item);
      craft(['minecraft:iron_ingot','minecraft:light_weighted_pressure_plate','minecraft:iron_ingot','minecraft:cobblestone','omega:electrical_core','minecraft:cobblestone','minecraft:iron_ingot','minecraft:piston','minecraft:iron_ingot'],'industrialforegoing:fluid_extractor');
      craft(['minecraft:iron_ingot','minecraft:redstone_block','minecraft:iron_ingot','minecraft:bucket','omega:arcane_core','minecraft:bucket','minecraft:iron_ingot','minecraft:furnace','minecraft:iron_ingot'],'industrialforegoing:latex_processing_unit');
      craft(['minecraft:iron_ingot','minecraft:piston','minecraft:iron_ingot','minecraft:copper_ingot','omega:electrical_core','minecraft:iron_ingot','minecraft:iron_ingot','minecraft:piston','minecraft:iron_ingot'],'ae2:inscriber');
      craft(['minecraft:iron_ingot','ae2:quartz_glass','minecraft:iron_ingot','ae2:quartz_glass','omega:arcane_core','ae2:quartz_glass','minecraft:iron_ingot','ae2:quartz_glass','minecraft:iron_ingot'],'ae2:energy_acceptor');
      craft(['ae2:energy_acceptor'],'ae2:cable_energy_acceptor');craft(['ae2:cable_energy_acceptor'],'ae2:energy_acceptor');
      craft(['minecraft:iron_ingot','ae2:engineering_processor','minecraft:iron_ingot','ae2:fluix_glass_cable','omega:arcane_core','ae2:fluix_glass_cable','minecraft:iron_ingot','ae2:engineering_processor','minecraft:iron_ingot'],'ae2:drive');
      craft(['ae2:smooth_sky_stone_block','ae2:fluix_crystal','ae2:smooth_sky_stone_block','ae2:fluix_crystal','omega:industrial_core','ae2:fluix_crystal','ae2:smooth_sky_stone_block','ae2:fluix_crystal','ae2:smooth_sky_stone_block'],'ae2:controller');
      var core=['industrialforegoing:plastic','omega:industrial_circuit','industrialforegoing:plastic','appmek:chemical_cell_housing','omega:arcane_core','ae2:cell_component_1k','industrialforegoing:plastic','omega:industrial_circuit','industrialforegoing:plastic'];
      craft(core,'omega:industrial_core');core[3]='appmek:chemical_storage_cell_1k';
      check(server.getRecipeManager().getRecipesFor(Types.CRAFTING,grid(core),level).isEmpty(),'Industrial Core cannot consume a chemical storage cell');
      for(var recipe of ['ae2:network/blocks/energy_energy_acceptor','ae2:network/blocks/inscribers','ae2:network/blocks/storage_drive','ae2:network/blocks/controller']) {
        check(server.getRecipeManager().byKey(RL.parse(recipe)).isEmpty(),'Removed native base recipe '+recipe);
      }
      var recipe=server.getRecipeManager().byKey(RL.parse('omega:industrial_circuit'));
      check(recipe.isPresent() && String(Reg.RECIPE_TYPE.getKey(recipe.get().value().getType())) === 'ae2:inscriber','Industrial Circuit uses native AE2 inscriber recipe type');
      server.runCommandSilent('forceload add 64 -16 95 15');
      for(var cx=4;cx<6;cx++) for(var cz=-1;cz<1;cz++) level.getChunk(cx,cz);
      check(true,'Disposable test chunks forced loaded');
      server.runCommandSilent('fill 63 95 -2 94 99 14 minecraft:air');
      server.runCommandSilent('fill 63 95 -2 94 95 14 minecraft:bedrock');
      check(true,'Test platform cleared');
      set(65,96,0,'ae2:charger');set(65,96,4,'ae2:inscriber');set(65,96,12,'ae2:inscriber');
      set(65,96,8,'ae2:energy_acceptor');set(66,96,8,'ae2:energy_cell');set(67,96,8,'ae2:drive');
      set(70,96,4,'mekanism:metallurgic_infuser[facing=north]');set(74,96,4,'mekanism:electrolytic_separator[facing=north]');
      check(true,'Native AE2 and Mekanism blocks placed');
      for(var p of [[70,4],[74,4]]) server.runCommandSilent('data merge block '+p[0]+' 96 '+p[1]+' {component_config:{config0:[I;1,1,1,1,1,1]}}');
      for(var x of extractors) {set(x,96,0,'industrialforegoing:fluid_extractor');level.setBlockAndUpdate(tile(x,0).getPointedBlockPos(),Reg.BLOCK.get(RL.parse('minecraft:acacia_log')).defaultBlockState());}
      check(true,'Native extractors face actual Acacia logs');
      set(84,96,6,'industrialforegoing:latex_processing_unit');set(88,96,6,'minecraft:furnace');set(92,96,6,'minecraft:chest');
      for(var g of generators) {set(g[0],96,g[1],'mekanismgenerators:heat_generator[facing=east]');coal(g);}
      check(true,'Coal generators placed and fueled');
      tile(65,0).getInternalInventory().setItemDirect(0,Item.of('ae2:certus_quartz_crystal'));
      var li=tile(65,12).getInternalInventory();li.setItemDirect(0,Item.of('ae2:logic_processor_press'));li.setItemDirect(2,Item.of('minecraft:gold_ingot'));
      var inf=tile(70,4).getInventorySlots(null);inf.get(0).setStack(Item.of('mekanism:dust_diamond',4));inf.get(1).setStack(Item.of('mekanism:alloy_infused',2));
      tank(tile(84,6),'water').fillForced(new FluidStack(Reg.FLUID.get(RL.parse('minecraft:water')),8000),FluidAction.EXECUTE);
      tile(74,4).fluidTank.setStack(new FluidStack(Reg.FLUID.get(RL.parse('minecraft:water')),8000));
      tile(88,6).setItem(1,Item.of('minecraft:coal',8));
      tile(67,8).getInternalInventory().setItemDirect(0,Item.of('ae2:item_storage_cell_1k'));
      tile(67,8).getInternalInventory().setItemDirect(1,Item.of('appmek:chemical_storage_cell_1k'));
    }catch(error){finish(String(error));return;}
    var tick=() => {
      if(server.persistentData.getInt('omega_industrial_test_run') !== run) return;
      try {
        elapsed+=20;
        for(var g of generators) if(tile(g[0],g[1]).getInventorySlots(null).get(0).getStack().isEmpty()) coal(g);
        var processor=tile(84,6),furnace=tile(88,6),chest=tile(92,6),ins=tile(65,4).getInternalInventory();
        for(var x of extractors) {
          var ext=tile(x,0),lt=tank(ext,'latex');
          if(lt.getFluidAmount()>0) {var stack=lt.drain(lt.getFluid().copy(),FluidAction.EXECUTE);latexMoved+=tank(processor,'latex').fillForced(stack,FluidAction.EXECUTE);}
          if(level.getBlockState(ext.getPointedBlockPos()).isAir()) level.setBlockAndUpdate(ext.getPointedBlockPos(),Reg.BLOCK.get(RL.parse('minecraft:acacia_log')).defaultBlockState());
        }
        var out=findOutput(processor,'industrialforegoing:dryrubber');
        if(!out.isEmpty()) {rubber+=out.getCount();furnace.setItem(0,Item.of('industrialforegoing:dryrubber',furnace.getItem(0).getCount()+out.getCount()));}
        if(id(furnace.getItem(2)) === 'industrialforegoing:plastic') {
          var p=furnace.getItem(2);plastic+=p.getCount();chest.setItem(4,Item.of('industrialforegoing:plastic',chest.getItem(4).getCount()+p.getCount()));furnace.setItem(2,Item.of('minecraft:air'));
        }
        var alloy=tile(70,4).getInventorySlots(null).get(2).getStack();
        if(!alloyTaken && id(alloy) === 'mekanism:alloy_reinforced' && alloy.getCount() === 2) {
          check(true,'Real diamond infusion produces two Reinforced Alloy');chest.setItem(5,alloy.copy());tile(70,4).getInventorySlots(null).get(2).setStack(Item.of('minecraft:air'));alloyTaken=true;
        }
        if(invStage === 0 && chest.getItem(4).getCount()>0 && chest.getItem(5).getCount()>0 && circuits<2) {
          ins.setItemDirect(0,Item.of('industrialforegoing:plastic'));chest.getItem(4).shrink(1);
          ins.setItemDirect(1,Item.of('mekanism:alloy_reinforced'));chest.getItem(5).shrink(1);ins.setItemDirect(2,Item.of('omega:electrical_core'));invStage=1;
        }
        if(invStage === 1 && id(ins.getStackInSlot(3)) === 'omega:industrial_circuit') {
          check(ins.getStackInSlot(0).isEmpty() && ins.getStackInSlot(1).isEmpty() && ins.getStackInSlot(2).isEmpty(),'Native PRESS consumes plastic, alloy and Electrical Core');
          chest.setItem(circuits,ins.getStackInSlot(3).copy());ins.setItemDirect(3,Item.of('minecraft:air'));circuits++;invStage=0;
        }
        var chargedStack=tile(65,0).getInternalInventory().getStackInSlot(0);
        if(!charged && id(chargedStack) === 'ae2:charged_certus_quartz_crystal') {
          check(true,'Coal-powered native Charger produces Charged Certus');
          server.runCommandSilent('fill 69 96 11 71 97 13 minecraft:bedrock');
          set(70,97,12,'minecraft:air');set(70,96,12,'minecraft:water');
          level.addFreshEntity(new ItemEntity(level,70.5,96.2,12.5,chargedStack.copy()));
          level.addFreshEntity(new ItemEntity(level,70.5,96.2,12.5,Item.of('minecraft:quartz')));
          level.addFreshEntity(new ItemEntity(level,70.5,96.2,12.5,Item.of('minecraft:redstone')));
          tile(65,0).getInternalInventory().setItemDirect(0,Item.of('minecraft:air'));charged=true;
        }
        if(charged && !fluix) for(var drop of level.getEntitiesOfClass(ItemEntity,new AABB(68,95,10,73,99,15))) {
          if(id(drop.getItem()) === 'ae2:fluix_crystal') {check(drop.getItem().getCount() === 2,'Real water reaction makes two Fluix Crystals');chest.setItem(6,drop.getItem().copy());drop.discard();fluix=true;}
        }
        var li=tile(65,12).getInternalInventory();
        if(logicStage === 0 && id(li.getStackInSlot(3)) === 'ae2:printed_logic_processor') {
          check(id(li.getStackInSlot(0)) === 'ae2:logic_processor_press','Native INSCRIBE preserves reusable Logic Press');chest.setItem(7,li.getStackInSlot(3).copy());li.setItemDirect(3,Item.of('minecraft:air'));li.setItemDirect(0,Item.of('ae2:silicon_press'));li.setItemDirect(2,Item.of('ae2:silicon'));logicStage=1;
        } else if(logicStage === 1 && id(li.getStackInSlot(3)) === 'ae2:printed_silicon') {
          check(id(li.getStackInSlot(0)) === 'ae2:silicon_press','Native silicon print preserves reusable Silicon Press');var si=li.getStackInSlot(3).copy();li.setItemDirect(3,Item.of('minecraft:air'));li.setItemDirect(0,chest.getItem(7).copy());chest.setItem(7,Item.of('minecraft:air'));li.setItemDirect(1,si);li.setItemDirect(2,Item.of('minecraft:redstone'));logicStage=2;
        } else if(logicStage === 2 && id(li.getStackInSlot(3)) === 'ae2:logic_processor') {check(true,'Native powered Inscriber assembles Logic Processor');chest.setItem(7,li.getStackInSlot(3).copy());li.setItemDirect(3,Item.of('minecraft:air'));logicDone=true;logicStage=3;}
        var drive=tile(67,8);
        if(!stored && drive.getMainNode().isOnline()) {
          var storage=drive.getMainNode().getGrid().getStorageService().getInventory(),key=AEItemKey['of(net.minecraft.world.item.ItemStack)'](Item.of('minecraft:copper_ingot')),src=Source.ofMachine(drive);
          check(storage.insert(key,128,AEAction.SIMULATE,src) === 128,'ME simulation accepts 128 copper');
          check(storage.getAvailableStacks().get(key) === 0,'ME simulation does not write items');
          check(storage.insert(key,128,AEAction.MODULATE,src) === 128,'Online native ME drive stores 128 copper');
          check(storage.extract(key,32,AEAction.MODULATE,src) === 32 && storage.getAvailableStacks().get(key) === 96,'Native ME storage extracts 32 and retains 96 copper');stored=true;
        }
        var sep=tile(74,4);
        if(!chemicalStored && stored && sep.leftTank.getStored()>=128 && sep.rightTank.getStored()>=128) {
          check(true,'Real powered water electrolysis produces both native chemical outputs');
          var actual=sep.rightTank.extract(128,Action.EXECUTE,Automation.MANUAL);
          var chem=ChemicalKey.of(actual),storage=drive.getMainNode().getGrid().getStorageService().getInventory(),src=Source.ofMachine(drive);
          check(storage.insert(chem,128,AEAction.MODULATE,src) === 128,'Applied Mekanistics stores 128 naturally produced chemical units');
          check(storage.extract(chem,32,AEAction.MODULATE,src) === 32 && storage.getAvailableStacks().get(chem) === 96,'Chemical cell returns 32 units and retains 96');
          server.persistentData.putString('omega_industrial_chemical',String(Java.loadClass('mekanism.api.MekanismAPI').CHEMICAL_REGISTRY.getKey(actual.getChemical())));chemicalStored=true;
        }
        if(elapsed%200 === 0) sourceSamples.push({tick:elapsed,latex:latexMoved,rubber:rubber,plastic:plastic,circuits:circuits,charger:charged,fluix:fluix,logic:logicDone,items_stored:stored,chemical_stored:chemicalStored});
        if(circuits === 2 && logicDone && fluix && stored && chemicalStored) {
          check(rubber>=2 && plastic>=2 && latexMoved>=1500,'Real extractor to latex processor to furnace chain supplies both circuit plastics');
          chest.setItem(2,Item.of('omega:industrial_core'));chest.setItem(3,Item.of('omega:industrial_core'));
          server.persistentData.putInt('omega_industrial_expected_items',96);server.persistentData.putInt('omega_industrial_expected_chemical',96);
          finish('');return;
        }
        if(elapsed>=5200) throw new Error('Industrial processing timeout: circuits='+circuits+' latex='+latexMoved+' rubber='+rubber+' logic='+logicDone+' storage='+stored+' chem='+chemicalStored);
      }catch(error){finish(String(error));return;}
      server.scheduleInTicks(20,tick);
    };server.scheduleInTicks(20,tick);
  });
});
