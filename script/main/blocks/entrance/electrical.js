IDRegistry.genBlockID("electricalDoorPower");
Block.createBlock("electricalDoorPower", [
	{ name: "Electrical Door Power", texture: [["electrical_shield", 0]], inCreative: IN_CREATIVE },
	{ name: "Electrical Door Power", texture: [["electrical_shield", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.electricalDoorPower, 3/16, 5/16, 15/16, 13/16, 1, 11/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.electricalDoorPower, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/8, 9/16, 7/8, 5/8, 13/16, 15/16, "hopper_outside", 0);
model.addBox(13/32, 19/32, 13/16, 15/32, 21/32, 7/8, "quartz_block_top", 0);
model.addBox(17/32, 19/32, 13/16, 19/32, 21/32, 7/8, "quartz_block_top", 0);
model.addBox(13/32, 23/32, 13/16, 15/32, 25/32, 7/8, "quartz_block_top", 0);
model.addBox(17/32, 23/32, 13/16, 19/32, 25/32, 7/8, "quartz_block_top", 0);
model.addBox(15/32, 31/32, 15/16, 17/32, 15/16, 7/8, "intensive_void", 0);
model.addBox(15/32, 11/8, 15/16, 17/32, 1, 7/8, "intensive_void", 0);
model.addBox(15/32, 15/8, 15/16, 17/32, 11/8, 7/8, "intensive_void", 0);
model.addBox(15/32, 19/8, 15/16, 17/32, 15/8, 7/8, "intensive_void", 0);
model.addBox(15/32, 23/8, 15/16, 17/32, 19/8, 7/8, "intensive_void", 0);
model.addBox(1/2, 1, 0.89375, 0.475, 13/16, 0.91875, "intensive_void", 0);
model.addBox(0.5125, 1, 0.9125, 0.525, 13/16, 0.9, "wiring_blue", 0);
model.addBox(3/16, 3/8, 15/16, 13/16, 1, 1, BlockID.electricalDoorPower, 0);
model.addBox(3/16, 3/8, 3/4, 7/32, 1, 15/16, BlockID.electricalDoorPower, 0);
model.addBox(25/32, 3/8, 3/4, 13/16, 1, 15/16, BlockID.electricalDoorPower, 0);
model.addBox(25/32, 13/32, 3/4, 7/32, 3/8, 15/16, BlockID.electricalDoorPower, 0);
model.addBox(25/32, 1, 3/4, 7/32, 31/32, 15/16, BlockID.electricalDoorPower, 0);
renderer.addEntry(model);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.electricalDoorPower, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/8, 9/16, 7/8, 5/8, 13/16, 15/16, "hopper_outside", 0);
model.addBox(13/32, 19/32, 13/16, 15/32, 21/32, 7/8, "quartz_block_top", 0);
model.addBox(17/32, 19/32, 13/16, 19/32, 21/32, 7/8, "quartz_block_top", 0);
model.addBox(13/32, 23/32, 13/16, 15/32, 25/32, 7/8, "quartz_block_top", 0);
model.addBox(17/32, 23/32, 13/16, 19/32, 25/32, 7/8, "quartz_block_top", 0);
model.addBox(15/32, 31/32, 15/16, 17/32, 15/16, 7/8, "intensive_void", 0);
model.addBox(15/32, 11/8, 15/16, 17/32, 1, 7/8, "intensive_void", 0);
model.addBox(15/32, 15/8, 15/16, 17/32, 11/8, 7/8, "intensive_void", 0);
model.addBox(15/32, 19/8, 15/16, 17/32, 15/8, 7/8, "intensive_void", 0);
model.addBox(15/32, 23/8, 15/16, 17/32, 19/8, 7/8, "intensive_void", 0);
model.addBox(1/2, 1, 0.89375, 0.475, 13/16, 0.91875, "intensive_void", 0);
model.addBox(0.5125, 7/8, 0.9125, 0.525, 13/16, 0.9, "wiring_blue", 0);
model.addBox(0.5125, 1, 0.9125, 0.525, 29/32, 0.9, "wiring_blue", 0);
model.addBox(3/16, 3/8, 15/16, 13/16, 1, 1, BlockID.electricalDoorPower, 1);
model.addBox(3/16, 3/8, 3/4, 7/32, 1, 15/16, BlockID.electricalDoorPower, 1);
model.addBox(25/32, 3/8, 3/4, 13/16, 1, 15/16, BlockID.electricalDoorPower, 1);
model.addBox(25/32, 13/32, 3/4, 7/32, 3/8, 15/16, BlockID.electricalDoorPower, 1);
model.addBox(25/32, 1, 3/4, 7/32, 31/32, 15/16, BlockID.electricalDoorPower, 1);
renderer.addEntry(model);
