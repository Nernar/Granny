IDRegistry.genBlockID("basementTable");
Block.createBlock("basementTable", [
	{ name: "Basement Table", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Basement Table", texture: [["house_floor", 0]], inCreative: IN_CREATIVE },
	{ name: "Basement Table", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementTable, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(11/16, 1, 1/2, 15/16, 1.0125, 13/16, "basement_table_can", 0);
model.addBox(11/16, 1.2375, 1/2, 15/16, 5/4, 13/16, "basement_table_can", 0);
model.addBox(11/16, 1.0125, 1/2, 0.7, 1.2375, 13/16, "basement_table_can", 0);
model.addBox(0.925, 1.0125, 1/2, 15/16, 1.2375, 13/16, "basement_table_can", 0);
model.addBox(11/16, 1.0125, 1/2, 15/16, 1.2375, 0.5125, "basement_table_can", 0);
model.addBox(0, 7/8, 1/4, 1, 1, 15/16, BlockID.basementTable, 0);
model.addBox(0, 15/16, 1/4, 1, 13/8, 5/16, BlockID.basementTable, 0);
model.addBox(0, 9/8, 5/16, 1, 19/16, 7/16, BlockID.basementTable, 0);
model.addBox(0, 11/8, 5/16, 1, 23/16, 7/16, BlockID.basementTable, 0);
model.addBox(0, 0, 13/16, 1/8, 7/8, 15/16, BlockID.basementTable, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.basementTable, 0, collision);
var shape = collision.addEntry();
shape.addBox(0, 7/8, 1/4, 1, 1, 15/16);
shape.addBox(0, 15/16, 1/4, 1, 13/8, 5/16);
shape.addBox(0, 9/8, 5/16, 1, 19/16, 7/16);
shape.addBox(0, 11/8, 5/16, 1, 23/16, 7/16);
shape.addBox(0, 0, 13/16, 1/8, 7/8, 15/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementTable, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(5/8, 1, 1/2, 7/8, 17/16, 7/8, "paint_background", 0);
model.addBox(0, 7/8, 1/4, 1, 1, 15/16, BlockID.basementTable, 1);
model.addBox(0, 15/16, 1/4, 1, 13/8, 5/16, BlockID.basementTable, 1);
model.addBox(0, 9/8, 5/16, 1, 19/16, 7/16, BlockID.basementTable, 1);
model.addBox(0, 11/8, 5/16, 1, 23/16, 7/16, BlockID.basementTable, 1);
model.addBox(7/8, 1, 1/2, 15/16, 17/16, 7/8, BlockID.basementTable, 1);
model.addBox(9/16, 1, 1/2, 5/8, 17/16, 7/8, BlockID.basementTable, 1);
model.addBox(9/16, 1, 7/8, 15/16, 17/16, 15/16, BlockID.basementTable, 1);
model.addBox(9/16, 1, 7/16, 15/16, 17/16, 1/2, BlockID.basementTable, 1);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.basementTable, 1, collision);
var shape = collision.addEntry();
shape.addBox(0, 7/8, 1/4, 1, 1, 15/16);
shape.addBox(0, 15/16, 1/4, 1, 13/8, 5/16);
shape.addBox(0, 9/8, 5/16, 1, 19/16, 7/16);
shape.addBox(0, 11/8, 5/16, 1, 23/16, 7/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.basementTable, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 7/8, 1/4, 1, 1, 15/16, BlockID.basementTable, 2);
model.addBox(0, 15/16, 1/4, 1, 13/8, 5/16, BlockID.basementTable, 2);
model.addBox(0, 9/8, 5/16, 1, 19/16, 7/16, BlockID.basementTable, 2);
model.addBox(0, 11/8, 5/16, 1, 23/16, 7/16, BlockID.basementTable, 2);
model.addBox(7/8, 0, 13/16, 1, 7/8, 15/16, BlockID.basementTable, 2);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.basementTable, 2, collision);
var shape = collision.addEntry();
shape.addBox(0, 7/8, 1/4, 1, 1, 15/16);
shape.addBox(0, 15/16, 1/4, 1, 13/8, 5/16);
shape.addBox(0, 9/8, 5/16, 1, 19/16, 7/16);
shape.addBox(0, 11/8, 5/16, 1, 23/16, 7/16);
shape.addBox(7/8, 0, 13/16, 1, 7/8, 15/16);
