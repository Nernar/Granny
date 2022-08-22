var entityTypeGranny = MobRegistry.registerEntity("granny");

IDRegistry.genItemID("dev_grannySpawn");
Item.createItem("dev_grannySpawn", "Granny Spawn", {
	name: "spawn_egg",
	meta: 0
}, {
	isTech: false,
	stack: 64
});

// var scream = new Music.Builder("scream.mp3");

var granny_model = new EntityModel();
entityTypeGranny.customizeEvents({
	tick: function() {
		var granny_texture = new Texture("mob/granny.png");
		granny_texture.setResolution(128, 64);
		granny_texture.setPixelScale(2);
		granny_model.setTexture(granny_texture);
		Entity.setSkin(this.entity, "mob/granny.png");

		// Entity.setRender(this.entity, Native.MobRenderType.skeleton);

		Entity.setArmorSlot(this.entity, 0, 315, 1, 0);
		Entity.setCarriedItem(this.entity, 276, 1, 0); 
	},
	attackedBy: function(attacker, amount) {
		// scream.play();
	}
});

granny_model.createAnimation(16, function(frame) {
	var render = new Render();
	var partHead = [{
		type: "box",
		coords: {
			x: -4,
			y: -24,
			z: -4
		},
		size: {
			x: 8,
			y: 8,
			z: 8
		},
		uv: {
			x: 0,
			y: 0
		},
		offset: {
			x: -4,
			y: -24,
			z: -4
		}
	}];
	var partBody = [{
		type: "box",
		coords: {
			x: -4,
			y: -6,
			z: -2
		},
		size: {
			x: 8,
			y: 12,
			z: 4
		},
		uv: {
			x: 16,
			y: 16
		}
	}];
	var partRightArm = [
		{ type: "box", coords: { x: -8, y: 12, z: -2 }, size: { x: 4,y: 12, z: 4 }, uv: { x: 40, y: 16 }}
	];
	var partLeftArm = [{
		type: "box",
		coords: {
			x: 4,
			y: 12,
			z: -2
		},
		size: {
			x: 4,
			y: 12,
			z: 4
		},
		uv: {
			x: 40,
			y: 16
		},
		offset: {
			x: -40,
			y: -34,
			z: -4
		}
	}];
	var partRightLeg = [{
		type: "box",
		coords: {
			x: -4,
			y: 6,
			z: -2
		},
		size: {
			x: 4,
			y: 12,
			z: 4
		},
		uv: {
			x: 0,
			y: 16
		},
	}];
	var partLeftLeg = [{
		type: "box",
		coords: {
			x: -2,
			y: 6,
			z: -2
		},
		size: {
			x: 4,
			y: 12,
			z: 4
		},
		uv: {
			x: 0,
			y: 16
		},
	}];
	render.setPart("head", partHead, {});
	render.setPart("body", partBody, {});
	render.setPart("leftArm", partLeftArm, {});
	render.setPart("rightArm", partRightArm, {});
	render.setPart("leftLeg", partLeftLeg, {});
	render.setPart("rightLeg", partRightLeg, {});
	return render;
}, 4);

entityTypeGranny.customizeVisual({
	getModels: function() {
		return {
			"main": granny_model
		};
	}
});

/*
entityTypeGranny.customizeAI({
	getAITypes: function() {
		return {
			"wander": {
				type: EntityAI.Wander,
				priority: 2,
				speed: 0.05,
				angular_speed: 0.2
			}
		};
	}
});
*/

Item.registerUseFunctionForID(ItemID.dev_grannySpawn, function(coords, item, block) {
	coords = coords.relative;
	Entity.spawnCustom("granny", coords.x + .5, coords.y + .5, coords.z + .5);
});
