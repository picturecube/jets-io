var ground;
var player;

class GameWindow extends Phaser.Scene
{

    

    preload () {

        this.load.image('ground', 'assets/ground.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('bounds', 'assets/bounds.png');

    };

    create () {

        this.ground = this.add.image(400, 300, 'ground');
        this.player = new Player(this, 400, 300, 'player');
        this.bounds = this.physics.add.staticImage(400, 300, 'bounds');
        this.bounds.setScale(10);
        this.physics.add.collider(this.player, this.bounds);

        this.cameras.main.setBackgroundColor('#2e2e2e');

        this.player.initialize();

    };

    update () {

        this.player.update();

    };
};
