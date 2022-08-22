var deathBasementAnimation = new Transition()
	.withFrames([
		{ duration: 0.9 },
		{ y: -3.01, z: 2.5, pitch: -0.56, duration: 0.5, translate: "right" },
		{ y: -1.1, z: 3.28, yaw: -1.59, pitch: 1.45, duration: 0.4, },
		{ y: -0.89, z: 0.75, yaw: -1.59, pitch: 0.22, duration: 0.4 },
		{ pitch: -0.06, duration: 2.9, translate: "center" },
		{ yaw: 0.16, pitch: 1.19, duration: 0.4, translate: "center" },
		{ duration: 1 },
		{ x: 2.06, z: -2.97, yaw: 2.4, pitch: -1.57, duration: 0, translate: "center" },
		{ duration: 1.64 },
		{ yaw: 0.35, duration: 0.5, translate: "center" },
		{ yaw: -0.25, duration: 1, translate: "center" },
		{ yaw: -1.4, pitch: 0.08, duration: 1.2, translate: "center" },
		{ yaw: 0.29, duration: 0.6, translate: "center" },
		{ yaw: 1.32, pitch: 0.2, duration: 1.4, translate: "center" },
		{ yaw: -0.12, pitch: -0.05, duration: 1.1, translate: "center" },
		{ duration: 1 },
		{ yaw: 1.3, pitch: 0.16, duration: 0.5, translate: "right" },
		{ duration: 5 }
	])
	.withOnStartListener(function() {
		deathBasementMusic.play();
	})
	.withOnFinishListener(function() {
		deathBasementMusic.pause();
	})
	.withOnFrameListener(function(task, frame, gen) {
		function addBlind(duration) {
			Entity.addEffect(deathBasementAnimation.entity, Native.PotionEffect.blindness, 0, (duration + 1) * 20, false, false);
		}
		switch(frame) {
			case 4:
				if(gen == 0) addBlind(0.1);
				break;
			case 6:
				if(gen == 30) addBlind(0.6);
				break;
			case 11:
				if(gen == 20) addBlind(0.1);
				break;
		}
	})
	.withFrom(17.48, 10.61, 15.82, 0, -0.67);

var deathBasementMusic = new Music("death1.mp3");
deathBasementMusic.setLooping(true);

Callback.addCallback("LevelLoaded", function() {
	deathBasementAnimation.withEntity(Player.get());
});
