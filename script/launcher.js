try {
	ConfigureMultiplayer({
		isClientOnly: false
	});
	Launch();
} catch (e) {
	Logger.Log("Granny: Client outdated, modification is not supported! Please, upgrade Inner Core to Horizon.", "ERROR");
}
