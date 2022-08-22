IDRegistry.genBlockID("hallUndercandle");
Block.createBlock("hallUndercandle", [
	{ name: "Hall Undercandle", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.hallUndercandle, 1/4, 9/16, 0, 3/4, 5/8, 1/2);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.hallUndercandle, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/4, 9/16, 0, 3/4, 5/8, 1/2, BlockID.hallUndercandle, 0);
model.addBox(15/32, 3/8, 0, 17/32, 9/16, 3/8, BlockID.hallUndercandle, 0);
renderer.addEntry(model);
