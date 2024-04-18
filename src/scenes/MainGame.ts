import Phaser, { Tilemaps } from "phaser";

export class MainGame extends Phaser.Scene {
  // Variable Declaration.




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
    
  };

  update() {

  };

};


 // Create tile set
//  const map = this.make.tilemap({ key: 'dungeon'})
//  const tileset = map.addTilesetImage('Dungeon Prison', 'tiles', 16, 16, 1, 2)

//  map.createLayer('Ground', tileset);
//  const wallsLayer = map.createLayer('Walls', tileset)
//  wallsLayer.setCollisionByProperty({ collides: true})