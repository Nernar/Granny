IDRegistry.genBlockID("cupboardShelf");
Block.createBlock("cupboardShelf", [
	{ name: "Cupboard Shelf", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.cupboardShelf, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(-1, 5/8, 0, 0, 11/16, 3/4, BlockID.cupboardShelf, 0);
model.addBox(0, 5/8, 0, 9/16, 11/16, 3/4, BlockID.cupboardShelf, 0);
model.addBox(-15/16, 11/16, 0, 0, 9/8, 1/16, BlockID.cupboardShelf, 0);
model.addBox(0, 11/16, 0, 1/2, 9/8, 1/16, BlockID.cupboardShelf, 0);
model.addBox(-15/16, 29/32, 1/16, 0, 15/16, 5/16, BlockID.cupboardShelf, 0);
model.addBox(0, 29/32, 1/16, 1/2, 15/16, 5/16, BlockID.cupboardShelf, 0);
model.addBox(-15/16, 11/16, 1/16, -7/8, 29/32, 5/16, BlockID.cupboardShelf, 0);
model.addBox(-1/4, 11/16, 1/16, -3/16, 29/32, 5/16, BlockID.cupboardShelf, 0);
model.addBox(7/16, 11/16, 1/16, 1/2, 29/32, 5/16, BlockID.cupboardShelf, 0);
model.addBox(-15/16, 9/8, 0, 0, 19/16, 1/4, BlockID.cupboardShelf, 0);
model.addBox(0, 9/8, 0, 1/2, 19/16, 1/4, BlockID.cupboardShelf, 0);
model.addBox(1/2, 11/16, 0, 9/16, 19/16, 1/8, BlockID.cupboardShelf, 0);
model.addBox(1/2, 11/16, 1/8, 9/16, 7/8, 3/4, BlockID.cupboardShelf, 0);
model.addBox(1/2, 7/8, 1/8, 9/16, 19/16, 1/4, BlockID.cupboardShelf, 0);
model.addBox(1/2, 7/8, 1/4, 9/16, 9/8, 3/8, BlockID.cupboardShelf, 0);
model.addBox(1/2, 7/8, 3/8, 9/16, 17/16, 1/2, BlockID.cupboardShelf, 0);
model.addBox(1/2, 7/8, 1/2, 9/16, 1, 5/8, BlockID.cupboardShelf, 0);
model.addBox(1/2, 7/8, 5/8, 9/16, 15/16, 11/16, BlockID.cupboardShelf, 0);
model.addBox(-1, 11/16, 0, -15/16, 19/16, 1/8, BlockID.cupboardShelf, 0);
model.addBox(-1, 11/16, 1/8, -15/16, 7/8, 3/4, BlockID.cupboardShelf, 0);
model.addBox(-1, 7/8, 1/8, -15/16, 19/16, 1/4, BlockID.cupboardShelf, 0);
model.addBox(-1, 7/8, 1/4, -15/16, 9/8, 3/8, BlockID.cupboardShelf, 0);
model.addBox(-1, 7/8, 3/8, -15/16, 17/16, 1/2, BlockID.cupboardShelf, 0);
model.addBox(-1, 7/8, 1/2, -15/16, 1, 5/8, BlockID.cupboardShelf, 0);
model.addBox(-1, 7/8, 5/8, -15/16, 15/16, 11/16, BlockID.cupboardShelf, 0);
model.addBox(-1, 0, 0, -15/16, 5/8, 1/16, BlockID.cupboardShelf, 0);
model.addBox(1/2, 0, 0, 9/16, 5/8, 1/16, BlockID.cupboardShelf, 0);
model.addBox(-1, 0, 11/16, -15/16, 5/8, 3/4, BlockID.cupboardShelf, 0);
model.addBox(1/2, 0, 11/16, 9/16, 5/8, 3/4, BlockID.cupboardShelf, 0);
renderer.addEntry(model);
