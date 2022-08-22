IDRegistry.genBlockID("houseWindow");
Block.createBlock("houseWindow", [
	{ name: "Bedroom Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Bath Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Green Bedroom Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Blue Bedroom Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Grand Level Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Backyard Window", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.houseWindow, -1/16, 0, 0, 1, 1, 33/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(-1, 0, -65/64, 0, 1, -65/64, "house_window", 0);
model.addBox(-25/16, 0, -65/64, -1, 1, -65/64, "house_window", 1);
model.addBox(-2, 0, -1, -25/16, 1, -65/64, "stone", 2);
model.addBox(-2, 0, -63/64, -1, 1, -63/64, "stained_clay", 4);
model.addBox(-1, 0, -1, -1, 1, 0, "stained_clay", 4);
model.addBox(-1, -1, -1, -1, 0, 0, "stained_clay", 4);
model.addBox(-1, 1, -1, -1, 2, 0, "stained_clay", 4);
model.addBox(-1, -1/8, -17/16, 0, 0, -1, BlockID.houseWindow, 0);
model.addBox(-27/16, -1/8, -17/16, -1, 0, -1, BlockID.houseWindow, 0);
model.addBox(-1, 1, -17/16, 0, 9/8, -1, BlockID.houseWindow, 0);
model.addBox(-27/16, 1, -17/16, -1, 9/8, -1, BlockID.houseWindow, 0);
model.addBox(-27/16, 0, -17/16, -25/16, 1, -1, BlockID.houseWindow, 0);
model.addBox(0, 0, -17/16, 1/8, 9/8, -1, BlockID.houseWindow, 0);
model.addBox(0, -1/8, -17/16, 1/8, 0, -1, BlockID.houseWindow, 0);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 7/16, 1, 1, 23/16, "house_window", 0);
model.addBox(0, 0, 23/16, 1, 1, 2, "house_window", 1);
model.addBox(0, 0, 0, 1, 1, 7/16, "bath_wall", 4);
model.addBox(-1/16, -1/8, 1, 0, 0, 2, BlockID.houseWindow, 1);
model.addBox(-1/16, -1/8, 5/16, 0, 0, 1, BlockID.houseWindow, 1);
model.addBox(-1/16, 1, 1, 0, 9/8, 2, BlockID.houseWindow, 1);
model.addBox(-1/16, 1, 5/16, 0, 9/8, 1, BlockID.houseWindow, 1);
model.addBox(-1/16, 0, 5/16, 0, 1, 7/16, BlockID.houseWindow, 1);
model.addBox(-1/16, 0, 2, 0, 9/8, 17/8, BlockID.houseWindow, 1);
model.addBox(-1/16, -1/8, 2, 0, 0, 17/8, BlockID.houseWindow, 1);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(33/16, 0, 7/16, 3, 1, 23/16, "house_window", 0);
model.addBox(33/16, 0, 23/16, 3, 1, 2, "house_window", 0);
model.addBox(33/16, 0, 0, 3, 1, 7/16, "coal_ore", 0);
model.addBox(3, -1/8, 1, 49/16, 0, 2, BlockID.houseWindow, 2);
model.addBox(3, -1/8, 5/16, 49/16, 0, 1, BlockID.houseWindow, 2);
model.addBox(3, 1, 1, 49/16, 9/8, 2, BlockID.houseWindow, 2);
model.addBox(3, 1, 5/16, 49/16, 9/8, 1, BlockID.houseWindow, 2);
model.addBox(3, 0, 5/16, 49/16, 1, 7/16, BlockID.houseWindow, 2);
model.addBox(3, 0, 2, 49/16, 9/8, 17/8, BlockID.houseWindow, 2);
model.addBox(3, -1/8, 2, 49/16, 0, 17/8, BlockID.houseWindow, 2);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 3, renderer);
var model = BlockRenderer.createModel();
model.addBox(-7/16, 0, -2, 9/16, 1, -1, "house_window", 0);
model.addBox(-1, 0, -2, -7/16, 1, -1, "house_window", 1);
model.addBox(9/16, 0, -2, 1, 1, -1, "log_side", 1);
model.addBox(-7/16, -1/8, -33/16, 9/16, 0, -2, BlockID.houseWindow, 3);
model.addBox(-9/8, -1/8, -33/16, -7/16, 0, -2, BlockID.houseWindow, 3);
model.addBox(-7/16, 1, -33/16, 9/16, 9/8, -2, BlockID.houseWindow, 3);
model.addBox(-9/8, 1, -33/16, -7/16, 9/8, -2, BlockID.houseWindow, 3);
model.addBox(-9/8, 0, -33/16, -1, 1, -1, BlockID.houseWindow, 3);
model.addBox(9/16, 0, -33/16, 11/16, 9/8, -2, BlockID.houseWindow, 3);
model.addBox(9/16, -1/8, -33/16, 11/16, 0, -2, BlockID.houseWindow, 3);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 4, renderer);
var model = BlockRenderer.createModel();
model.addBox(33/16, 0, 7/16, 49/16, 1, 23/16, "house_window", 0);
model.addBox(33/16, 0, 23/16, 49/16, 1, 2, "house_window", 0);
model.addBox(33/16, 0, 0, 3, 1, 7/16, "backyard_wall", 0);
model.addBox(3, -1/8, 1, 49/16, 0, 2, BlockID.houseWindow, 4);
model.addBox(3, -1/8, 5/16, 49/16, 0, 1, BlockID.houseWindow, 4);
model.addBox(3, 1, 1, 49/16, 9/8, 2, BlockID.houseWindow, 4);
model.addBox(3, 1, 5/16, 49/16, 9/8, 1, BlockID.houseWindow, 4);
model.addBox(3, 0, 5/16, 49/16, 1, 7/16, BlockID.houseWindow, 4);
model.addBox(3, 0, 2, 49/16, 9/8, 17/8, BlockID.houseWindow, 4);
model.addBox(3, -1/8, 2, 49/16, 0, 17/8, BlockID.houseWindow, 4);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseWindow, 5, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, -2, 1, 1, -1, "house_window", 0);
model.addBox(-9/16, 0, -2, 0, 1, -1, "house_window", 1);
model.addBox(-1, 0, -2, -9/16, 1, -1, "backyard_wall", 0);
model.addBox(0, -1/8, -33/16, 1, 0, -2, BlockID.houseWindow, 5);
model.addBox(-11/16, -1/8, -33/16, 0, 0, -2, BlockID.houseWindow, 5);
model.addBox(0, 1, -33/16, 1, 9/8, -2, BlockID.houseWindow, 5);
model.addBox(-11/16, 1, -33/16, 0, 9/8, -2, BlockID.houseWindow, 5);
model.addBox(-11/16, 0, -33/16, -9/16, 1, -2, BlockID.houseWindow, 5);
model.addBox(1, 0, -33/16, 9/8, 9/8, -2, BlockID.houseWindow, 5);
model.addBox(1, -1/8, -33/16, 9/8, 0, -2, BlockID.houseWindow, 5);
renderer.addEntry(model);
