IDRegistry.genBlockID("prisonEntranceLock");
Block.createBlock("prisonEntranceLock", [
	{ name: "Prison Entrance Lock", texture: [["entrance_wood", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.prisonEntranceLock, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/4, 0, 1/16, 7/8, 1, 5/16, BlockID.prisonEntranceLock, 0);
model.addBox(3/4, 1, 1/16, 7/8, 2, 5/16, BlockID.prisonEntranceLock, 0);
model.addBox(3/4, 0, 3/8, 7/8, 1, 5/8, BlockID.prisonEntranceLock, 0);
model.addBox(3/4, 1, 3/8, 7/8, 2, 5/8, BlockID.prisonEntranceLock, 0);
model.addBox(3/4, 0, 11/16, 7/8, 1, 15/16, BlockID.prisonEntranceLock, 0);
model.addBox(3/4, 1, 11/16, 7/8, 2, 15/16, BlockID.prisonEntranceLock, 0);
renderer.addEntry(model);
