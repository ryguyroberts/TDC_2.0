import Phaser, { Tilemaps } from "phaser";

export class MainGame extends Phaser.Scene {
  // Variable Declaration.
  // CS this find the type
  public animatedTiles: any[] = [];


  constructor() {
    super('main_game');
  };

  preload() {
    console.log("made it to game");
  };

  create() {
    
    //Tileset
    const map = this.make.tilemap({key: 'tilemap'});

    const tileset_grass = map.addTilesetImage('Grass Tileset', 'grass_tiles', 32, 32);
    const tileset_anim_water = map.addTilesetImage('Animated water tiles', 'anim_water_tiles', 32, 32);
    
    // Null check
    if (!tileset_grass || !tileset_anim_water) {
      throw new Error('Failed to load tileset(s)');
    };

    const all_tiles: Tilemaps.Tileset[] = [tileset_anim_water, tileset_grass];

    map.createLayer('Ground', all_tiles);
    map.createLayer('Path', all_tiles);
    map.createLayer('Walls', all_tiles);
    
    // Create Animated tile data
    this.handleCreateTilesData(map);

  };

  update() {

  };

  // Animate tile function in main game for now.

  handleCreateTilesData(map: Phaser.Tilemaps.Tilemap) {

    // Array of tiles
    this.animatedTiles = [];
    // Get ALL tiles First tileset in map
    const tileData = map.tilesets[0].tileData;

    console.log(tileData);

    // For each tile with animation. Only want tiles within our current scene.

    // 

  };


};


