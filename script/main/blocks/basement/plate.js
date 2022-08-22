IDRegistry.genBlockID("woodenPlate");
Block.createBlock("woodenPlate", [
	{ name: "Wooden Plate", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Wooden Plate", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.woodenPlate, 13/16, 0, 0, 1, 21/16, 15/16, 0);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.woodenPlate, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(15/16, 0, 0, 1, 1, 3/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 0, 1/4, 1, 1, 7/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 0, 1/2, 1, 1, 11/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 0, 3/4, 1, 1, 15/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 0, 0, 7/8, 1, 3/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 0, 1/4, 7/8, 1, 7/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 0, 1/2, 7/8, 1, 11/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 0, 3/4, 7/8, 1, 15/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 1, 0, 1, 21/16, 3/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 1, 1/4, 1, 21/16, 7/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 1, 1/2, 1, 21/16, 11/16, BlockID.woodenPlate, 0);
model.addBox(15/16, 1, 3/4, 1, 21/16, 15/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 1, 3/4, 7/8, 21/16, 15/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 1, 1/2, 7/8, 21/16, 11/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 1, 1/4, 7/8, 21/16, 7/16, BlockID.woodenPlate, 0);
model.addBox(13/16, 1, 0, 7/8, 21/16, 3/16, BlockID.woodenPlate, 0);
model.addBox(7/8, 19/16, 0, 15/16, 21/16, 15/16, BlockID.woodenPlate, 0);
model.addBox(7/8, 11/16, 0, 15/16, 13/16, 15/16, BlockID.woodenPlate, 0);
model.addBox(7/8, 0, 0, 15/16, 1/8, 15/16, BlockID.woodenPlate, 0);
renderer.addEntry(model);

Block.setShape(BlockID.woodenPlateTwice, -9/16, 0, 0, 1, 7/16, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.woodenPlate, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-3/16, 0, 9/16, 13/16, 1/16, 3/4, BlockID.woodenPlate, 1);
model.addBox(-9/16, 0, 9/16, -3/16, 1/16, 3/4, BlockID.woodenPlate, 1);
model.addBox(-9/16, 0, 5/16, -3/16, 1/16, 1/2, BlockID.woodenPlate, 1);
model.addBox(-9/16, 0, 1/16, -3/16, 1/16, 1/4, BlockID.woodenPlate, 1);
model.addBox(-3/16, 0, 5/16, 13/16, 1/16, 1/2, BlockID.woodenPlate, 1);
model.addBox(-3/16, 0, 1/16, 13/16, 1/16, 1/4, BlockID.woodenPlate, 1);
model.addBox(-3/16, 0, 13/16, 13/16, 1/16, 1, BlockID.woodenPlate, 1);
model.addBox(-9/16, 0, 13/16, -3/16, 1/16, 1, BlockID.woodenPlate, 1);
model.addBox(-9/16, 1/8, 13/16, -3/16, 3/16, 1, BlockID.woodenPlate, 1);
model.addBox(-9/16, 1/8, 9/16, -3/16, 3/16, 3/4, BlockID.woodenPlate, 1);
model.addBox(-9/16, 1/8, 5/16, -3/16, 3/16, 1/2, BlockID.woodenPlate, 1);
model.addBox(-9/16, 1/8, 1/16, -3/16, 3/16, 1/4, BlockID.woodenPlate, 1);
model.addBox(-3/16, 1/8, 9/16, 13/16, 3/16, 3/4, BlockID.woodenPlate, 1);
model.addBox(-3/16, 1/8, 13/16, 13/16, 3/16, 1, BlockID.woodenPlate, 1);
model.addBox(-3/16, 1/8, 5/16, 13/16, 3/16, 1/2, BlockID.woodenPlate, 1);
model.addBox(-3/16, 1/8, 1/16, 13/16, 3/16, 1/4, BlockID.woodenPlate, 1);
model.addBox(-9/16, 1/16, 1/16, -7/16, 1/8, 1, BlockID.woodenPlate, 1);
model.addBox(-1/16, 1/16, 1/16, 1/16, 1/8, 1, BlockID.woodenPlate, 1);
model.addBox(11/16, 1/16, 1/16, 13/16, 1/8, 1, BlockID.woodenPlate, 1);
model.addBox(0, 3/16, 1/2, 1, 1/4, 11/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 3/16, 1/2, 0, 1/4, 11/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 3/16, 1/4, 0, 1/4, 7/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 3/16, 0, 0, 1/4, 3/16, BlockID.woodenPlate, 1);
model.addBox(0, 3/16, 1/4, 1, 1/4, 7/16, BlockID.woodenPlate, 1);
model.addBox(0, 3/16, 0, 1, 1/4, 3/16, BlockID.woodenPlate, 1);
model.addBox(0, 3/16, 3/4, 1, 1/4, 15/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 3/16, 3/4, 0, 1/4, 15/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 5/16, 3/4, 0, 3/8, 15/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 5/16, 1/2, 0, 3/8, 11/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 5/16, 1/4, 0, 3/8, 7/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 5/16, 0, 0, 3/8, 3/16, BlockID.woodenPlate, 1);
model.addBox(0, 5/16, 1/2, 1, 3/8, 11/16, BlockID.woodenPlate, 1);
model.addBox(0, 5/16, 3/4, 1, 3/8, 15/16, BlockID.woodenPlate, 1);
model.addBox(0, 5/16, 1/4, 1, 3/8, 7/16, BlockID.woodenPlate, 1);
model.addBox(0, 5/16, 0, 1, 3/8, 3/16, BlockID.woodenPlate, 1);
model.addBox(-3/8, 1/4, 0, -1/4, 5/16, 15/16, BlockID.woodenPlate, 1);
model.addBox(1/8, 1/4, 0, 1/4, 5/16, 15/16, BlockID.woodenPlate, 1);
model.addBox(7/8, 1/4, 0, 1, 5/16, 15/16, BlockID.woodenPlate, 1);
renderer.addEntry(model);
