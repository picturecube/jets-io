var ground;
var player;
var bullet;
var bullets;

class GameWindow extends Phaser.Scene
{

    

    preload () {

        this.load.image('ground', 'assets/ground.png'); // preload assets
        this.load.image('player', 'assets/player.png');
        this.load.image('bullet', 'assets/bullet.png');

    };

    create () {

        ground = this.add.image(400, 300, 'ground'); // adds a ground first

        
        player = new Player(this, 400, 300, 'player'); // adds player

        bullets = [new Bullet(this, player)]; // adds a bullet

        this.physics.world.setBounds(-2100, -2200, 5000, 5000, true, true, true, true); // sets world bounds

        this.cameras.main.setBackgroundColor('#2e2e2e'); // sets background color to a dark gray

        player.initialize(); // calls the player's initialize function

        this.input.on('pointerdown', function(pointer) { // if the pointer is down, fire the bullet

            bullets.at(-1).fire(pointer.worldX, pointer.worldY, player.x, player.y); // fires the last bullet in the array towards the pointer's world coordinates

            bullets.filter(bullet => bullet.active); // filters out inactive bullets from the array
            bullets.push(new Bullet(this, player)); // adds a new bullet to the array

        }, this);

    };

    update () {

        player.update(); // calls the player's update function

        

    };

};
