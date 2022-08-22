IDRegistry.genBlockID("armchair");
Block.createBlock("armchair", [
	{ name: "Armchair", texture: [["armchair", 0]], inCreative: IN_CREATIVE },
	{ name: "Armchair", texture: [["living_sofa", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.armchair, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 13/16, 1, 1, 1, BlockID.armchair, 0);
model.addBox(1/8, 3/16, 0, 7/8, 7/16, 1, BlockID.armchair, 0);
model.addBox(0, 0, 0, 1/8, 7/8, 13/16, BlockID.armchair, 0);
model.addBox(7/8, 0, 0, 1, 7/8, 13/16, BlockID.armchair, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.armchair, 0, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 13/16, 1, 1, 1);
shape.addBox(1/8, 3/16, 0, 7/8, 7/16, 1);
shape.addBox(0, 0, 0, 1/8, 7/8, 13/16);
shape.addBox(7/8, 0, 0, 1, 7/8, 13/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.armchair, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(13/16, 0, 0, 1, 1, 1, BlockID.armchair, 1);
model.addBox(0, 3/16, 1/8, 1, 7/16, 7/8, BlockID.armchair, 1);
model.addBox(0, 0, 0, 13/16, 7/8, 1/8, BlockID.armchair, 1);
model.addBox(0, 0, 7/8, 13/16, 7/8, 1, BlockID.armchair, 1);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.armchair, 1, collision);
var shape = collision.addEntry();
shape.addBox(13/16, 0, 0, 1, 1, 1);
shape.addBox(0, 3/16, 1/8, 1, 7/16, 7/8);
shape.addBox(0, 0, 0, 13/16, 7/8, 1/8);
shape.addBox(0, 0, 7/8, 13/16, 7/8, 1);
