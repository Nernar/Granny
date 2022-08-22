IDRegistry.genBlockID("houseEntranceDoorCorridor");
Block.createBlock("houseEntranceDoorCorridor", [
	{ name: "Entrance Door Corridor", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.houseEntranceDoorCorridor, -31/16, 0, 0, -31/16, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoorCorridor, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-2, 0, 7/8, -31/16, 1, 1, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-2, -1, 7/8, -31/16, 0, 1, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-2, -1, 2, -31/16, 0, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-2, 0, 2, -31/16, 1, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-2, 1, 9/8, -31/16, 9/8, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-2, 1, 7/8, -31/16, 9/8, 9/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, 1, 9/8, -3, 9/8, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, 1, 7/8, -3, 9/8, 9/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, 0, 2, -3, 1, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, -1, 2, -3, 0, 17/8, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, -1, 7/8, -3, 0, 1, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-49/16, 0, 7/8, -3, 1, 1, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-3, 0, 61/64, -2, 1, 1.000625, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-3, -1, 61/64, -2, 0, 1.000625, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-3, -1, 1.999375, -2, 0, 2, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-3, 0, 1.999375, -2, 1, 2, BlockID.houseEntranceDoorCorridor, 0);
model.addBox(-3, 0.999375, 1, -2, 17/16, 2, BlockID.houseEntranceDoorCorridor, 0);
renderer.addEntry(model);
