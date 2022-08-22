var wakeUpAnimation = new Transition()
    .withFrames([
    	{ duration: 0.9 },
    	{ yaw: 0.89, pitch: -0.33, duration: 1.2, translate : "left" },
    	{ duration: 0.1 },
    	{ yaw: -2, pitch: 0.22, duration: 3, translate: "center" },
    	{ duration: 0.1 },
    	{ yaw: 2.65, pitch: -0.47, duration: 4, translate: "right" },
    	{ duration: 0.1 },
    	{ x: -0.2, y: 0.15, z: 0.6, yaw: -1.06, pitch: -0.61, duration: 3, translate: "left" },
    	{ x: -0.35, y: 0.07, yaw: 1.1, pitch: -1.02, duration: 2, translate: "center" },
    	{ y: 0.12, pitch: 1.35, duration: 2.5, translate: "left" }
    ])
    .withOnStartListener(function() {
    	function addBlind(duration) {
    		Entity.addEffect(wakeUpAnimation.entity, Native.PotionEffect.blindness, 0, (duration + 1) * 20, false, false);
    	}
    	wakeUpMusic.play();
    	addBlind(0.7);
    })
    .withOnFinishListener(function() {
    	wakeUpMusic.pause();
    })
    .withFrom(28.5, 14.28, 24.5, 0, 0.87);

var wakeUpMusic = new Music("noise.mp3");
wakeUpMusic.setLooping(true);

Callback.addCallback("LevelLoaded", function() {
	wakeUpAnimation.withEntity(Player.get()).start();
});
