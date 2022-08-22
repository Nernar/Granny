IDRegistry.genBlockID("basementEntrance");
Block.createBlock("basementEntrance", [
	{ name: "Stairs Entrance", texture: [["planks", 1]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementEntrance, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 15/16, 0, 1, 1, 1, "gold_block", 0);
model.addBox(0, 0, 15/16, 1, 7/16, 1, BlockID.basementEntrance, 0);
model.addBox(0, 7/16, 7/16, 1, 15/16, 1, BlockID.basementEntrance, 0);
model.addBox(15/16, 0, 7/16, 1, 7/16, 15/16, BlockID.basementEntrance, 0);
model.addBox(15/16, 0, 0, 1, 15/16, 7/16, BlockID.basementEntrance, 0);
model.addBox(0, 0, 7/16, 1/16, 7/16, 15/16, BlockID.basementEntrance, 0);
model.addBox(0, 0, 0, 1/16, 15/16, 7/16, BlockID.basementEntrance, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("basementStairs");
Block.createBlock("basementStairs", [
	{ name: "Basement Stairs", texture: [["planks", 1]], inCreative: IN_CREATIVE },
	{ name: "Basement Stairs", texture: [["planks", 1]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementStairs, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 15/16, 1, 7/16, 1, BlockID.basementStairs, 0);
model.addBox(0, 7/16, 1/2, 1, 1/2, 1, BlockID.basementStairs, 0);
model.addBox(0, 7/16, 7/16, 1, 15/16, 1/2, BlockID.basementStairs, 0);
model.addBox(0, 15/16, 0, 1, 1, 1/2, BlockID.basementStairs, 0);
model.addBox(15/16, 0, 7/16, 1, 7/16, 15/16, BlockID.basementStairs, 0);
model.addBox(15/16, 0, 0, 1, 15/16, 7/16, BlockID.basementStairs, 0);
model.addBox(0, 0, 7/16, 1/16, 7/16, 15/16, BlockID.basementStairs, 0);
model.addBox(0, 0, 0, 1/16, 15/16, 7/16, BlockID.basementStairs, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.basementStairs, 0, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 15/16, 1, 7/16, 1);
shape.addBox(0, 7/16, 1/2, 1, 1/2, 1);
shape.addBox(0, 7/16, 7/16, 1, 15/16, 1/2);
shape.addBox(0, 15/16, 0, 1, 1, 1/2);
shape.addBox(15/16, 0, 7/16, 1, 7/16, 15/16);
shape.addBox(15/16, 0, 0, 1, 15/16, 7/16);
shape.addBox(0, 0, 7/16, 1/16, 7/16, 15/16);
shape.addBox(0, 0, 0, 1/16, 15/16, 7/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementStairs, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(15/16, 0, 0, 1, 1, 1, "planks", 1);
model.addBox(0, 0, 0, 1/16, 1, 1, "planks", 1);
renderer.addEntry(model);
