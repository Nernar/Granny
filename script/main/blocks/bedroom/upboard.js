IDRegistry.genBlockID("bedroomUpboard");
Block.createBlock("bedroomUpboard", [
	{ name: "Bedroom Upboard", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Bedroom Upboard", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.bedroomUpboard, -5/8, 0, 1/4, 1, 25/16, 1, 0);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomUpboard, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(7/8, 0, 7/8, 1, 3/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-5/8, 0, 7/8, -1/2, 3/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-5/8, 0, 1/4, -1/2, 3/16, 3/8, BlockID.bedroomUpboard, 0);
model.addBox(7/8, 0, 1/4, 1, 3/16, 3/8, BlockID.bedroomUpboard, 0);
model.addBox(0, 3/16, 1/4, 15/16, 1/4, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 3/16, 1/4, 0, 1/4, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 5/8, 1/4, 0, 11/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(0, 5/8, 1/4, 15/16, 11/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(0, 17/16, 1/4, 15/16, 9/8, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 17/16, 1/4, 0, 9/8, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 3/2, 1/4, 1/16, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(1/16, 3/2, 1/4, 15/16, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(15/16, 7/16, 1/4, 1, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(15/16, 3/16, 1/4, 1, 7/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-5/8, 3/16, 1/4, -9/16, 7/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-5/8, 7/16, 1/4, -9/16, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 7/16, 15/16, 7/16, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(7/16, 7/16, 15/16, 15/16, 25/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(7/16, 1/4, 15/16, 15/16, 7/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(-9/16, 1/4, 15/16, 7/16, 7/16, 1, BlockID.bedroomUpboard, 0);
model.addBox(1/8, 9/8, 1/4, 1/4, 3/2, 1, BlockID.bedroomUpboard, 0);
renderer.addEntry(model);

Block.setShape(BlockID.bedroomUpboard, -1, 0, 0, 5/8, 25/16, 3/4, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomUpboard, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/2, 0, 5/8, 5/8, 3/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-1, 0, 5/8, -7/8, 3/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-1, 0, 0, -7/8, 3/16, 1/8, BlockID.bedroomUpboard, 1);
model.addBox(1/2, 0, 0, 5/8, 3/16, 1/8, BlockID.bedroomUpboard, 1);
model.addBox(-3/8, 3/16, 0, 9/16, 1/4, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 3/16, 0, -3/8, 1/4, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 5/8, 0, -3/8, 11/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-3/8, 5/8, 0, 9/16, 11/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-3/8, 17/16, 0, 9/16, 9/8, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 17/16, 0, -3/8, 9/8, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 3/2, 0, -5/16, 25/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-5/16, 3/2, 0, 9/16, 25/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(9/16, 7/16, 0, 5/8, 25/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(9/16, 3/16, 0, 5/8, 7/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-1, 3/16, 0, -15/16, 7/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-1, 7/16, 0, -15/16, 25/16, 3/4, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 7/16, 0, 1/16, 25/16, 1/16, BlockID.bedroomUpboard, 1);
model.addBox(1/16, 7/16, 0, 9/16, 25/16, 1/16, BlockID.bedroomUpboard, 1);
model.addBox(1/16, 1/4, 0, 9/16, 7/16, 1/16, BlockID.bedroomUpboard, 1);
model.addBox(-15/16, 1/4, 0, 1/16, 7/16, 1/16, BlockID.bedroomUpboard, 1);
model.addBox(-1/4, 9/8, 0, -1/8, 3/2, 3/4, BlockID.bedroomUpboard, 1);
renderer.addEntry(model);
