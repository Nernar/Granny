IDRegistry.genBlockID("thinFloor");
Block.createBlock("thinFloor", [
	{ name: "Thin Floor", texture: [["planks", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.thinFloor, 0, 3/4, 0, 1, 1, 1);
