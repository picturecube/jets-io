class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, player) {

        super(scene, player.x, player.y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.05); // scales the bullet down to 5% of its original size

        this.setVisible(false);

        this.scene = scene; // stores the scene in a variable for later use

        this.source = player;

        this.status = 'loading'; // sets the status of the bullet to "ready" to indicate that it is not currently being fired

        this.loadingTime = 0; // sets the loading time of the bullet

    }

    fire(x, y) {

        if (this.status === 'ready') {

            this.setVisible(true);
    
            this.status = 'fired'; // sets the status of the bullet to "fired" to indicate that it is currently being fired
    
            this.rotation = Math.PI + Phaser.Math.Angle.Between(this.x, this.y, x, y); // makes the bullet face the mouse
            this.setVelocityForward(0 - 500); // sets the velocity to 500 pixels per second in the direction the player is facing

            try {
            
            this.body.velocity.x += this.source.body.velocity.x; // adds the player's velocity to the bullet's velocity to make it more realistic
            this.body.velocity.y += this.source.body.velocity.y;

            } catch {

                throw new Error('The source of the bullet is not a dynamic GameObject!') // Does not change velocity if it is not a dynamic GameObject, such as a player

            }

            this.firedX = this.source.x; // stores the player's x position in a variable for later use
            this.firedY = this.source.y; // stores the player's y position in a variable for later use

        } else {

            throw new Error("Bullet is not ready to be fired yet!"); // throws an error if the bullet is not ready to be fired

        };

    };

    setVelocityForward(vel) {

        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation)); // sets the velocity to the forward velocity in the direction the player is facing using trigonometry

        this.velocityForward = vel; // stores the forward velocity in a variable for later use

    };

    update() {
        
        if (this.status === "ready") { // if the status of the bullet is "ready", set the position of the bullet to the player's position and make it invisible

            this.setPosition(this.source.x + this.source.velocityForward * Math.cos(this.rotation), this.source.y + this.source.velocityForward * Math.sin(this.rotation)); // sets the position of the bullet to in front of the player's position so it doesn't lag behind the player when firing
        }

        if (this.status === "fired" && (Math.sqrt((this.firedX - this.x) ** 2 + (this.firedY - this.y) ** 2) > 500)) { // if the distance between the player and the mouse is greater than 500 pixels, destroy the bullet to prevent it from flying indefinitely

            this.destroy();

        };

        if (this.status === 'loading') { // if the status of the bullet is "loading", increment the loading time and set the status to "ready" after 200 milliseconds
            
            this.loadingTime += this.scene.game.loop.delta; // increments the loading time by the time since the last frame

            if (this.loadingTime >= 50) { // if the loading time is greater than or equal to 200 milliseconds, set the status to "ready" and reset the loading time   

                this.status = 'ready'; // sets the status of the bullet to "ready" to indicate that it is not currently being fired

            }
        
        }

    };

};