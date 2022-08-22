IDRegistry.genBlockID("wireTrap");
Block.createBlock("wireTrap", [
	{ name: "Wire Trap", inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.wireTrap, 0, 0, 0, 1, -1/16, 1);

try {
	var meshWire = new RenderMesh();
	meshWire.importFromFile(__dir__ + "models/wire.obj", "obj", null);
	meshWire.setColor(0, 0, 0);
	
	var renderer = new ICRender.Model();
	renderer.addEntry(new BlockRenderer.Model(meshWire));
	BlockRenderer.setStaticICRender(BlockID.wireTrap, 0, renderer);
} catch (e) {
	reportError(e);
}
