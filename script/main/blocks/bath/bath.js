IDRegistry.genBlockID("bath");
Block.createBlock("bath", [
	{ name: "Bath", texture: [["quartz_block_top", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bath, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/2, 21/16, 7/16, 31/16, 11/8, 9/16, "hopper_outside", 0);
model.addBox(31/16, 21/16, 5/16, 2, 3/2, 11/16, "hopper_outside", 0);
model.addBox(1/16, 5/16, 0, 1, 1, 1/16, BlockID.bath, 0);
model.addBox(1, 5/16, 0, 31/16, 1, 1/16, BlockID.bath, 0);
model.addBox(0, 5/16, 1/16, 1/16, 1, 15/16, BlockID.bath, 0);
model.addBox(1/16, 5/16, 15/16, 1, 1, 1, BlockID.bath, 0);
model.addBox(1, 5/16, 15/16, 31/16, 1, 1, BlockID.bath, 0);
model.addBox(31/16, 5/16, 1/16, 2, 1, 15/16, BlockID.bath, 0);
model.addBox(1/16, 1/4, 1/16, 1, 5/16, 15/16, BlockID.bath, 0);
model.addBox(1, 1/4, 1/16, 31/16, 5/16, 15/16, BlockID.bath, 0);
model.addBox(1/8, 0, 1/8, 1/4, 1/4, 1/4, BlockID.bath, 0);
model.addBox(7/4, 0, 1/8, 15/8, 1/4, 1/4, BlockID.bath, 0);
model.addBox(1/8, 0, 3/4, 1/4, 1/4, 7/8, BlockID.bath, 0);
model.addBox(7/4, 0, 3/4, 15/8, 1/4, 7/8, BlockID.bath, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.bath, -1, collision);
var shape = collision.addEntry();
shape.addBox(1/16, 5/16, 0, 1, 1, 1/16);
shape.addBox(1, 5/16, 0, 31/16, 1, 1/16);
shape.addBox(0, 5/16, 1/16, 1/16, 1, 15/16);
shape.addBox(1/16, 5/16, 15/16, 1, 1, 1);
shape.addBox(1, 5/16, 15/16, 31/16, 1, 1);
shape.addBox(31/16, 5/16, 1/16, 2, 1, 15/16);
shape.addBox(1/16, 1/4, 1/16, 1, 5/16, 15/16);
shape.addBox(1, 1/4, 1/16, 31/16, 5/16, 15/16);
shape.addBox(1/8, 0, 1/8, 1/4, 1/4, 1/4);
shape.addBox(7/4, 0, 1/8, 15/8, 1/4, 1/4);
shape.addBox(1/8, 0, 3/4, 1/4, 1/4, 7/8);
shape.addBox(7/4, 0, 3/4, 15/8, 1/4, 7/8);
shape.addBox(31/16, 21/16, 5/16, 2, 3/2, 11/16);
shape.addBox(3/2, 21/16, 7/16, 31/16, 11/8, 9/16);
