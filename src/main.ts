import { Game, Types } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { MainGame } from "./scenes/MainGame";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 924,
    height: 1056,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
      Preloader,
      MainGame
    ]
};

export default new Game(config);
