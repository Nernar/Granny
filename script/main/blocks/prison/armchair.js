IDRegistry.genBlockID("handicappedArmchair");
Block.createBlock("handicappedArmchair", [
	{ name: "Handicapped Armchair", texture: [["cauldron_inner", 0]], inCreative: IN_CREATIVE }
]);

Block.setShape(BlockID.handicappedArmchair, 0, 0, 0, 7/8, 5/8, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.handicappedArmchair, -1, renderer);
var model = BlockRenderer.createModel();
model.addBox(3/16, 9/16, 3/16, 13/16, 5/8, 3/4, "handicapped_armchair", 0);
model.addBox(9/64, 1/16, 35/64, 11/64, 13/16, 37/64, "intensive_void", 0);
model.addBox(11/64, 29/64, 3/16, 9/64, 27/64, 15/16, "intensive_void", 0);
model.addBox(3/16, 9/16, 1/8, 5/16, 3/4, 3/16, "handicapped_armchair", 0);
model.addBox(11/16, 9/16, 1/8, 13/16, 3/4, 3/16, "handicapped_armchair", 0);
model.addBox(53/64, 1/16, 35/64, 55/64, 13/16, 37/64, "intensive_void", 0);
model.addBox(55/64, 29/64, 3/16, 53/64, 27/64, 15/16, "intensive_void", 0);
model.addBox(53/64, 29/64, 35/64, 11/64, 27/64, 19/32, "intensive_void", 0);
model.addBox(3/16, 3/4, 1/8, 13/16, 23/16, 3/16, "handicapped_armchair", 0);
model.addBox(9/16, 1/16, 3/4, 3/4, 9/16, 13/16, "handicapped_armchair", 0);
model.addBox(1/4, 1/16, 3/4, 7/16, 9/16, 13/16, "handicapped_armchair", 0);
model.addBox(9/16, 1/16, 13/16, 3/4, 1/8, 1, "handicapped_armchair", 0);
model.addBox(1/4, 1/16, 13/16, 7/16, 1/8, 1, "handicapped_armchair", 0);
model.addBox(3/4, 13/16, 3/16, 13/16, 7/8, 5/8, "handicapped_armchair", 0);
model.addBox(3/16, 13/16, 3/16, 1/4, 7/8, 5/8, "handicapped_armchair", 0);
model.addBox(3/16, 5/8, 7/16, 1/4, 13/16, 1/2, "handicapped_armchair", 0);
model.addBox(3/4, 5/8, 7/16, 13/16, 13/16, 1/2, "handicapped_armchair", 0);
model.addBox(3/4, 1/2, 1/16, 13/16, 9/16, 1/8, "handicapped_armchair", 0);
model.addBox(3/4, 7/16, 0, 13/16, 1/2, 1/16, "handicapped_armchair", 0);
model.addBox(3/4, 3/8, -1/16, 13/16, 7/16, 0, "handicapped_armchair", 0);
model.addBox(3/4, 5/16, -1/8, 13/16, 3/8, -1/16, "handicapped_armchair", 0);
model.addBox(3/4, 1/4, -3/16, 13/16, 5/16, -1/8, "handicapped_armchair", 0);
model.addBox(49/64, 1/16, -13/64, 25/32, 3/16, -11/64, "intensive_void", 0);
model.addBox(49/64, 7/64, -1/4, 25/32, 9/64, -1/8, "intensive_void", 0);
model.addBox(1/8, 1/2, 1/16, 3/16, 9/16, 1/8, "handicapped_armchair", 0);
model.addBox(1/8, 7/16, 0, 3/16, 1/2, 1/16, "handicapped_armchair", 0);
model.addBox(1/8, 3/8, -1/16, 3/16, 7/16, 0, "handicapped_armchair", 0);
model.addBox(1/8, 5/16, -1/8, 3/16, 3/8, -1/16, "handicapped_armchair", 0);
model.addBox(1/8, 1/4, -3/16, 3/16, 5/16, -1/8, "handicapped_armchair", 0);
model.addBox(9/64, 1/16, -13/64, 5/32, 3/16, -11/64, "intensive_void", 0);
model.addBox(9/64, 7/64, -1/4, 5/32, 9/64, -1/8, "intensive_void", 0);
model.addBox(9/64, 7/64, -13/64, 25/32, 9/64, -11/64, "intensive_void", 0);
model.addBox(13/16, 1/16, 7/16, 7/8, 1/8, 11/16, "house_metal", 0);
model.addBox(13/16, 3/4, 7/16, 7/8, 13/16, 11/16, "house_metal", 0);
model.addBox(13/16, 11/16, 5/16, 7/8, 3/4, 7/16, "house_metal", 0);
model.addBox(13/16, 11/16, 11/16, 7/8, 3/4, 13/16, "house_metal", 0);
model.addBox(13/16, 1/8, 11/16, 7/8, 3/16, 13/16, "house_metal", 0);
model.addBox(13/16, 1/8, 5/16, 7/8, 3/16, 7/16, "house_metal", 0);
model.addBox(13/16, 3/16, 1/4, 7/8, 5/16, 5/16, "house_metal", 0);
model.addBox(13/16, 3/16, 13/16, 7/8, 5/16, 7/8, "house_metal", 0);
model.addBox(13/16, 9/16, 13/16, 7/8, 11/16, 7/8, "house_metal", 0);
model.addBox(13/16, 9/16, 1/4, 7/8, 11/16, 5/16, "house_metal", 0);
model.addBox(13/16, 5/16, 3/16, 7/8, 9/16, 1/4, "house_metal", 0);
model.addBox(13/16, 5/16, 7/8, 7/8, 9/16, 15/16, "house_metal", 0);
model.addBox(1/8, 1/16, 7/16, 3/16, 1/8, 11/16, "house_metal", 0);
model.addBox(1/8, 3/4, 7/16, 3/16, 13/16, 11/16, "house_metal", 0);
model.addBox(1/8, 11/16, 5/16, 3/16, 3/4, 7/16, "house_metal", 0);
model.addBox(1/8, 11/16, 11/16, 3/16, 3/4, 13/16, "house_metal", 0);
model.addBox(1/8, 1/8, 11/16, 3/16, 3/16, 13/16, "house_metal", 0);
model.addBox(1/8, 1/8, 5/16, 3/16, 3/16, 7/16, "house_metal", 0);
model.addBox(1/8, 3/16, 1/4, 3/16, 5/16, 5/16, "house_metal", 0);
model.addBox(1/8, 3/16, 13/16, 3/16, 5/16, 7/8, "house_metal", 0);
model.addBox(1/8, 9/16, 13/16, 3/16, 11/16, 7/8, "house_metal", 0);
model.addBox(1/8, 9/16, 1/4, 3/16, 11/16, 5/16, "house_metal", 0);
model.addBox(1/8, 5/16, 3/16, 3/16, 9/16, 1/4, "house_metal", 0);
model.addBox(1/8, 5/16, 7/8, 3/16, 9/16, 15/16, "house_metal", 0);
model.addBox(1/8, 0, 7/16, 3/16, 1/16, 11/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/16, 11/16, 3/16, 1/8, 13/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/16, 5/16, 3/16, 1/8, 7/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/8, 1/4, 3/16, 3/16, 5/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/8, 13/16, 3/16, 3/16, 7/8, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 3/16, 7/8, 3/16, 5/16, 15/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 3/16, 3/16, 3/16, 5/16, 1/4, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 5/16, 1/8, 3/16, 9/16, 3/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 5/16, 15/16, 3/16, 9/16, 1, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 9/16, 3/16, 3/16, 11/16, 1/4, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 9/16, 7/8, 3/16, 11/16, 15/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 13/16, 7/16, 3/16, 7/8, 11/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 3/4, 11/16, 3/16, 13/16, 13/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 3/4, 5/16, 3/16, 13/16, 7/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 11/16, 1/4, 3/16, 3/4, 5/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 11/16, 13/16, 3/16, 3/4, 7/8, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 0, 7/16, 7/8, 1/16, 11/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 1/16, 11/16, 7/8, 1/8, 13/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 1/16, 5/16, 7/8, 1/8, 7/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 1/8, 1/4, 7/8, 3/16, 5/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 1/8, 13/16, 7/8, 3/16, 7/8, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 3/16, 7/8, 7/8, 5/16, 15/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 3/16, 3/16, 7/8, 5/16, 1/4, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 5/16, 1/8, 7/8, 9/16, 3/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 5/16, 15/16, 7/8, 9/16, 1, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 9/16, 3/16, 7/8, 11/16, 1/4, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 9/16, 7/8, 7/8, 11/16, 15/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 13/16, 7/16, 7/8, 7/8, 11/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 3/4, 11/16, 7/8, 13/16, 13/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 3/4, 5/16, 7/8, 13/16, 7/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 11/16, 1/4, 7/8, 3/4, 5/16, BlockID.handicappedArmchair, 0);
model.addBox(13/16, 11/16, 13/16, 7/8, 3/4, 7/8, BlockID.handicappedArmchair, 0);
model.addBox(3/4, 3/16, -1/4, 13/16, 1/4, -1/8, BlockID.handicappedArmchair, 0);
model.addBox(3/4, 0, -1/4, 13/16, 1/16, -1/8, BlockID.handicappedArmchair, 0);
model.addBox(3/4, 1/16, -5/16, 13/16, 3/16, -1/4, BlockID.handicappedArmchair, 0);
model.addBox(3/4, 1/16, -1/8, 13/16, 3/16, -1/16, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 3/16, -1/4, 3/16, 1/4, -1/8, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 0, -1/4, 3/16, 1/16, -1/8, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/16, -5/16, 3/16, 3/16, -1/4, BlockID.handicappedArmchair, 0);
model.addBox(1/8, 1/16, -1/8, 3/16, 3/16, -1/16, BlockID.handicappedArmchair, 0);
renderer.addEntry(model);
