var ground;
var player;

class GameWindow extends Phaser.Scene
{

    

    preload ()
    {

        this.load.image('ground', 'assets/ground.png');
        this.load.image('player', 'assets/player.png');

    }

    create ()
    {

        ground = this.add.image(400, 300, 'ground');
        player = new Player(this, 400, 300, 'player');

        player.initialize();

    }

    update ()
    {

        player.update();

    }
}
