import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  };

  // Load Assets
  preload() {

  };
  // Once loaded transition to main scene
  
  create() {
    this.scene.start('main');
  };
};


