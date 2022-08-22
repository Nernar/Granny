IDRegistry.genBlockID("garageWall");
Block.createBlock("garageWall", [
	{ name: "Garage Wall", texture: [["stained_clay", 3]], inCreative: IN_CREATIVE },
	{ name: "Garage Wall", texture: [["stained_clay", 3]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.garageWall, 0, 0, 1/2, 1, 1, 1, 0);
Block.setShape(BlockID.garageWall, 0, 0, 0, 17/16, 1, 1/2, 1);

IDRegistry.genBlockID("basementWall");
Block.createBlock("basementWall", [
	{ name: "Basement Wall", texture: [["basement_wall", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.basementWall, 0, 0, 1, 1, 1, 5/4);
