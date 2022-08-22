Callback.addCallback("ItemUse", function(coords, item, block) {
	switch (block.id) {
		case BlockID.bathWardrobe:
			openWardrobe(coords.x, coords.y, coords.z, BlockID.bathWardrobe2, true);
			break;
		case BlockID.bathWardrobe2:
			openWardrobe(coords.x, coords.y, coords.z, BlockID.bathWardrobe, true);
			break;
	}
});

var creak = new Music("wardrobe.mp3");
creak.setLooping(false);

function openWardrobe(coordX, coordY, coordZ, id, playSound) {
	World.setBlock(coordX, coordY, coordZ, id);
	if (playSound) creak.play();
	Game.prevent();
}

var entSafeDoor = MobRegistry.registerEntity("safeDoor");

IDRegistry.genItemID("doorSafeSpawn");
Item.createItem("doorSafeSpawn", "Door Safe Spawn", {
	name: "spawn_egg",
	meta: 0
}, {
	isTech: false,
	stack: 64
});

var safeDoor_model = new EntityModel();
entSafeDoor.customizeEvents({
	tick: function() {
		var safeDoor_texture = new Texture("mob/safe.png");
		safeDoor_texture.setResolution(64, 32);
		safeDoor_texture.setPixelScale(1);
		safeDoor_model.setTexture(safeDoor_texture);
		Entity.setSkin(this.entity, "mob/safe.png");
		Entity.setMobile(this.entity, false);
		OpenSafe.entity = this.entity;
	}
});

safeDoor_model.createAnimation(16, function(frame) {
	var renderSafeDoor = new Render();
	var partDoor = [{
		type: "box",
		coords: {
			x: 4,
			y: 15,
			z: -8
		},
		size: {
			x: 1,
			y: 14,
			z: 12
		},
		uv: {
			x: 0,
			y: 0
		}
	}];
	renderSafeDoor.setPart("head", partDoor, {});
	return renderSafeDoor;
}, 4);

entSafeDoor.customizeVisual({
	getModels: function() {
		return {
			"main": safeDoor_model
		};
	}
});

Item.registerUseFunctionForID(ItemID.doorSafeSpawn, function(coords, item, block) {
	coords = coords.relative;
	Entity.spawnCustom("safeDoor", 22, 5, 19);
});

var OpenSafe = new Transition()
	.withFrames([
		{ duration: 1, yaw: 1.5 }
	])
	.withFrom(22, 5, 19, 0, 0);

Callback.addCallback("ItemUse", function(coords, item, block) {
	if (item.id == 267) {
		OpenSafe.start();
	}
});

var entBlade = MobRegistry.registerEntity("blade");

var blade_model = new EntityModel();
entBlade.customizeEvents({
	tick: function() {
		var blade_texture = new Texture("mob/blade.png");
		blade_texture.setResolution(64, 32);
		blade_texture.setPixelScale(1);
		// Entity.setRender(this.entity, Native.MobRenderType.zombie);
		blade_model.setTexture(blade_texture);
		Entity.setSkin(this.entity, "mob/blade.png");
		Entity.setMobile(this.entity, false);
		bladeAnim.entity = this.entity;
	}
});

entBlade.customizeDescription({ 
	getHitbox: function() {
		return { w: 0.001, h: 0.001 };
	}
});

blade_model.createAnimation(16, function(frame) {
	var renderBlade = new Render();
	var partBlade = [{
		type: "box",
		coords: {
			x: -1,
			y: 17.1,
			z: -8
		},
		size: {
			x: 1,
			y: 2,
			z: 14
		},
		uv: {
			x: 16,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 18,
			z: -8
		},
		size: {
			x: 2,
			y: 4,
			z: 10
		},
		uv: {
			x: 0,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 22.5,
			z: -12.5
		},
		size: {
			x: 1,
			y: 7,
			z: 1
		},
		uv: {
			x: 16.6,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 22,
			z: -11
		},
		size: {
			x: 1,
			y: 6,
			z: 2
		},
		uv: {
			x: 17,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 21.5,
			z: -9
		},
		size: {
			x: 1,
			y: 5,
			z: 2
		},
		uv: {
			x: 18,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 21,
			z: -7
		},
		size: {
			x: 1,
			y: 4,
			z: 2
		},
		uv: {
			x: 19,
			y: 0
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 20.5,
			z: -5
		},
		size: {
			x: 1,
			y: 3,
			z: 2
		},
		uv: {
			x: 20,
			y: 1
		}
	},
	{
		type: "box",
		coords: {
			x: -1,
			y: 20,
			z: -3.5
		},
		size: {
			x: 1,
			y: 2,
			z: 1
		},
		uv: {
			x: 21,
			y: 0
		}
	}];
	renderBlade.setPart("head", partBlade, {});
	return renderBlade;
}, 4);

