var deathGuillotineAnimation = new Transition()
	.withFrames([
		{ duration: 1},
		{ duration: 2, yaw: -0.4, pitch: 0.57, translate: "center"},
		{ duration: 2, yaw: 0.8, pitch: 0.43, translate: "center"},
		{ duration: 2.7, yaw: -1.4, pitch: 0.1, translate: "center"},
		{ duration: 0.8, yaw: 1.4, pitch: -1.4, translate: "right"},
		{ duration: 0.6, yaw: -0.3, pitch: 0.1, translate: "left"},
		{ duration: 1.5}
	])
	.withOnStartListener(function() {
		deathBasementMusic.play();
	})
	.withOnFinishListener(function() {
		deathBasementMusic.pause();
	})
	.withFrom(32.1, 8.85, 29.5, -1.6, -1.4);

var deathBasementMusic = new Music("death1.mp3");
deathBasementMusic.setLooping(true);

Callback.addCallback("LevelLoaded", function() {
	deathGuillotineAnimation.withEntity(Player.get());
});

Callback.addCallback("ItemUse", function(coords, item, block) {
	if (block.id == BlockID.guillotine) {
		deathGuillotineAnimation.start();
	}
});

