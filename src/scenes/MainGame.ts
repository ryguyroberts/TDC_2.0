import Phaser from "phaser";

export class MainGame extends Phaser.Scene {
  constructor() {
    super('main_game');
  };

  preload() {
    console.log("made it to game");
  };

  create() {
    
    //Tileset

    const map = this.make.tilemap({key: 'tilemap'});
    const tileset = map.addTilesetImage('Grass Tileset', 'tiles', 32, 32);

    // Null check
    if (!tileset) {
      throw new Error("Failed to load tileset");
    ;}

    map.createLayer('Ground', tileset);
    map.createLayer('Path', tileset);
    map.createLayer('Walls', tileset);
    
  };



};


 // Create tile set
//  const map = this.make.tilemap({ key: 'dungeon'})
//  const tileset = map.addTilesetImage('Dungeon Prison', 'tiles', 16, 16, 1, 2)

//  map.createLayer('Ground', tileset);
//  const wallsLayer = map.createLayer('Walls', tileset)
//  wallsLayer.setCollisionByProperty({ collides: true})