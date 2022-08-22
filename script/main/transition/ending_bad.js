var endAnimation = new Transition()
	.withFrames([
		{ duration: 5 },
		{ y: -25, duration: .10}
	])
	.withOnStartListener(function() {
		deathBasementMusic.play();
	})
	.withOnFinishListener(function() {
		deathBasementMusic.pause();
	})
	.withOnFrameListener(function(task, frame, gen) {
		function addBlind(duration) {
			Entity.addEffect(endAnimation.entity, Native.PotionEffect.blindness, 0, (duration + 1) * 20, false, false);
		}
		switch(frame) {
			case 1:
				if(gen == 0) addBlind(15);
				break;
		}
	})
	.withFrom(20.5, 7.62, -71.76, 0, 0);

var deathBasementMusic = new Music("death1.mp3");
deathBasementMusic.setLooping(true);

Callback.addCallback("LevelLoaded", function() {
	endAnimation.withEntity(Player.get());
});
