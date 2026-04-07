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

        ground = this.add.image(400, 300, 'ground');

        this.player = new Player(this, 400, 300, 'player');

        bounds = this.physics.add.staticGroup();

        leftBound = bounds.create(-20, 2500, 'bounds');
        rightBound = bounds.create(5020, 2500, 'bounds');
        topBound = bounds.create(2500, -20, 'bounds');
        bottomBound = bounds.create(2500, 5020, 'bounds');

        topBound.setAngle(90).refreshBody();
        bottomBound.setAngle(90).refreshBody();

        this.physics.add.collider(this.player, bounds);

        this.cameras.main.setBackgroundColor('#2e2e2e');

        this.player.initialize();

    };

    update () {

        this.player.update();

    };
};
