import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  };

  // Load Assets
  preload() {

  // Tileset
  this.load.image('grass_tiles', 'map/grass_tileset.png')
  this.load.image('anim_water_tiles', 'map/anim_water_tileset.png')
  // this.load.image(())

  this.load.tilemapTiledJSON('tilemap', 'map/mapV1.1.json');
  };
  // Once loaded transition to main scene
  
  create() {
    this.scene.start('main_game');
  };
};


