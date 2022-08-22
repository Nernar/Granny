IDRegistry.genBlockID("livingroomSofa");
Block.createBlock("livingroomSofa", [
	{ name: "Sofa", texture: [["living_sofa", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.livingroomSofa, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-3/4, 0, 13/16, 1/4, 1, 1, BlockID.livingroomSofa, 0);
model.addBox(1/4, 0, 13/16, 5/4, 1, 1, BlockID.livingroomSofa, 0);
model.addBox(-3/4, 3/16, 0, 1/4, 7/16, 13/16, BlockID.livingroomSofa, 0);
model.addBox(1/4, 3/16, 0, 5/4, 7/16, 13/16, BlockID.livingroomSofa, 0);
model.addBox(-15/16, 0, 0, -3/4, 7/8, 1, BlockID.livingroomSofa, 0);
model.addBox(5/4, 0, 0, 23/16, 7/8, 1, BlockID.livingroomSofa, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.livingroomSofa, -1, collision);
var shape = collision.addEntry();
shape.addBox(-3/4, 0, 13/16, 1/4, 1, 1);
shape.addBox(1/4, 0, 13/16, 5/4, 1, 1);
shape.addBox(-3/4, 3/16, 0, 1/4, 7/16, 13/16);
shape.addBox(1/4, 3/16, 0, 5/4, 7/16, 13/16);
shape.addBox(-15/16, 0, 0, -3/4, 7/8, 1);
shape.addBox(5/4, 0, 0, 23/16, 7/8, 1);
