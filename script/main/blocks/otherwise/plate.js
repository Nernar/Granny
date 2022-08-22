IDRegistry.genBlockID("plateFloor");
Block.createBlock("plateFloor", [
	{ name: "Plate Floor", texture: [["planks", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.plateFloor, 0, 1, 0, 1, 1, 1);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.plateFloor, -1, collision);
var shape = collision.addEntry();
shape.addBox(0, 15/16, 0, 1, 1, 1);
