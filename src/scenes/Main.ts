import Phaser from "phaser";

export class Main extends Phaser.Scene {
  constructor() {
    super('main');
  };

  preload() {
    console.log("made it to main");
  }

};


