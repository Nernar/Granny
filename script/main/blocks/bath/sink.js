IDRegistry.genBlockID("bathSink");
Block.createBlock("bathSink", [
	{ name: "Bath Sink", texture: [["quartz_block_top", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bathSink, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/16, 0, 7/16, 5/16, 11/16, 9/16, "hopper_outside", 0);
model.addBox(0, 17/16, 7/16, 1/4, 9/8, 9/16, "stone", 0);
model.addBox(0, 9/8, 7/16, 1/8, 19/16, 9/16, "stone", 0);
model.addBox(0, 11/16, 1/8, 1/2, 3/4, 7/8, BlockID.bathSink, 0);
model.addBox(0, 3/4, 1/16, 1/16, 15/16, 15/16, BlockID.bathSink, 0);
model.addBox(0, 3/4, 1/16, 1/2, 15/16, 1/8, BlockID.bathSink, 0);
model.addBox(0, 3/4, 7/8, 1/2, 15/16, 15/16, BlockID.bathSink, 0);
model.addBox(1/2, 3/4, 1/8, 9/16, 15/16, 7/8, BlockID.bathSink, 0);
renderer.addEntry(model);