entBlade.customizeVisual({
	getModels: function() {
		return {
			"main": blade_model
		};
	}
});

Item.registerUseFunctionForID(268, function(coords, item, block) {
	coords = coords.relative;
	Entity.spawnCustom("blade", 32, 10, 29);
	Entity.setPosition(bladeAnim.entity, 32, 10, 29);
});

var bladeFall = new Music("bladeFall.mp3");

var bladeAnim = new Transition()
	.withFrames([
		{ duration: 0.4 },
		{ duration: 0.4, y: -1.45 },
		{ duration: 1 },
		{ duration: 1, y: 1.45 }
	])
	.withOnFrameListener(function(task, frame, gen) {
		switch (frame) {
			case 0:
				break;
		}
	})
	.withFrom(32, 10, 29, 0, 0);

Callback.addCallback("ItemUse", function(coords, item, block) {
	if(item.id == 269) {
		bladeAnim.start();
		bladeFall.play();
	}
});

var entShield = MobRegistry.registerEntity("shield");

var shield_model = new EntityModel();
entShield.customizeEvents({
	tick: function() {
		var shield_texture = new Texture("mob/shield.png");
		shield_texture.setResolution(64, 32);
		shield_texture.setPixelScale(1);
		shield_model.setTexture(shield_texture);
		Entity.setSkin(this.entity, "mob/shield.png");
		Entity.setMobile(this.entity, false);
		ShieldAnim.entity = this.entity;
	}
});

entShield.customizeDescription({ 
	getHitbox: function() {
		return { w: 0, h: 0 };
	}
});

shield_model.createAnimation(16, function(frame) {
	var renderShield = new Render();
	var partShield = [{
		type: "box",
		coords: {
			x: 8,
			y: 13,
			z: -11.5
		},
		size: {
			x: 10,
			y: 10,
			z: 1
		},
		uv: {
			x: 0,
			y: 32
		}
	}];
	renderShield.setPart("head", partShield, {});
	return renderShield;
}, 4);

entShield.customizeVisual({
	getModels: function() {
		return {
			"main": shield_model
		};
	}
});

var shieldFall = new Music("shieldFall.mp3");

var ShieldAnim = new Transition()
	.withFrames([
		{ duration: 0.4 },
		{ duration: 0.3, y: -1.375 },
		{ pitch: -0.4, y: 0.22, z: 0.495, duration: 0.25, translate: "right" },
		{ duration: 5 }
	])
	.withOnFrameListener(function(task, frame, gen) {
		switch (frame) {
			case 0:
				shieldFall.play();
				break;
		}
	})
	.withFrom(19, 6, 22, 0, 0)

var falledShield = false;

Callback.addCallback("tick", function() {
	var PlayerEnt = Entity.getPosition(Player.get());
	var block = World.getBlockID(PlayerEnt.x, PlayerEnt.y, PlayerEnt.z);
	if (block == BlockID.elbox && falledShield == false) {
		falledShield = true;
		ShieldAnim.start();
	}
});

function createBathWall(id, number){
	IDRegistry.genBlockID(id); 
	Block.createBlock(id, [{
		name: "Bath Wall " + number,
		texture: [["bath_wall", number]],
		inCreative: IN_CREATIVE
	}]);
}

createBathWall("bathWall1", 0);
createBathWall("bathWall2", 1);
createBathWall("bathWall3", 2);
createBathWall("bathWall4", 3);
createBathWall("bathWall5", 4);
createBathWall("bathWall6", 5);
createBathWall("bathWall7", 6);
createBathWall("bathWall8", 7);
createBathWall("bathWall9", 8);
