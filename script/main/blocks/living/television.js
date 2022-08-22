IDRegistry.genBlockID("televisionShelf");
Block.createBlock("televisionShelf", [
	{ name: "Television Shelf", texture: [["living_shelf", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.televisionShelf, 1/8, 1/8, 1/8, 7/8, 3/16, 7/8);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.televisionShelf, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(5/16, 9/16, 5/8, 7/8, 11/16, 15/16, "stone", 0);
model.addBox(0, 0, 0, 1/16, 1, 1, BlockID.televisionShelf, 0);
model.addBox(31/16, 0, 0, 2, 1, 1, BlockID.televisionShelf, 0);
model.addBox(1/16, 0, 0, 1, 1, 1/16, BlockID.televisionShelf, 0);
model.addBox(1, 0, 0, 31/16, 1, 1/16, BlockID.televisionShelf, 0);
model.addBox(1/16, 1/16, 1/16, 1, 1/8, 1, BlockID.televisionShelf, 0);
model.addBox(1, 1/16, 1/16, 31/16, 1/8, 1, BlockID.televisionShelf, 0);
model.addBox(1/16, 1/2, 1/16, 1, 9/16, 1, BlockID.televisionShelf, 0);
model.addBox(1, 1/2, 1/16, 31/16, 9/16, 1, BlockID.televisionShelf, 0);
model.addBox(1/16, 15/16, 1/16, 1, 1, 1, BlockID.televisionShelf, 0);
model.addBox(1, 15/16, 1/16, 31/16, 1, 1, BlockID.televisionShelf, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("televisionShelfMonitor");
Block.createBlock("televisionShelfMonitor", [
	{ name: "Television Shelf Monitor", texture: [["intensive_void", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.televisionShelfMonitor, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/16, 0, 11/16, 1, 3/4, 1, "television_rust", 0);
model.addBox(3/16, 1/16, 3/16, 1, 11/16, 11/16, "television_rust", 0);
model.addBox(5/16, 1/8, 1, 7/8, 5/8, 33/32, BlockID.televisionShelfMonitor, 0);
model.addBox(29/32, 5/8, 65/64, 31/32, 9/16, 1, BlockID.televisionShelfMonitor, 0);
model.addBox(29/32, 17/32, 65/64, 31/32, 15/32, 1, BlockID.televisionShelfMonitor, 0);
model.addBox(29/32, 7/16, 65/64, 31/32, 3/8, 1, BlockID.televisionShelfMonitor, 0);
renderer.addEntry(model);
