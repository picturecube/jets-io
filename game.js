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

        this.load.image('ground', 'assets/ground.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('bounds', 'assets/bounds.png'); //preload assets

    };

    create () {

        ground = this.add.image(400, 300, 'ground'); //adds a ground first

        player = new Player(this, 400, 300, 'player'); //adds player

        this.physics.world.setBounds(-2100, -2200, 5000, 5000, true, true, true, true); //sets world bounds

        /*bounds = this.physics.add.staticGroup();

        leftBound = bounds.create(-20, 2500, 'bounds');
        rightBound = bounds.create(5020, 2500, 'bounds');
        topBound = bounds.create(2500, -20, 'bounds');
        bottomBound = bounds.create(2500, 5020, 'bounds');

        topBound.setAngle(90).refreshBody();
        bottomBound.setAngle(90).refreshBody();

        this.physics.add.collider(player, bounds);*/ //experimental bounds created manually but i am trying to use setBounds() instead

        this.cameras.main.setBackgroundColor('#2e2e2e'); //sets background color to a dark gray

        player.initialize(); //calls the player's initialize function

    };

    update () {

        player.update(); //calls the player's update function

    };
};
