IDRegistry.genBlockID("prisonVentilationWall");
Block.createBlock("prisonVentilationWall", [
	{ name: "Prison Ventilation Wall", texture: [["stained_clay", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.prisonVentilationWall, 0, 0, -1, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.prisonVentilationWall, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/32, 1/8, 3/8, 33/32, 3/16, 5/8, "television_rust", 0);
model.addBox(1/32, 3/16, 5/8, 33/32, 1/4, 3/4, "television_rust", 0);
model.addBox(1/32, 3/16, 1/4, 33/32, 1/4, 3/8, "television_rust", 0);
model.addBox(1/32, 1/4, 3/16, 33/32, 3/8, 1/4, "television_rust", 0);
model.addBox(3/32, 1/4, 3/4, 33/32, 3/8, 13/16, "television_rust", 0);
model.addBox(3/32, 3/8, 13/16, 33/32, 5/8, 7/8, "television_rust", 0);
model.addBox(3/32, 3/8, 1/8, 33/32, 5/8, 3/16, "television_rust", 0);
model.addBox(1/32, 13/16, 3/8, 33/32, 7/8, 5/8, "television_rust", 0);
model.addBox(1/32, 3/16, 5/8, 33/32, 1/4, 3/4, "television_rust", 0);
model.addBox(1/32, 3/4, 5/8, 33/32, 13/16, 3/4, "television_rust", 0);
model.addBox(1/32, 3/4, 1/4, 33/32, 13/16, 3/8, "television_rust", 0);
model.addBox(1/32, 5/8, 3/16, 33/32, 3/4, 1/4, "television_rust", 0);
model.addBox(1/32, 5/8, 3/4, 33/32, 3/4, 13/16, "television_rust", 0);
model.addBox(3/16, 1/8, 0, 1/4, 13/16, 15/16, "prison_ventilation", 0);
model.addBox(7/8, 7/16, 0, 15/16, 9/16, 15/16, "house_metal", 0);
model.addBox(1, 31/64, -1/16, 33/32, 33/64, 1/8, "intensive_void", 0);
model.addBox(1, 1/2, -1/4, 65/64, 33/64, -1/16, "wiring_blue", 0);
model.addBox(1, 13/32, -7/16, 17/16, 19/32, -1/4, "house_metal", 0);
model.addBox(0, 1/8, 0, 1, 3/16, 3/8, BlockID.prisonVentilationWall, 0);
model.addBox(0, 1/8, 5/8, 1, 3/16, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/16, 3/4, 1, 1/4, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/16, 0, 1, 1/4, 1/4, BlockID.prisonVentilationWall, 0);
model.addBox(0, 1/4, 0, 1, 3/8, 3/16, BlockID.prisonVentilationWall, 0);
model.addBox(0, 1/4, 13/16, 1, 3/8, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 5/8, 13/16, 1, 3/4, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 5/8, 0, 1, 3/4, 3/16, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/8, 0, 1, 5/8, 1/8, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/8, 7/8, 1, 5/8, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/4, 3/4, 1, 1, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 3/4, 0, 1, 1, 1/4, BlockID.prisonVentilationWall, 0);
model.addBox(0, 13/16, 1/4, 1, 1, 3/8, BlockID.prisonVentilationWall, 0);
model.addBox(0, 13/16, 5/8, 1, 1, 3/4, BlockID.prisonVentilationWall, 0);
model.addBox(0, 7/8, 3/8, 1, 1, 5/8, BlockID.prisonVentilationWall, 0);
model.addBox(0, 0, 0, 1, 1/8, 1, BlockID.prisonVentilationWall, 0);
model.addBox(0, 0, -1, 1, 1, 0, BlockID.prisonVentilationWall, 0);
renderer.addEntry(model);
