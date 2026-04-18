var ground;
var player;
var bullet;
var bullets;
var launcherSpawner;



class GameWindow extends Phaser.Scene
{

    

    preload() {

        this.load.image('ground', 'assets/ground.png'); // preload assets
        this.load.image('player', 'assets/player.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('launcher', 'assets/launcher.png');

        

    };

    create() {

        ground = this.add.image(400, 300, 'ground'); // adds a ground first
        
        player = new Player(this, 400, 300, 'player'); // adds player

        bullets = [new Bullet(this, player)]; // adds a bullet

        this.physics.world.setBounds(-2100, -2200, 5000, 5000, true, true, true, true); // sets world bounds

        this.cameras.main.setBackgroundColor('#2e2e2e'); // sets background color to a dark gray

        player.initialize(); // calls the player's initialize function
        
        import('./launcherSpawner.js').then(module => {

            launcherSpawner = module.launcherSpawner;

        });

    };

    update() {

        console.log('launcherSpawner:', launcherSpawner); // debug

        if (launcherSpawner != undefined) {
            
            launcherSpawner.spawn(this); // spawns launchers if the spawner has been imported
            
            launcherSpawner.launchers.forEach(launcher => launcher.update()); // calls the update function for each launcher in the spawner's array

        };
        bullets.forEach(bullet => bullet.update()); // calls the update function for each bullet in the array

        if (this.input.activePointer.isDown) { // if the pointer is down, fire the bullet

            this.input.activePointer.updateWorldPoint(this.cameras.main); // updates the world point of the pointer event to match the camera's position
    
                try {

                    bullets.at(-1).fire(this.input.activePointer.worldX, this.input.activePointer.worldY); // fires the last bullet in the array towards the pointer's world coordinates
        
                    bullets.push(new Bullet(this, player)); // adds a new bullet to the array
                    
                } catch {};
    
        }
        bullets = bullets.filter(bullet => bullet.scene !== undefined); // filters out inactive bullets from the array
        
        player.update(); // calls the player's update function

        

    };

};
