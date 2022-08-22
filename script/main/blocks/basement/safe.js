IDRegistry.genBlockID("basementSafe");
Block.createBlock("basementSafe", [
	{ name: "Safe", texture: [["house_metal", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementSafe, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1, 1/8, 1, BlockID.basementSafe, 0);
model.addBox(0, 1/8, 0, 7/8, 1, 1/8, BlockID.basementSafe, 0);
model.addBox(0, 1/8, 7/8, 7/8, 1, 1, BlockID.basementSafe, 0);
model.addBox(7/8, 1/8, 0, 1, 1, 1, BlockID.basementSafe, 0);
model.addBox(0, 1, 0, 1, 9/8, 1, BlockID.basementSafe, 0);
renderer.addEntry(model);
