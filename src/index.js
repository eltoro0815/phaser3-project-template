import Phaser from 'phaser';
import Game from './scenes/Game';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1300,
    height: 900,
    scene: Game
};

const game = new Phaser.Game(config);
