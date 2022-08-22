IDRegistry.genBlockID("basementColumn");
Block.createBlock("basementColumn", [
	{ name: "Column First", texture: [["lapis_block", 0]], inCreative: IN_CREATIVE },
	{ name: "Column Second", texture: [["diamond_block", 0]], inCreative: IN_CREATIVE },
	{ name: "Column Third", texture: [["diamond_block", 0]], inCreative: IN_CREATIVE },
	{ name: "Column Fourth", texture: [["lapis_block", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.basementColumn, 0, 0, 1/16, 5/16, 1, 3/8, 0);
Block.setShape(BlockID.basementColumn, 0, 0, 1/16, 5/16, 1, 3/8, 1);
Block.setShape(BlockID.basementColumn, 11/16, 0, 1/16, 1, 1, 3/8, 2);
Block.setShape(BlockID.basementColumn, 11/16, 0, 1/16, 1, 1, 3/8, 3);
