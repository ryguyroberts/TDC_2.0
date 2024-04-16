import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  };

  // Load Assets
  preload() {

  // Tileset
  this.load.image('tiles', 'map/grass_tileset.png')
  this.load.tilemapTiledJSON('tilemap', 'map/mapV1.json');
  };
  // Once loaded transition to main scene
  
  create() {
    this.scene.start('main_game');
  };
};


