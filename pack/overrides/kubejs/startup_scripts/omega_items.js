// Registry owner in v0.1: this startup script. Keep omega:* IDs when Omega Core takes over.
// Registry changes require a full client AND server restart.
StartupEvents.registry('item', event => {
  event.create('omega:plant_fiber')
    .texture('minecraft:item/string')
    .color(0, 0xB9CE8C);
  event.create('omega:tree_resin')
    .texture('minecraft:item/honeycomb');
  event.create('omega:primitive_core')
    .texture('minecraft:item/amethyst_shard')
    .color(0, 0xD6A063)
    .maxStackSize(16);
  event.create('omega:pressed_core')
    .texture('minecraft:item/echo_shard')
    .color(0, 0x79BEB5)
    .maxStackSize(16);
  event.create('omega:mechanical_core')
    .texture('minecraft:item/heart_of_the_sea')
    .maxStackSize(16);
});
