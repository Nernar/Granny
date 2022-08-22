IDRegistry.genItemID("pliers");
Item.createItem("pliers", "Cutting Pliers", { name: "cutting_pliers", meta: 0 }, {});

var cutSnd = new Music("cut.mp3");
Callback.addCallback("ItemUse", function(coords, item, block) {
	if (item.id == ItemID.pliers && twoLamp == false && block.id == BlockID.elbox && falledShield == true) {
		World.setBlock(coords.x, coords.y, coords.z, BlockID.elbox2, 0);
		World.setBlock(21, 9, 13, BlockID.lamps2);
		cutSnd.play();
		oneLamp = true;
	}
	if (item.id == ItemID.pliers && twoLamp == true && block.id == BlockID.elbox) {
		World.setBlock(coords.x, coords.y, coords.z, BlockID.elbox2, 0);
		World.setBlock(21, 9, 13, BlockID.lamps4);
		cutSnd.play();
		oneLamp = true;
	}
	if (item.id != ItemID.pliers && block.id == BlockID.elbox && falledShield == true) {
		Game.tipMessage("I need a cutting pliers");
	}
	if (item.id == ItemID.pliers && block.id == BlockID.lamps && oneLamp == false) {
		World.setBlock(21, 9, 13, BlockID.lamps3);
		cutSnd.play();
		twoLamp = true;
	}
	if (item.id == ItemID.pliers && block.id == BlockID.lamps) {
		World.setBlock(21, 9, 13, BlockID.lamps3);
		cutSnd.play();
		twoLamp = true;
	}
	if (item.id == ItemID.pliers && block.id == BlockID.lamps2) {
		World.setBlock(21, 9, 13, BlockID.lamps4);
		cutSnd.play();
		twoLamp = true;
	}
});
