IDRegistry.genBlockID("backyardBare");
Block.createBlock("backyardBare", [
	{ name: "Bare Closet", texture: [["planks", 3]], inCreative: IN_CREATIVE },
	{ name: "Bare Closet", texture: [["planks", 3]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBare, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 7/8, 1, 1, 1, BlockID.backyardBare, 0);
model.addBox(0, 0, 0, 1/8, 1, 7/8, BlockID.backyardBare, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBare, 0, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 7/8, 1, 1, 1);
shape.addBox(0, 0, 0, 1/8, 1, 7/8);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBare, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 7/8, 1, 1, 1, BlockID.backyardBare, 1);
model.addBox(0, 0, 0, 1/8, 1, 7/8, BlockID.backyardBare, 1);
model.addBox(1/8, 7/8, 0, 1, 1, 7/8, BlockID.backyardBare, 1);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBare, 1, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 7/8, 1, 1, 1);
shape.addBox(0, 0, 0, 1/8, 1, 7/8);
shape.addBox(1/8, 7/8, 0, 1, 1, 7/8);

IDRegistry.genBlockID("backyardBareFloor");
Block.createBlock("backyardBareFloor", [
	{ name: "Bare Floor", texture: [["planks", 4]], inCreative: IN_CREATIVE },
	{ name: "Bare Floor", texture: [["planks", 2]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareFloor, 0, 1/16, 0, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareFloor, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1, 1/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(1/16, 1/16, 0, 1, 1/8, 1, BlockID.backyardBareFloor, 0);
model.addBox(1/8, 1/8, 0, 1, 3/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(3/16, 3/16, 0, 1, 1/4, 1, BlockID.backyardBareFloor, 0);
model.addBox(1/4, 1/4, 0, 1, 5/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(5/16, 5/16, 0, 1, 3/8, 1, BlockID.backyardBareFloor, 0);
model.addBox(3/8, 3/8, 0, 1, 7/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(7/16, 7/16, 0, 1, 1/2, 1, BlockID.backyardBareFloor, 0);
model.addBox(1/2, 1/2, 0, 1, 9/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(9/16, 9/16, 0, 1, 5/8, 1, BlockID.backyardBareFloor, 0);
model.addBox(5/8, 5/8, 0, 1, 11/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(11/16, 11/16, 0, 1, 3/4, 1, BlockID.backyardBareFloor, 0);
model.addBox(3/4, 3/4, 0, 1, 13/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(13/16, 13/16, 0, 1, 7/8, 1, BlockID.backyardBareFloor, 0);
model.addBox(7/8, 7/8, 0, 1, 15/16, 1, BlockID.backyardBareFloor, 0);
model.addBox(15/16, 15/16, 0, 1, 1, 1, BlockID.backyardBareFloor, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBareFloor, 0, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 0, 1, 1/16, 1);
shape.addBox(1/16, 1/16, 0, 1, 1/8, 1);
shape.addBox(1/8, 1/8, 0, 1, 3/16, 1);
shape.addBox(3/16, 3/16, 0, 1, 1/4, 1);
shape.addBox(1/4, 1/4, 0, 1, 5/16, 1);
shape.addBox(5/16, 5/16, 0, 1, 3/8, 1);
shape.addBox(3/8, 3/8, 0, 1, 7/16, 1);
shape.addBox(7/16, 7/16, 0, 1, 1/2, 1);
shape.addBox(1/2, 1/2, 0, 1, 9/16, 1);
shape.addBox(9/16, 9/16, 0, 1, 5/8, 1);
shape.addBox(5/8, 5/8, 0, 1, 11/16, 1);
shape.addBox(11/16, 11/16, 0, 1, 3/4, 1);
shape.addBox(3/4, 3/4, 0, 1, 13/16, 1);
shape.addBox(13/16, 13/16, 0, 1, 7/8, 1);
shape.addBox(7/8, 7/8, 0, 1, 15/16, 1);
shape.addBox(15/16, 15/16, 0, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareFloor, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1, 15/16, 1, "dirt", 0);
model.addBox(0, 15/16, 0, 1, 1, 1, BlockID.backyardBareFloor, 1);
renderer.addEntry(model);

IDRegistry.genBlockID("backyardBareHay");
Block.createBlock("backyardBareHay", [
	{ name: "Bare Hay", texture: [["dirt", 0], ["hayblock_top", 0], ["dirt", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareHay, 0, 1/16, 0, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareHay, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 15/16, 0, 1, 1, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 7/8, 0, 15/16, 15/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 13/16, 0, 7/8, 7/8, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 3/4, 0, 13/16, 13/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 11/16, 0, 3/4, 3/4, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 5/8, 0, 11/16, 11/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 9/16, 0, 5/8, 5/8, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 1/2, 0, 9/16, 9/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 7/16, 0, 1/2, 1/2, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 3/8, 0, 7/16, 7/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 5/16, 0, 3/8, 3/8, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 1/4, 0, 5/16, 5/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 3/16, 0, 1/4, 1/4, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 1/8, 0, 3/16, 3/16, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 1/16, 0, 1/8, 1/8, 1, BlockID.backyardBareHay, 0);
model.addBox(0, 0, 0, 1/16, 1/16, 1, BlockID.backyardBareHay, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBareHay, -1, collision);
var shape = collision.addEntry();
shape.addBox(0, 15/16, 0, 1, 1, 1);
shape.addBox(0, 7/8, 0, 15/16, 15/16, 1);
shape.addBox(0, 13/16, 0, 7/8, 7/8, 1);
shape.addBox(0, 3/4, 0, 13/16, 13/16, 1);
shape.addBox(0, 11/16, 0, 3/4, 3/4, 1);
shape.addBox(0, 5/8, 0, 11/16, 11/16, 1);
shape.addBox(0, 9/16, 0, 5/8, 5/8, 1);
shape.addBox(0, 1/2, 0, 9/16, 9/16, 1);
shape.addBox(0, 7/16, 0, 1/2, 1/2, 1);
shape.addBox(0, 3/8, 0, 7/16, 7/16, 1);
shape.addBox(0, 5/16, 0, 3/8, 3/8, 1);
shape.addBox(0, 1/4, 0, 5/16, 5/16, 1);
shape.addBox(0, 3/16, 0, 1/4, 1/4, 1);
shape.addBox(0, 1/8, 0, 3/16, 3/16, 1);
shape.addBox(0, 1/16, 0, 1/8, 1/8, 1);
shape.addBox(0, 0, 0, 1/16, 1/16, 1);

IDRegistry.genBlockID("backyardBareWall");
Block.createBlock("backyardBareWall", [
	{ name: "Bare Wall", texture: [["planks", 3]], inCreative: IN_CREATIVE },
	{ name: "Bare Wall", texture: [["planks", 3]], inCreative: IN_CREATIVE },
	{ name: "Bare Wall", texture: [["planks", 3]], inCreative: IN_CREATIVE },
	{ name: "Bare Wall", texture: [["planks", 3]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareWall, 0, 0, 0, 1/8, 1, 1, 0);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareWall, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1/8, 1, 1, BlockID.backyardBareWall, 1);
model.addBox(1/8, 7/8, 0, 1, 1, 1, BlockID.backyardBareWall, 1);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBareWall, 1, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 0, 1/8, 1, 1);
shape.addBox(1/8, 7/8, 0, 1, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareWall, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 7/8, 1, 1, 1, BlockID.backyardBareWall, 2);
model.addBox(0, 7/8, 0, 1, 1, 7/8, BlockID.backyardBareWall, 2);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.backyardBareWall, 2, collision);
var shape = collision.addEntry();
shape.addBox(0, 0, 7/8, 1, 1, 1);
shape.addBox(0, 7/8, 0, 1, 1, 7/8);

Block.setShape(BlockID.backyardBareWall, 0, 0, 7/8, 1, 1, 1, 3);

IDRegistry.genBlockID("backyardBareCeiling");
Block.createBlock("backyardBareCeiling", [
	{ name: "Bare Ceiling", texture: [["planks", 3]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareCeiling, 0, 7/8, 0, 1, 1, 1);

IDRegistry.genBlockID("backyardBareWindow");
Block.createBlock("backyardBareWindow", [
	{ name: "Bare Window", texture: [["quartz_block_top", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareWindow, 0, 0, 0, 1/8, 1, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareWindow, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/16, 5/16, 1/8, 1/16, 13/16, 1, "bare_window", 0);
model.addBox(0, 0, 0, 1/8, 5/16, 1, "planks", 3);
model.addBox(0, 13/16, 0, 1/8, 1, 1, "planks", 3);
model.addBox(0, 5/16, 0, 1/8, 13/16, 1/8, "planks", 3);
model.addBox(-1/16, 1/4, 1/16, 0, 7/8, 1/8, BlockID.backyardBareWindow, 0);
model.addBox(-1/16, 13/16, 1/8, 0, 7/8, 1, BlockID.backyardBareWindow, 0);
model.addBox(-1/16, 1/4, 1, 0, 7/8, 17/16, BlockID.backyardBareWindow, 0);
model.addBox(-1/16, 1/4, 1/8, 0, 5/16, 1, BlockID.backyardBareWindow, 0);
model.addBox(1/8, 1/4, 1/8, 3/16, 5/16, 1, BlockID.backyardBareWindow, 0);
model.addBox(1/8, 13/16, 1/8, 3/16, 7/8, 1, BlockID.backyardBareWindow, 0);
model.addBox(1/8, 1/4, 1, 3/16, 7/8, 17/16, BlockID.backyardBareWindow, 0);
model.addBox(1/8, 1/4, 1/16, 3/16, 7/8, 1/8, BlockID.backyardBareWindow, 0);
model.addBox(1/32, 1/4, 17/32, 3/32, 7/8, 19/32, BlockID.backyardBareWindow, 0);
model.addBox(1/32, 17/32, 1/8, 3/32, 19/32, 1, BlockID.backyardBareWindow, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("backyardBareHolder");
Block.createBlock("backyardBareHolder", [
	{ name: "Bare Holder", inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareHolder, 0, 47/16, 0, 1/16, 3, 1/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareHolder, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, -1, 1/2, 1, -0.999375, 3/2, "bare_holder", 0);
model.addBox(0, -1, 3/2, 1, -0.999375, 5/2, "bare_holder", 1);
model.addBox(0, -1, 5/2, 1, -0.999375, 7/2, "bare_holder", 2);
renderer.addEntry(model);

IDRegistry.genBlockID("backyardBareShelf");
Block.createBlock("backyardBareShelf", [
	{ name: "Bare Shelf", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareShelf, -7/8, 7/8, 0, 2, 1, 11/16);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareShelf, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/16, 1, 1/8, 7/8, 65/64, 9/16, "diamond_ore", 0);
model.addBox(0, 29/32, 0, 1, 1, 11/16, BlockID.backyardBareShelf, 0);
model.addBox(-7/8, 29/32, 0, 0, 1, 11/16, BlockID.backyardBareShelf, 0);
model.addBox(1, 29/32, 0, 2, 1, 11/16, BlockID.backyardBareShelf, 0);
renderer.addEntry(model);

IDRegistry.genBlockID("backyardBareShelves");
Block.createBlock("backyardBareShelves", [
	{ name: "Bare Shelves", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.backyardBareShelves, 11/16, 0, 0, 1, 5/8, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardBareShelves, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(11/16, 0, 0, 17/16, 1/16, 1, BlockID.backyardBareShelves, 0);
model.addBox(11/16, 9/16, 0, 19/16, 5/8, 1, BlockID.backyardBareShelves, 0);
renderer.addEntry(model);
