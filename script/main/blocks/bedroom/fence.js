IDRegistry.genBlockID("bedroomFence");
Block.createBlock("bedroomFence", [
	{ name: "Bedroom Fence", texture: [["stone", 2]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomFence, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-4, 0, -2, -3.99375, 1, -1, BlockID.bedroomFence, 0);
model.addBox(-4, 1, -2, -3.99375, 2, -1, BlockID.bedroomFence, 0);
model.addBox(-4, 2, -2, -3.99375, 3, -1, BlockID.bedroomFence, 0);
model.addBox(-4, 0, -3, -3.99375, 1, -2, BlockID.bedroomFence, 0);
model.addBox(-4, 0, -4, -3.99375, 1, -3, BlockID.bedroomFence, 0);
model.addBox(-4, 0, -5, -3.99375, 1, -4, BlockID.bedroomFence, 0);
model.addBox(-4, 0, -6, -3.99375, 1, -5, BlockID.bedroomFence, 0);
model.addBox(-4, 1, -6, -3.99375, 2, -5, BlockID.bedroomFence, 0);
model.addBox(-4, 2, -6, -3.99375, 3, -5, BlockID.bedroomFence, 0);
model.addBox(-4, 2, -5, -3.99375, 3, -4, BlockID.bedroomFence, 0);
model.addBox(-4, 2, -4, -3.99375, 3, -3, BlockID.bedroomFence, 0);
model.addBox(-4, 2, -3, -3.99375, 3, -2, BlockID.bedroomFence, 0);
model.addBox(-4, 1, -3, -3.99375, 2, -2, BlockID.bedroomFence, 0);
model.addBox(-4, 1, -4, -3.99375, 2, -3, BlockID.bedroomFence, 0);
model.addBox(-4, 1, -5, -3.99375, 2, -4, BlockID.bedroomFence, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("bedroomFenceAssist");
Block.createBlock("bedroomFenceAssist", [
	{ name: "Bedroom Fence", texture: [["stained_clay", 4], ["stained_clay", 4], ["stone", 2], ["stained_clay", 4]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.bedroomFenceAssist, 0, 0, 0, 1, 1, 0.01);
