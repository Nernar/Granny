var bedSnd = new Music("fromBed.mp3");

var BedHide = {
    window: new UI.Window({
        location: {
			x: 845,
			y: 30,
			width: 135,
			height: 135
		},
        elements: {
			"hide": {
				type: "button",
				x: -15,
				y: 65,
				bitmap: "down",
				scale: 45,
				clicker: {
					onClick: function(container) {
						Entity.setMobile(Player.get(), false);
					    Player.setPosition(28.5,13.32,25.21);
						Entity.setLookAngle(Player.get(), -4.7, 0);
						var content = container.getGuiContent();
						content.elements["unhide"].y += 1000;
						content.elements["hide"].y -= 1000;
						bedSnd.play();
					}
				}
			},
			"unhide": {
				type: "button",
				x: -15,
				y: -940,
				bitmap: "up",
				scale: 45,
				clicker: {
					onClick: function(container) {
						Entity.setMobile(Player.get(), true);
						Player.setPosition(27.43, 14.62, 25.22);
						Entity.setLookAngle(Player.get(), -4.7, 0);
						var content = container.getGuiContent();
						content.elements["unhide"].y -= 1000;
						content.elements["hide"].y += 1000;
						bedSnd.play();
					}
				}
			}
		},
		drawing: [{
			type: "background",
			color: android.graphics.Color.TRANSPARENT
		}, {
			type: "bitmap",
			bitmap: "bed",
			x: 20,
			y: 0,
			scale: 8
		}]
	}),
	container: new UI.Container(),
	open: function() {
		this.container.openAs(this.window);
	},
	close: function() {
		this.container.close();
		this.container = new UI.Container();
	}
};
BedHide.window.setAsGameOverlay(true);

Callback.addCallback("NativeGuiChanged", function(screenName) {
    if (screenName == "in_game_play_screen") BedHide.open();
	else BedHide.close();
});
