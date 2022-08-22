IDRegistry.genBlockID("backyardClimbCeiling");
Block.createBlock("backyardClimbCeiling", [
	{ name: "Backyard Climb Ceiling", texture: [["stained_clay", 4], ["planks", 0], ["stained_clay", 4]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.backyardClimbCeiling, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 7/8, 0, 1, 1, 1, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 3/4, 0, 1, 7/8, 7/8, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 5/8, 0, 1, 3/4, 3/4, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 1/2, 0, 1, 5/8, 5/8, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 3/8, 0, 1, 1/2, 1/2, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 1/4, 0, 1, 3/8, 3/8, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 1/8, 0, 1, 1/4, 1/4, BlockID.backyardClimbCeiling, 0);
model.addBox(0, 0, 0, 1, 1/8, 1/8, BlockID.backyardClimbCeiling, 0);
renderer.addEntry(model);
