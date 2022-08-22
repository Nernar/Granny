IDRegistry.genBlockID("bathToilet");
Block.createBlock("bathToilet", [
	{ name: "Bath Toilet", texture: [["quartz_block_top", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bathToilet, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(7/16, 23/16, 1/16, 9/16, 47/32, 3/16, "stone", 0);
model.addBox(3/16, 1/16, 3/16, 13/16, 1/8, 13/16, BlockID.bathToilet, 0);
model.addBox(5/16, 1/8, 5/16, 11/16, 1/2, 11/16, BlockID.bathToilet, 0);
model.addBox(5/16, 1/2, 5/16, 11/16, 9/16, 13/16, BlockID.bathToilet, 0);
model.addBox(1/4, 9/16, 13/16, 3/4, 13/16, 15/16, BlockID.bathToilet, 0);
model.addBox(3/16, 9/16, 1/4, 5/16, 13/16, 7/8, BlockID.bathToilet, 0);
model.addBox(11/16, 9/16, 1/4, 13/16, 13/16, 7/8, BlockID.bathToilet, 0);
model.addBox(1/4, 9/16, 1/4, 3/4, 13/16, 3/8, BlockID.bathToilet, 0);
model.addBox(3/16, 9/16, 0, 13/16, 23/16, 1/4, BlockID.bathToilet, 0);
model.addBox(1/8, 0, 1/8, 7/8, 1/16, 7/8, BlockID.bathToilet, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("bathToiletBlood");
Block.createBlock("bathToiletBlood", [
	{ name: "Bath Toilet Blood", texture: [["house_ketchup", 0]], inCreative: IN_CREATIVE }
], { opaque: false, renderlayer: 1 });

Block.setShape(BlockID.bathToiletBlood, 1/4, -23/16, 1/4, 3/4, -11/8, 7/8);
