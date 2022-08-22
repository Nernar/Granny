Callback.addCallback("LevelLoaded",function() {
	/*
	што вы делаеце в моем shitкоде? Вы хотите кушац?
	*/
	// "ремонт" проводки
	World.setBlock(21, 9, 13, BlockID.lamps);
	oneLamp = false;
	twoLamp = false;
	World.setBlock(19, 6, 22, BlockID.elbox);
	// сброс всех переменных (хотя нах, иннер все равно вылетает xD)
	falledShield = false;
	// удаление всех белых мишек
	var allEnt = Entity.getAll();
	for (var i in allEnt) {
		if(Entity.getType(allEnt[i]) == 28) {
			Entity.remove(allEnt[i]);
			// спавн крышки
			Entity.spawnCustom("shield", 19, 6, 22);
			Entity.setPosition(ShieldAnim.entity, 19, 6, 22);
		}
	}
});

