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
        this.load.image('bounds', 'assets/bounds.png');

    };

    create () {

        ground = this.add.image(400, 300, 'ground');

        player = new Player(this, 400, 300, 'player');

        this.physics.world.setBounds(0, 0, 5000, 5000);

        bounds = this.physics.add.staticGroup();

        leftBound = bounds.create(-20, 2500, 'bounds');
        rightBound = bounds.create(5020, 2500, 'bounds');
        topBound = bounds.create(2500, -20, 'bounds');
        bottomBound = bounds.create(2500, 5020, 'bounds');

        topBound.setAngle(90).refreshBody();
        bottomBound.setAngle(90).refreshBody();

        this.physics.add.collider(player, bounds);

        this.cameras.main.setBackgroundColor('#2e2e2e');

        player.initialize();

    };

    update () {

        player.update();

    };
};
