IDRegistry.genBlockID("kitchenTable");
Block.createBlock("kitchenTable", [
	{ name: "Kitchen Table", texture: [["anvil_base", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.kitchenTable, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1/8, 7/8, 1/8, "house_metal", 0);
model.addBox(15/8, 0, 0, 2, 7/8, 1/8, "house_metal", 0);
model.addBox(0, 0, 23/8, 1/8, 7/8, 3, "house_metal", 0);
model.addBox(15/8, 0, 23/8, 2, 7/8, 3, "house_metal", 0);
model.addBox(0, 7/8, 0, 1, 1, 1, "kitchen_table", 0);
model.addBox(1, 7/8, 0, 2, 1, 1, "kitchen_table", 0);
model.addBox(0, 7/8, 1, 1, 1, 2, "kitchen_table", 0);
model.addBox(1, 7/8, 1, 2, 1, 2, "kitchen_table", 0);
model.addBox(0, 7/8, 2, 1, 1, 3, "kitchen_table", 0);
model.addBox(1, 7/8, 2, 2, 1, 3, "kitchen_table", 0);
model.addBox(1/16, 3/8, 1/16, 1, 7/16, 1, BlockID.kitchenTable, 0);
model.addBox(1, 3/8, 1/16, 31/16, 7/16, 1, BlockID.kitchenTable, 0);
model.addBox(1/16, 3/8, 1, 1, 7/16, 2, BlockID.kitchenTable, 0);
model.addBox(1, 3/8, 1, 31/16, 7/16, 2, BlockID.kitchenTable, 0);
model.addBox(1/16, 3/8, 2, 1, 7/16, 47/16, BlockID.kitchenTable, 0);
model.addBox(1, 3/8, 2, 31/16, 7/16, 47/16, BlockID.kitchenTable, 0);
renderer.addEntry(model);
