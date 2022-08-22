IDRegistry.genBlockID("bedroomSwitch");
Block.createBlock("bedroomSwitch", [
	{ name: "Bedroom Switch", texture: [["stone", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomSwitch, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(13/16, 3/16, 15/16, 7/8, 13/16, 1, "cauldron_inner", 0);
model.addBox(1/8, 3/16, 15/16, 3/16, 13/16, 1, "cauldron_inner", 0);
model.addBox(3/16, 3/4, 15/16, 13/16, 13/16, 1, "cauldron_inner", 0);
model.addBox(3/16, 3/16, 15/16, 13/16, 1/4, 1, "cauldron_inner", 0);
model.addBox(0, 0, 0, 1, 3/16, 1, "coal_ore", 0);
model.addBox(0, 13/16, 0, 1, 1, 1, "coal_ore", 0);
model.addBox(7/8, 3/16, 0, 1, 13/16, 1, "coal_ore", 0);
model.addBox(0, 3/16, 0, 1/8, 13/16, 1, "coal_ore", 0);
model.addBox(1/8, 3/16, 0, 7/8, 1/4, 15/16, BlockID.bedroomSwitch, 0);
model.addBox(1/8, 3/4, 0, 7/8, 13/16, 15/16, BlockID.bedroomSwitch, 0);
model.addBox(1/8, 1/4, 0, 3/16, 3/4, 15/16, BlockID.bedroomSwitch, 0);
model.addBox(13/16, 1/4, 0, 7/8, 3/4, 15/16, BlockID.bedroomSwitch, 0);
model.addBox(3/16, 1/4, 0, 13/16, 3/4, 3/8, BlockID.bedroomSwitch, 0);
renderer.addEntry(model);
