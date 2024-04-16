import { Game, Types } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { Main } from "./scenes/Main";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
      Preloader,
      Main
    ]
};

export default new Game(config);
