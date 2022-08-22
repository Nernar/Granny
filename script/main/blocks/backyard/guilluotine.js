IDRegistry.genBlockID("guillotine");
Block.createBlock("guillotine", [
	{ name: "Guillotine", texture: [["house_wood", 1]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.guillotine, -1, 0, 1/8, 7/8, 9/16, 7/8);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.guillotine, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 1/2, 1/8, 29/32, 9/16, 7/8, "guillotine_wood", 0);
model.addBox(-1, 1/2, 1/8, 0, 9/16, 7/8, "guillotine_wood", 0);
model.addBox(27/32, 9/16, 1/8, 29/32, 5/8, 7/8, "house_metal", 0);
model.addBox(27/32, 5/8, 1/8, 29/32, 3/4, 3/8, "house_metal", 0);
model.addBox(27/32, 5/8, 5/8, 29/32, 3/4, 7/8, "house_metal", 0);
model.addBox(27/32, 0.88125, 1/8, 29/32, 0.94375, 7/8, "house_metal", 0);
model.addBox(27/32, 0.75625, 1/8, 29/32, 0.88125, 3/8, "house_metal", 0);
model.addBox(27/32, 0.75625, 5/8, 29/32, 0.88125, 7/8, "house_metal", 0);
model.addBox(7/8, 0, 15/16, 1, 1, 1, BlockID.guillotine, 0);
model.addBox(7/8, 1, 15/16, 1, 2, 1, BlockID.guillotine, 0);
model.addBox(7/8, 2, 15/16, 1, 9/4, 1, BlockID.guillotine, 0);
model.addBox(7/8, 0, 7/8, 29/32, 1, 15/16, BlockID.guillotine, 0);
model.addBox(7/8, 1, 7/8, 29/32, 2, 15/16, BlockID.guillotine, 0);
model.addBox(7/8, 2, 7/8, 29/32, 9/4, 15/16, BlockID.guillotine, 0);
model.addBox(31/32, 0, 7/8, 1, 1, 15/16, BlockID.guillotine, 0);
model.addBox(31/32, 1, 7/8, 1, 2, 15/16, BlockID.guillotine, 0);
model.addBox(31/32, 2, 7/8, 1, 9/4, 15/16, BlockID.guillotine, 0);
model.addBox(7/8, 0, 0, 1, 1, 1/16, BlockID.guillotine, 0);
model.addBox(7/8, 1, 0, 1, 2, 1/16, BlockID.guillotine, 0);
model.addBox(7/8, 2, 0, 1, 9/4, 1/16, BlockID.guillotine, 0);
model.addBox(7/8, 0, 1/16, 29/32, 1, 1/8, BlockID.guillotine, 0);
model.addBox(7/8, 1, 1/16, 29/32, 2, 1/8, BlockID.guillotine, 0);
model.addBox(7/8, 2, 1/16, 29/32, 9/4, 1/8, BlockID.guillotine, 0);
model.addBox(31/32, 0, 1/16, 1, 1, 1/8, BlockID.guillotine, 0);
model.addBox(31/32, 1, 1/16, 1, 2, 1/8, BlockID.guillotine, 0);
model.addBox(31/32, 2, 1/16, 1, 9/4, 1/8, BlockID.guillotine, 0);
model.addBox(7/8, 5/2, 0, 1, 21/8, 1, BlockID.guillotine, 0);
model.addBox(7/8, 5/2, -1/16, 1, 21/8, 0, BlockID.guillotine, 0);
model.addBox(7/8, 5/2, 1, 1, 21/8, 17/16, BlockID.guillotine, 0);
model.addBox(-1, 0, 1/8, -7/8, 1/2, 1/4, BlockID.guillotine, 0);
model.addBox(-1, 0, 3/4, -7/8, 1/2, 7/8, BlockID.guillotine, 0);
model.addBox(31/32, 9/4, 1/16, 1, 5/2, 1/8, BlockID.guillotine, 0);
model.addBox(7/8, 9/4, 1/16, 29/32, 5/2, 1/8, BlockID.guillotine, 0);
model.addBox(7/8, 9/4, 7/8, 29/32, 5/2, 15/16, BlockID.guillotine, 0);
model.addBox(31/32, 9/4, 7/8, 1, 5/2, 15/16, BlockID.guillotine, 0);
model.addBox(7/8, 9/4, 15/16, 1, 5/2, 1, BlockID.guillotine, 0);
model.addBox(7/8, 9/4, 0, 1, 5/2, 1/16, BlockID.guillotine, 0);
renderer.addEntry(model);

var collision = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(BlockID.guillotine, -1, collision);
var shape = collision.addEntry();
