var core = this;
var matchParent = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);

var DeveloperOptions = {
	context: UI.getContext(),
	run: function(code) {
		this.context.runOnUiThread(function() {
			try {
				code();
			} catch(e) {
				alert(e);
			}
		});
	},
	alert: function(name, message, buttons, listeners, view, menu, items, itemsClick, multi, multiCheck, multiClick) {
		var context = this.context;
		this.run(function() {
			var dialog = new android.app.AlertDialog.Builder(context, 16974126);
			if(name != null) dialog.setTitle(name);
			if(message != null) dialog.setMessage(message);
			if(items != null) dialog.setItems(items, itemsClick ? function(interface, item) {
				DeveloperOptions.run(function() {
					itemsClick(interface, item);
				});
			} : null);
			if(multi != null) dialog.setMultiChoiceItems(multi, multiCheck ? multiCheck : null, multiClick ? function(interface, item, active) {
				DeveloperOptions.run(function() {
					multiClick(interface, item, active);
				});
			} : null);
			if(buttons == null) buttons = [];
			if(listeners == null) listeners = [];
			if(buttons[0]) {
				dialog.setPositiveButton(buttons[0], function() {
					DeveloperOptions.run(function() {
						if(listeners[0]) listeners[0]();
					});
				});
			}
			if(buttons[1]) {
				dialog.setNeutralButton(buttons[1], function() {
					DeveloperOptions.run(function() {
						if(listeners[1]) listeners[1]();
					});
				});
			}
			if(buttons[2]) {
				dialog.setNegativeButton(buttons[2], function() {
					DeveloperOptions.run(function() {
						if(listeners[2]) listeners[2]();
					});
				});
			} else if(menu) {
				dialog.setNegativeButton("Return", function() {
					DeveloperOptions.run(function() {
						menu();
						if(listeners[2]) listeners[2]();
					});
				});
			}
			var build = dialog.create();
			build.show();
			return build;
		});
	}
};

function debugMenu(prop) {
	DeveloperOptions.alert(prop.title || "Menu", prop.message, prop.buttons ? prop.buttons.text : null, prop.buttons ? prop.buttons.click : null, prop.view, prop.menu, prop.items ? prop.items.text : null, prop.items ? prop.items.click : null, prop.multi ? prop.multi.text : null, prop.multi ? prop.multi.check : null, prop.multi ? prop.click : null);
}

var restX = 0, restY = 0, restZ = 0, restYaw = 0, restPitch = 0;

