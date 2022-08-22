IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Hammer", { name: "hammer", meta: 0 }, {});

Callback.addCallback("ItemUse", function(coords, item, block) {
	switch (block.id) {
		case BlockID.planks1:
			if (item.id != ItemID.hammer) Game.tipMessage("I need a hammer");
			else Game.tipMessage("I finally have a hammer, I'm so happy!");
			break;
	}
});
