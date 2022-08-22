IDRegistry.genItemID("coordsItem");
Item.createItem("coordsItem", "Координаты игрока", {name: "stick", meta: 0}, {});

Callback.addCallback("ItemUse", function(coords, item, block)
{
if(item.id == ItemID.coordsItem)
{
var PlayerPos = Player.getPosition();
Game.tipMessage("X: " + PlayerPos.x + ", Y: " + PlayerPos.y + ", Z: " + PlayerPos.z);
getRadiusForCoords(Player.get(), 28, 14, 24, 2);
}
});

IDRegistry.genItemID("AngleItem");
Item.createItem("AngleItem", "Угол обзора игрока", {name: "nether_star", meta: 0}, {});

Callback.addCallback("ItemUse", function(coords, item, block)
{
if(item.id == ItemID.AngleItem)
{
var PlayerAngle = Entity.getLookAngle(Player.get());
Game.tipMessage("Yaw: " + PlayerAngle.yaw + ", Pitch: " + PlayerAngle.pitch);
}
});

function getRadiusForCoords(rEnt, rX, rY, rZ, r)
{
	var rPos = Entity.getDistanceToCoords(rEnt, {x: rX, y: rY, z: rZ});
	if(rPos<=r)
	{
Game.message("Lul");
}}

IDRegistry.genItemID("Smoke");

Item.createItem("Smoke", "Дым", {name: "ender_pearl", meta: 0}, {});
 
 Callback.addCallback("ItemUse", function(coords, item, block)
{
if(item.id == ItemID.Smoke)
{
Debug.addParticle(coords.x, coords.y+1, coords.z, Native.ParticleType.cloud, 0, 0.2, 0, 0);
Debug.addParticle(coords.x, coords.y+1, coords.z, Native.ParticleType.cloud, 0, 0.2, 0, 2);
Debug.addParticle(coords.x, coords.y+1, coords.z, Native.ParticleType.cloud, 0, 0.2, 0, 3);
Debug.addParticle(coords.x, coords.y+1, coords.z, Native.ParticleType.cloud, 0, 0.2, 0, 4);
}
});
