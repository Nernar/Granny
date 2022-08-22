IDRegistry.genBlockID("houseFence");
Block.createBlock("houseFence", [
	{ name: "Fence", texture: [["house_fence", 0]], inCreative: IN_CREATIVE },
	{ name: "Fence", texture: [["house_fence", 0]], inCreative: IN_CREATIVE },
	{ name: "Fence", texture: [["house_fence", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.houseFence, 0, 7/8, 0, 1, 1, 1/4, 0);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseFence, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 7/8, 0, 1, 1, 1/4, BlockID.houseFence, 0);
model.addBox(3/16, 0, 1/16, 5/16, 7/8, 3/16, BlockID.houseFence, 0);
renderer.addEntry(model);

Block.setShape(BlockID.houseFence, 3/4, 7/8, 0, 1, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseFence, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/4, 7/8, 0, 1, 1, 1, BlockID.houseFence, 1);
model.addBox(13/16, 0, 3/16, 15/16, 7/8, 5/16, BlockID.houseFence, 1);
renderer.addEntry(model);

Block.setShape(BlockID.houseFence, 3/4, 7/8, 0, 1, 1, 1, 2);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseFence, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/4, 7/8, 0, 1, 1, 1, BlockID.houseFence, 2);
model.addBox(13/16, 0, 3/16, 15/16, 7/8, 5/16, BlockID.houseFence, 2);
model.addBox(3/4, 7/8, 1, 1, 1, 5/4, BlockID.houseFence, 2);
renderer.addEntry(model);
