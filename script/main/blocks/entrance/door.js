IDRegistry.genBlockID("houseEntranceDoor");
Block.createBlock("houseEntranceDoor", [
	{ name: "Entrance Door", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
], {
	opaque: false
});

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.houseEntranceDoor, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-1/8, 7/16, 49/16, 7/8, 3/4, 25/8, "entrance_door_wood", 0);
model.addBox(7/8, 7/16, 49/16, 9/8, 3/4, 25/8, "entrance_door_wood", 0);
model.addBox(0, 0, 45/16, 1, 1, 3, "entrance_door", 0);
model.addBox(0, 1, 45/16, 1, 2, 3, "entrance_door", 1);
model.addBox(-1/8, 0, 191/64, 0, 1, 49/16, BlockID.houseEntranceDoor, 0);
model.addBox(-1/8, 1, 191/64, 0, 2, 49/16, BlockID.houseEntranceDoor, 0);
model.addBox(-1/8, 2, 191/64, 7/8, 17/8, 49/16, BlockID.houseEntranceDoor, 0);
model.addBox(7/8, 2, 191/64, 9/8, 17/8, 49/16, BlockID.houseEntranceDoor, 0);
model.addBox(1, 0, 191/64, 9/8, 1, 49/16, BlockID.houseEntranceDoor, 0);
model.addBox(1, 1, 191/64, 9/8, 2, 49/16, BlockID.houseEntranceDoor, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("houseEntranceDoorCollision");
Block.createBlock("houseEntranceDoorCollision", [
	{ name: "Entrance Door Collision", texture: [["entrance_door_wood", 0]], inCreative: IN_CREATIVE }
], { opaque: false });

Block.setShape(BlockID.houseEntranceDoorCollision, 0, 0, 13/16, 1, 2, 0.99375);
