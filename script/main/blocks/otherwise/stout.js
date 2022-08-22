IDRegistry.genBlockID("woodenStout");
Block.createBlock("woodenStout", [
	{ name: "Wooden Stout", texture: [["house_wood", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.woodenStout, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(1/4, 13/2, -1/2, 3/4, 7, 1/2, BlockID.woodenStout, 0);
model.addBox(1/4, 13/2, -3/2, 3/4, 7, -1/2, BlockID.woodenStout, 0);
model.addBox(1/4, 13/2, -5/2, 3/4, 7, -3/2, BlockID.woodenStout, 0);
model.addBox(1/4, 13/2, -7/2, 3/4, 7, -5/2, BlockID.woodenStout, 0);
model.addBox(1/4, 6, -4, 3/4, 7, -7/2, BlockID.woodenStout, 0);
model.addBox(1/4, 5, -4, 3/4, 6, -7/2, BlockID.woodenStout, 0);
model.addBox(1/4, 4, -4, 3/4, 5, -7/2, BlockID.woodenStout, 0);
model.addBox(1/4, 4, 1/2, 3/4, 5, 1, BlockID.woodenStout, 0);
model.addBox(1/4, 5, 1/2, 3/4, 6, 1, BlockID.woodenStout, 0);
model.addBox(1/4, 6, 1/2, 3/4, 7, 1, BlockID.woodenStout, 0);
renderer.addEntry(model);
