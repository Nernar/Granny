IDRegistry.genBlockID("berthPeak");
Block.createBlock("berthPeak", [
	{ name: "Berth Peak", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.berthPeak, -17/16, 11/16, 0, 15/8, 11/16, 3/8);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.berthPeak, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-3/32, 11/16, 0, 29/32, 3/4, 5/16, BlockID.berthPeak, 0);
model.addBox(-35/32, 11/16, 0, -3/32, 3/4, 5/16, BlockID.berthPeak, 0);
model.addBox(29/32, 11/16, 0, 61/32, 3/4, 5/16, BlockID.berthPeak, 0);
renderer.addEntry(model);
