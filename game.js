var ground;
var player;
var bounds;
var leftBound;
var rightBound;
var topBound;
var bottomBound;

class GameWindow extends Phaser.Scene
{

    

    preload () {

        this.load.image('ground', 'assets/ground.png'); //preload assets
        this.load.image('player', 'assets/player.png');
        this.load.image('bullet', 'assets/bullet.png');

    };

    create () {

        ground = this.add.image(400, 300, 'ground'); //adds a ground first

        player = new Player(this, 400, 300, 'player'); //adds player

        this.physics.world.setBounds(-2100, -2200, 5000, 5000, true, true, true, true); //sets world bounds

        this.cameras.main.setBackgroundColor('#2e2e2e'); //sets background color to a dark gray

        player.initialize(); //calls the player's initialize function

    };

    update () {

        player.update(); //calls the player's update function

    };
};
