import MainScene from "./MainScene.js";

const config = {
    width:512,
    height:512,
    backgroundColor: '#999999',
    type: Phaser.AUTO,
    parent: 'resume-game',
    scene:[MainScene],
    scale: {
        zoom:2
    },
    physics: {
        default: 'matter',
        matter: {
            debug:false,
            gravity:{y:0},
        }
    },
    plugins: {
        scene:[
            {
                //HERE
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision',
            }
        ]
    }
}

new Phaser.Game(config);