var DeveloperMenus = {
	main: function() {
		debugMenu({
			title: "Developer options",
			items: {
				text: ["Position", "Rotation", "Animations", "Weather"],
				click: function(a, b) {
					switch(b) {
						case 0:
							var position = Entity.getPosition(Player.get());
							for(count in position) position[count] = Math.round(position[count] * 100) / 100;
							Game.message(position.x + ", " + position.y + ", " + position.z);
							break;
						case 1:
							var rotate = Entity.getLookAngle(Player.get());
							for(count in rotate) rotate[count] = Math.round(rotate[count] * 100) / 100;
							Game.message(rotate.yaw + ", " + rotate.pitch);
							break;
						case 2:
							DeveloperMenus.anim();
							break;
						case 3:
							World.setWeather(0);
							Game.tipMessage("Weather cleared");
							DeveloperMenus.main();
							break;
					}
				}
			}
		});
	},
	anim: function() {
		var animations = [];
		for(count in core) {
			try {
				if(core[count].frames) animations.push(count);
			} catch(e) {}
		}
		debugMenu({
			title: "Animations list",
			menu: DeveloperMenus.main,
			items: {
				text: animations,
				click: function(a, b) {
					DeveloperMenus.info(animations[b]);
				}
			}
		});
	},
	entity: function(name) {
		var state = name;
		eval("name = " + name);
		var all = Entity.getAll();
		var entities = [];
		for(count in all) entities.push(Entity.getType(all[count]) + ": " + all[count]);
		debugMenu({
			title: "Animation entity",
			buttons: {
				text: [null, null, "Return"],
				click: [null, null, function() {
					DeveloperMenus.info(state);
				}]
			},
			items: {
				text: entities,
				click: function(a, b) {
					name.entity = all[b];
					DeveloperMenus.info(state);
				}
			}
		});
	},
	edit: function(name) {
		var state = name;
		eval("name = " + name);
		var del = false;
		if(name.frames.length > 0) del = true;
		debugMenu({
			title: "Animation frames",
			buttons: {
				text: [null, null, "Return"],
				click: [null, null, function() {
					DeveloperMenus.info(state);
				}]
			},
			items: {
				text: ["Manage", del ? "Delete" : null],
				click: function(a, b) {
					switch(b) {
						case 0:
							DeveloperMenus.fram(state);
							break;
						case 1:
							DeveloperMenus.del(state);
							break;
					}
				}
			}
		});
	},
	editor: function(name, frame) {
		var state = name;
		eval("name = " + name);
		var frames = name.frames;
		if(frames[frame] == null) {
			Game.message("Failed to get frame");
			DeveloperMenus.fram(state);
			return null;
		}
		var view = new android.widget.EditText(DeveloperOptions.context);
		view.setPadding(5, 5, 5, 5);
		view.setHint("x: 0, y: 0, z: 0, yaw: 0, pitch: 0");
		view.setText("x: " + frames[frame].x + ",\ny: " + frames[frame].y + ",\nz: " + frames[frame].z + ",\nyaw: " + frames[frame].yaw + ",\npitch: " + frames[frame].pitch);
		view.setLayoutParams(matchParent);
		debugMenu({
			title: "Edit frame " + frame,
			buttons: {
				text: ["Save", null, "Return"],
				click: [function() {
					try {
						eval("name.frames[frame] = {" + view.getText() + "}");
					} catch(e) {
						Game.message("Failed to editing frame");
					}
					DeveloperMenus.fram(state);
				}, null, function() {
					DeveloperMenus.fram(state);
				}]
			},
			view: view
		});
	},
	fram: function(name) {
		var state = name;
		eval("name = " + name);
		var frames = name.frames;
		var names = [];
		for(count in frames) names.push("Frame " + count + ", " + frames[count].duration + "s");
		debugMenu({
			title: "Manage frames",
			buttons: {
				text: ["Rest coords", null, "Return"],
				click: [function() {
					name.frames.push({x: restX, y: restY, z: restZ, yaw: restYaw, pitch: restPitch});
					DeveloperMenus.fram(state);
				}, null, function() {
					DeveloperMenus.edit(state);
				}]
			},
			items: {
				text: names,
				click: function(a, b) {
					DeveloperMenus.editor(state, b);
				}
			}
		});
	},
	del: function(name) {
		var state = name;
		eval("name = " + name);
		var frames = name.frames;
		var names = [];
		var checked = [];
		for(count in frames) {
			names.push("Frame " + count + ", " + frames[count].duration + " sec");
			checked.push(false);
		}
		debugMenu({
			title: "Delete frames",
			buttons: {
				text: ["Delete", null, "Return"],
				click: [function() {
					for(current in checked) {
						if(checked[current]) {
							name.frames.splice(current, 1);
							current--;
						}
					}
					DeveloperMenus.del(state);
				}, null, function() {
					DeveloperMenus.edit(state);
				}]
			},
			multi: {
				text: names,
				check: checked,
				click: function(a, b, c) {
					checked[b] = c;
				}
			}
		});
	},
	copyable: function(name, frame) {
		var state = name;
		eval("name = " + name);
		var frames = name.frames;
		if(frames[frame] == null) {
			Game.message("Failed to get frame");
			DeveloperMenus.info(state);
			return null;
		}
		var view = new android.widget.TextView(DeveloperOptions.context);
		view.setPadding(5, 5, 5, 5);
		view.setLayoutParams(matchParent);
		var text = "";
		for(count in name) {
			try {
				eval("text += \"" + name[count] + "\"");
			} catch(e) {}
		}
		view.setTextIsSelectable(true);
		view.setText(text);
		debugMenu({
			title: "Animation object",
			buttons: {
				text: [null, null, "Return"],
				click: [null, null, function() {
					DeveloperMenus.info(state);
				}]
			},
			view: view
		});
	},
	info: function(name) {
		var state = name;
		eval("name = " + name);
		var entity = name.entity;
		var frames = (name.frames ? name.frames.length : null);
		if(frames == null) {
			DeveloperMenus.anim();
			Game.tipMessage("Invalid animation");
			return null;
		}
		debugMenu({
			title: "Animation",
			menu: DeveloperMenus.anim,
			buttons: {
				text: ["Play"],
				click: [function() {
					if(entity != 0 && entity != null && entity != -1) name.start();
					else {
						Game.tipMessage("Entity is empty");
						DeveloperMenus.info(state);
					}
				}]
			},
			items: {
				text: ["Name: " + state, "Entity: " + (entity ? Entity.getType(name.entity) : "unknown"), "Frames: " + frames, "Get object"],
				click: function(a, b) {
					switch(b) {
						case 0:
							core.reserveAnimation = {};
							for(count in name) core.reserveAnimation[count] = name[count];
							Game.tipMessage("Copied to reserve slot");
							DeveloperMenus.anim();
							break;
						case 1:
							DeveloperMenus.entity(state);
							break;
						case 2:
							DeveloperMenus.edit(state);
							break;
						case 3:
							alert("Availabled soon");
							break;
						default:
							Game.tipMessage("Cannot edited");
							DeveloperMenus.info(state);
							break;
					}
				}
			}
		});
	}
};

Callback.addCallback("ItemUse", function(coords, item, block) {
	if(item.id == 272) DeveloperMenus.main();
});
