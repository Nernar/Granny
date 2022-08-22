IDRegistry.genBlockID("prisonFloor");
Block.createBlock("prisonFloor", [
	{ name: "Prison Floor", texture: [["planks", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.prisonFloor, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(7/8, -21/4, 1, 1, -5, 21/16, BlockID.prisonFloor, 0);
model.addBox(3/4, -21/4, 1, 7/8, -5, 5/4, BlockID.prisonFloor, 0);
model.addBox(5/8, -21/4, 1, 3/4, -5, 9/8, BlockID.prisonFloor, 0);
model.addBox(1/2, -21/4, 1, 5/8, -5, 17/16, BlockID.prisonFloor, 0);
model.addBox(15/16, -21/4, 21/16, 1, -5, 11/8, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 21/16, -15/16, -5, 11/8, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 1, -7/8, -5, 21/16, BlockID.prisonFloor, 0);
model.addBox(-7/8, -21/4, 1, -3/4, -5, 19/16, BlockID.prisonFloor, 0);
model.addBox(-3/4, -21/4, 1, -5/8, -5, 9/8, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 23/8, -5/8, -5, 3, BlockID.prisonFloor, 0);
model.addBox(-5/8, -21/4, 47/16, -1/2, -5, 3, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 43/16, -3/4, -5, 23/8, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 39/16, -7/8, -5, 43/16, BlockID.prisonFloor, 0);
model.addBox(-1, -21/4, 19/8, -15/16, -5, 39/16, BlockID.prisonFloor, 0);
model.addBox(1/2, -21/4, 47/16, 1, -5, 3, BlockID.prisonFloor, 0);
model.addBox(11/16, -21/4, 11/4, 1, -5, 47/16, BlockID.prisonFloor, 0);
model.addBox(13/16, -21/4, 5/2, 1, -5, 11/4, BlockID.prisonFloor, 0);
model.addBox(15/16, -21/4, 19/8, 1, -5, 5/2, BlockID.prisonFloor, 0);
renderer.addEntry(model);
