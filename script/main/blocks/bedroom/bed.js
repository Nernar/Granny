IDRegistry.genBlockID("bedroomBed");
Block.createBlock("bedroomBed", [
	{ name: "Bedroom Bed", texture: [["house_fence", 0]], inCreative: IN_CREATIVE },
	{ name: "Blue Bedroom Bed", texture: [["house_fence", 0]], inCreative: IN_CREATIVE },
	{ name: "Bedroom Pink Bed", texture: [["house_floor", 0]], inCreative: IN_CREATIVE }
]);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomBed, 0, renderer);
var model = BlockRenderer.createModel();
model.addBox(-7/8, 11/16, -1/8, 1/8, 3/4, 7/8, "bedroom_bed", 2);
model.addBox(-7/8, 11/16, -9/8, 1/8, 3/4, -1/8, "bedroom_bed", 1);
model.addBox(-7/8, 11/16, -15/8, 1/8, 3/4, -9/8, "bedroom_bed", 0);
model.addBox(1/8, 11/16, -15/8, 3/8, 3/4, -9/8, "bedroom_bed", 3);
model.addBox(1/8, 11/16, -9/8, 3/8, 3/4, -3/8, "bedroom_bed", 4);
model.addBox(1/8, 11/16, -3/8, 3/8, 3/4, 3/8, "bedroom_bed", 4);
model.addBox(1/8, 11/16, 3/8, 3/8, 3/4, 7/8, "bedroom_bed", 5);
model.addBox(-3/4, 3/4, -7/4, 1/4, 7/8, -19/16, "bedroom_pillow", 0);
model.addBox(-1, 0, 7/8, -7/8, 3/8, 1, BlockID.bedroomBed, 0);
model.addBox(3/8, 0, 7/8, 1/2, 3/8, 1, BlockID.bedroomBed, 0);
model.addBox(3/8, 0, -2, 1/2, 3/8, -15/8, BlockID.bedroomBed, 0);
model.addBox(-1, 0, -2, -7/8, 3/8, -15/8, BlockID.bedroomBed, 0);
model.addBox(-1, 3/8, -2, 0, 11/16, -1, BlockID.bedroomBed, 0);
model.addBox(0, 3/8, -2, 1/2, 11/16, -1, BlockID.bedroomBed, 0);
model.addBox(-1, 3/8, -1, 0, 11/16, 0, BlockID.bedroomBed, 0);
model.addBox(-1, 3/8, 0, 0, 11/16, 1, BlockID.bedroomBed, 0);
model.addBox(0, 3/8, -1, 1/2, 11/16, 0, BlockID.bedroomBed, 0);
model.addBox(0, 3/8, 0, 1/2, 11/16, 1, BlockID.bedroomBed, 0);
renderer.addEntry(model);

Block.setShape(BlockID.bedroomBed, -1, 3/8, 1/2, 1, 3/4, 1);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomBed, 1, renderer);
var model = BlockRenderer.createModel();
model.addBox(7/8, 11/16, 5/8, 15/8, 3/4, 13/8, "blue_bedroom_bed", 0);
model.addBox(-1/8, 11/16, 5/8, 7/8, 3/4, 13/8, "blue_bedroom_bed", 1);
model.addBox(-7/8, 11/16, 5/8, -1/8, 3/4, 13/8, "blue_bedroom_bed", 2);
model.addBox(-7/8, 11/16, 13/8, -1/8, 3/4, 15/8, "blue_bedroom_bed", 5);
model.addBox(-1/8, 11/16, 13/8, 5/8, 3/4, 15/8, "blue_bedroom_bed", 4);
model.addBox(5/8, 11/16, 13/8, 15/8, 3/4, 15/8, "blue_bedroom_bed", 3);
model.addBox(19/16, 3/4, 3/4, 7/4, 7/8, 7/4, "bedroom_pillow", 1);
model.addBox(15/8, 0, 1/2, 2, 3/8, 5/8, BlockID.bedroomBed, 1);
model.addBox(15/8, 0, 15/8, 2, 3/8, 2, BlockID.bedroomBed, 1);
model.addBox(-1, 0, 15/8, -7/8, 3/8, 2, BlockID.bedroomBed, 1);
model.addBox(-1, 0, 1/2, -7/8, 3/8, 5/8, BlockID.bedroomBed, 1);
model.addBox(-1, 3/8, 1/2, 0, 11/16, 3/2, BlockID.bedroomBed, 1);
model.addBox(-1, 3/8, 3/2, 0, 11/16, 2, BlockID.bedroomBed, 1);
model.addBox(0, 3/8, 1/2, 1, 11/16, 3/2, BlockID.bedroomBed, 1);
model.addBox(1, 3/8, 1/2, 2, 11/16, 3/2, BlockID.bedroomBed, 1);
model.addBox(0, 3/8, 3/2, 1, 11/16, 2, BlockID.bedroomBed, 1);
model.addBox(1, 3/8, 3/2, 2, 11/16, 2, BlockID.bedroomBed, 1);
renderer.addEntry(model);

Block.setShape(BlockID.bedroomBed, 1/2, 3/8, -1, 1, 3/4, 1, 2);

var renderer = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bedroomBed, 2, renderer);
var model = BlockRenderer.createModel();
model.addBox(5/8, 11/16, -1/8, 13/8, 3/4, 7/8, "bedroom_pink_bed", 2);
model.addBox(5/8, 11/16, -9/8, 13/8, 3/4, -1/8, "bedroom_pink_bed", 1);
model.addBox(5/8, 11/16, -15/8, 13/8, 3/4, -9/8, "bedroom_pink_bed", 0);
model.addBox(13/8, 11/16, -1/8, 15/8, 3/4, 7/8, "bedroom_pink_bed", 5);
model.addBox(13/8, 11/16, -9/8, 15/8, 3/4, -1/8, "bedroom_pink_bed", 4);
model.addBox(13/8, 11/16, -15/8, 15/8, 3/4, -9/8, "bedroom_pink_bed", 3);
model.addBox(3/4, 3/4, -7/4, 7/4, 7/8, -19/16, "bedroom_pillow", 0);
model.addBox(15/8, 0, -2, 2, 3/8, -15/8, BlockID.bedroomBed, 2);
model.addBox(1/2, 0, -2, 5/8, 3/8, -15/8, BlockID.bedroomBed, 2);
model.addBox(1/2, 3/8, -2, 3/2, 11/16, -1, BlockID.bedroomBed, 2);
model.addBox(3/2, 3/8, -2, 2, 11/16, -1, BlockID.bedroomBed, 2);
model.addBox(1/2, 3/8, -1, 3/2, 11/16, 0, BlockID.bedroomBed, 2);
model.addBox(1/2, 3/8, 0, 3/2, 11/16, 1, BlockID.bedroomBed, 2);
model.addBox(3/2, 3/8, -1, 2, 11/16, 0, BlockID.bedroomBed, 2);
model.addBox(3/2, 3/8, 0, 2, 11/16, 1, BlockID.bedroomBed, 2);
model.addBox(1/2, 0, 7/8, 5/8, 3/8, 1, BlockID.bedroomBed, 2);
model.addBox(15/8, 0, 7/8, 2, 3/8, 1, BlockID.bedroomBed, 2);
renderer.addEntry(model);
