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

        this.bounds = this.physics.add.staticGroup();

        this.leftBound = this.bounds.create(-20, 2500, 'bounds');
        this.rightBound = this.bounds.create(5020, 2500, 'bounds');
        this.topBound = this.bounds.create(2500, -20, 'bounds');
        this.bottomBound = this.bounds.create(2500, 5020, 'bounds');

        this.topBound.setAngle(90).refreshBody();
        this.bottomBound.setAngle(90).refreshBody();

        this.physics.add.collider(this.player, this.bounds);

        this.cameras.main.setBackgroundColor('#2e2e2e');

        this.player.initialize();

    };

    update () {

        this.player.update();

    };
};
