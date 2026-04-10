class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, player) {

        super(scene, player.x, player.y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setVisible(false);

        this.status = 'ready'; // sets the status of the bullet to "ready" to indicate that it is not currently being fired

    }

    fire(x, y, playerX, playerY) {

        this.setVisible(true);

        this.status = 'fired'; // sets the status of the bullet to "fired" to indicate that it is currently being fired

        this.rotation = Math.PI - Phaser.Math.Angle.Between(playerX, playerY, x, y); // makes the bullet face the mouse
        this.setVelocityForward(500); // sets the velocity to 500 pixels per second in the direction the player is facing

        this.sourceX = playerX; // stores the player's x position in a variable for later use
        this.sourceY = playerY; // stores the player's y position in a variable for later use

    };

    setVelocityForward(vel) {

        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation)); // sets the velocity to the forward velocity in the direction the player is facing using trigonometry

        this.velocityForward = vel; // stores the forward velocity in a variable for later use

    };

    update() {

        if (this.status === "fired" && (Math.sqrt((this.sourceX - x) ** 2 + (this.sourceY - y) ** 2) > 500)) { // if the distance between the player and the mouse is greater than 500 pixels, destroy the bullet to prevent it from flying indefinitely

            this.destroy();

        };

    };

};