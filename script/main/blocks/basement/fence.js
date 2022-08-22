IDRegistry.genBlockID("fenceControlField");
Block.createBlock("fenceControlField", [
	{ name: "Fence Control Field", texture: [["planks", 1]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.fenceControlField, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 1/4, 1, 1, 1, BlockID.fenceControlField, 0);
model.addBox(0, 0, 0, 1, 1/4, 1/4, BlockID.fenceControlField, 0);
model.addBox(0, 3/4, 0, 1, 1, 1/4, BlockID.fenceControlField, 0);
model.addBox(0, 1/4, 0, 1/4, 3/4, 1/4, BlockID.fenceControlField, 0);
model.addBox(3/4, 1/4, 0, 1, 3/4, 1/4, BlockID.fenceControlField, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("fenceControlCover");
Block.createBlock("fenceControlCover", [
	{ name: "Fence Control Cover", texture: [["hopper_outside", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.fenceControlCover, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/16, 3/16, 15/16, 3/4, 3/4, 1, BlockID.fenceControlCover, 0);
model.addBox(1/4, 1/4, 29/32, 5/16, 5/16, 15/16, BlockID.fenceControlCover, 0);
model.addBox(5/8, 1/4, 29/32, 11/16, 5/16, 15/16, BlockID.fenceControlCover, 0);
model.addBox(1/4, 5/8, 29/32, 5/16, 11/16, 15/16, BlockID.fenceControlCover, 0);
model.addBox(5/8, 5/8, 29/32, 11/16, 11/16, 15/16, BlockID.fenceControlCover, 0);
renderer.addEntry(model);
