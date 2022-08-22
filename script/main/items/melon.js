IDRegistry.genBlockID("melon"); 
Block.createBlock("melon", [{
	name: "Melon",
	texture: [["watermelon", 1], ["watermelon", 1], ["watermelon", 0]],
	inCreative: IN_CREATIVE
}]); 

Block.setBlockShape(BlockID.melon, { x: 4/16, y: 7/16, z: 4/16 }, { x: 12/16, y: 19/16, z: 12/16 });

Callback.addCallback("ItemUse", function(coords, item, block){
	if (item.id == BlockID.melon) {
		Game.prevent();
	}
});
