IDRegistry.genItemID("masterKey");
Item.createItem("masterKey", "Master Key", { name: "master_key", meta: 0 }, {});

Callback.addCallback("ItemUse", function(coords, item, block) {
	if (item.id == ItemID.masterkey && block.id == maindoorc) {
    	if (oneLamp == true && twoLamp == true) {
    		endAnimation.start();
    	} else {
    		Game.tipMessage("It seems that one key is not enough");
    	}
	}
});
