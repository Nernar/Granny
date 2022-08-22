IDRegistry.genBlockID("bathMirror");
Block.createBlock("bathMirror", [
	{ name: "Bath Mirror", inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bathMirror, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(0, 1/4, 0, 1/8, 5/4, 1, "bath_mirror", 1);
model.addBox(0, 1/4, 1, 1/8, 5/4, 2, "bath_mirror", 0);
model.addBox(1/8, 1/4, 0, 1/4, 5/16, 1, "bath_mirror", 1);
model.addBox(1/8, 1/4, 1, 1/4, 5/16, 2, "bath_mirror", 0);
renderer.addEntry(model);
