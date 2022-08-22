IDRegistry.genBlockID("houseEntranceDoorIndicator");
Block.createBlock("houseEntranceDoorIndicator", [
	{ name: "Entrance Door Indicator", texture: [["stone", 0]], inCreative: IN_CREATIVE },
	{ name: "Entrance Door Indicator", texture: [["stone", 0]], inCreative: IN_CREATIVE },
	{ name: "Entrance Door Indicator", texture: [["stone", 0]], inCreative: IN_CREATIVE },
	{ name: "Entrance Door Indicator", texture: [["stone", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.houseEntranceDoorIndicator, 0, 13/16, 1/16, 1/8, 17/16, 3/32);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoorIndicator, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/32, 27/32, 1/16, 3/32, 29/32, 7/64, "indicator_red", 0);
model.addBox(1/32, 31/32, 1/16, 3/32, 33/32, 7/64, "indicator_red", 0);
model.addBox(0.05625, 17/16, 1/16, 0.06875, 19/16, 0.075, "wiring_blue", 0);
model.addBox(0, 13/16, 1/16, 1/8, 17/16, 3/32, BlockID.houseEntranceDoorIndicator, 0);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoorIndicator, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/32, 27/32, 1/16, 3/32, 29/32, 7/64, "indicator_green", 0);
model.addBox(1/32, 31/32, 1/16, 3/32, 33/32, 7/64, "indicator_red", 0);
model.addBox(0.05625, 17/16, 1/16, 0.06875, 19/16, 0.075, "wiring_blue", 0);
model.addBox(0, 13/16, 1/16, 1/8, 17/16, 3/32, BlockID.houseEntranceDoorIndicator, 1);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoorIndicator, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/32, 27/32, 1/16, 3/32, 29/32, 7/64, "indicator_red", 0);
model.addBox(1/32, 31/32, 1/16, 3/32, 33/32, 7/64, "indicator_green", 0);
model.addBox(0.05625, 17/16, 1/16, 0.06875, 9/8, 0.075, "wiring_blue", 0);
model.addBox(0.05625, 1.14375, 1/16, 0.06875, 19/16, 0.075, "wiring_blue", 0);
model.addBox(0, 13/16, 1/16, 1/8, 17/16, 3/32, BlockID.houseEntranceDoorIndicator, 2);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoorIndicator, 3, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/32, 27/32, 1/16, 3/32, 29/32, 7/64, "indicator_green", 0);
model.addBox(1/32, 31/32, 1/16, 3/32, 33/32, 7/64, "indicator_green", 0);
model.addBox(0.05625, 17/16, 1/16, 0.06875, 9/8, 0.075, "wiring_blue", 0);
model.addBox(0.05625, 1.14375, 1/16, 0.06875, 19/16, 0.075, "wiring_blue", 0);
model.addBox(0, 13/16, 1/16, 1/8, 17/16, 3/32, BlockID.houseEntranceDoorIndicator, 3);
renderer.addEntry(model);
