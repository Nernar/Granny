IDRegistry.genBlockID("bedroomTable");
Block.createBlock("bedroomTable", [
	{ name: "Bedroom Table", texture: [["house_wood", 1]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomTable, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/16, 0, 29/16, 3/16, 7/8, 31/16, BlockID.bedroomTable, 0);
model.addBox(13/16, 0, 29/16, 15/16, 7/8, 31/16, BlockID.bedroomTable, 0);
model.addBox(13/16, 0, 1/16, 15/16, 7/8, 3/16, BlockID.bedroomTable, 0);
model.addBox(1/16, 0, 1/16, 3/16, 7/8, 3/16, BlockID.bedroomTable, 0);
model.addBox(0, 7/8, 0, 1, 1, 1, BlockID.bedroomTable, 0);
model.addBox(0, 7/8, 1, 1, 1, 2, BlockID.bedroomTable, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("bedroomSmallTable");
Block.createBlock("bedroomSmallTable", [
	{ name: "Bedroom Small Table", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.bedroomSmallTable, 0, 0, 0, 15/16, 15/16, 15/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomSmallTable, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(5/16, 13/16, 0, 5/8, 15/16, 15/16, BlockID.bedroomSmallTable, 0);
model.addBox(5/8, 13/16, 1/16, 3/4, 15/16, 7/8, BlockID.bedroomSmallTable, 0);
model.addBox(3/4, 13/16, 1/8, 13/16, 15/16, 13/16, BlockID.bedroomSmallTable, 0);
model.addBox(13/16, 13/16, 3/16, 7/8, 15/16, 3/4, BlockID.bedroomSmallTable, 0);
model.addBox(7/8, 13/16, 5/16, 15/16, 15/16, 5/8, BlockID.bedroomSmallTable, 0);
model.addBox(3/16, 13/16, 1/16, 5/16, 15/16, 7/8, BlockID.bedroomSmallTable, 0);
model.addBox(1/8, 13/16, 1/8, 3/16, 15/16, 13/16, BlockID.bedroomSmallTable, 0);
model.addBox(1/16, 13/16, 3/16, 1/8, 15/16, 3/4, BlockID.bedroomSmallTable, 0);
model.addBox(0, 13/16, 5/16, 1/16, 15/16, 5/8, BlockID.bedroomSmallTable, 0);
model.addBox(3/8, 1/8, 3/8, 9/16, 7/8, 9/16, BlockID.bedroomSmallTable, 0);
model.addBox(3/8, 1/16, 5/16, 7/16, 1/8, 7/16, BlockID.bedroomSmallTable, 0);
model.addBox(5/16, 0, 1/4, 3/8, 1/16, 5/16, BlockID.bedroomSmallTable, 0);
model.addBox(1/4, 0, 5/16, 3/8, 1/16, 3/8, BlockID.bedroomSmallTable, 0);
model.addBox(5/16, 1/16, 3/8, 3/8, 1/8, 7/16, BlockID.bedroomSmallTable, 0);
model.addBox(9/16, 1/16, 3/8, 5/8, 1/8, 7/16, BlockID.bedroomSmallTable, 0);
model.addBox(1/2, 1/16, 5/16, 9/16, 1/8, 7/16, BlockID.bedroomSmallTable, 0);
model.addBox(9/16, 0, 1/4, 5/8, 1/16, 3/8, BlockID.bedroomSmallTable, 0);
model.addBox(5/8, 0, 5/16, 11/16, 1/16, 3/8, BlockID.bedroomSmallTable, 0);
model.addBox(13/32, 1/16, 9/16, 17/32, 1/8, 5/8, BlockID.bedroomSmallTable, 0);
model.addBox(13/32, 0, 5/8, 17/32, 1/16, 11/16, BlockID.bedroomSmallTable, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("bedroomLargeTable");
Block.createBlock("bedroomLargeTable", [
	{ name: "Bedroom Large Table", texture: [["guillotine_wood", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.bedroomLargeTable, 0, 0, 0, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomLargeTable, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-1/8, 7/8, 0, 7/8, 1, 1, BlockID.bedroomLargeTable, 0);
model.addBox(7/8, 7/8, 0, 15/8, 1, 1, BlockID.bedroomLargeTable, 0);
model.addBox(15/8, 7/8, 0, 19/8, 1, 1, BlockID.bedroomLargeTable, 0);
model.addBox(7/8, 7/8, 1, 15/8, 1, 11/8, BlockID.bedroomLargeTable, 0);
model.addBox(-1/8, 7/8, 1, 7/8, 1, 11/8, BlockID.bedroomLargeTable, 0);
model.addBox(15/8, 7/8, 1, 19/8, 1, 11/8, BlockID.bedroomLargeTable, 0);
model.addBox(-1/8, 0, 0, 0, 7/8, 1/8, BlockID.bedroomLargeTable, 0);
model.addBox(-1/8, 0, 5/4, 0, 7/8, 11/8, BlockID.bedroomLargeTable, 0);
model.addBox(9/4, 0, 5/4, 19/8, 7/8, 11/8, BlockID.bedroomLargeTable, 0);
model.addBox(9/4, 0, 0, 19/8, 7/8, 1/8, BlockID.bedroomLargeTable, 0);
renderer.addEntry(model);
