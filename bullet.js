class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, player) {

        super(scene, player.x, player.y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.05); // scales the bullet down to 5% of its original size

        this.setVisible(false);

        this.source = player;

        this.status = 'ready'; // sets the status of the bullet to "ready" to indicate that it is not currently being fired

    }

    fire(x, y) {

        this.setVisible(true);

        this.status = 'fired'; // sets the status of the bullet to "fired" to indicate that it is currently being fired

        this.rotation = Math.PI + Phaser.Math.Angle.Between(this.source.x, this.source.y, x, y); // makes the bullet face the mouse
        this.setVelocityForward(this.calculatePlayerVelocityRelativeToMouse() - 500); // sets the velocity to 500 pixels per second in the direction the player is facing

        this.firedX = this.source.x; // stores the player's x position in a variable for later use
        this.firedY = this.source.y; // stores the player's y position in a variable for later use

    };

    setVelocityForward(vel) {

        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation)); // sets the velocity to the forward velocity in the direction the player is facing using trigonometry

        this.velocityForward = vel; // stores the forward velocity in a variable for later use

    };

    calculatePlayerVelocityRelativeToMouse() {

        const playerVelocityX = this.source.body.velocity.x; // gets the player's x velocity
        const playerVelocityY = this.source.body.velocity.y; // gets the player's y velocity

        const angleToMouse = Phaser.Math.Angle.Between(this.source.x, this.source.y, this.scene.input.activePointer.x, this.scene.input.activePointer.x); // calculates the angle between the player and the mouse

        return 0 - (playerVelocityX * Math.cos(angleToMouse) + playerVelocityY * Math.sin(angleToMouse)); // calculates the player's velocity relative to the mouse using trigonometry

    }

    update() {
        
        if (this.status === "ready") { // if the status of the bullet is "ready", set the position of the bullet to the player's position and make it invisible

            this.setPosition(this.source.x, this.source.y);

        }

        if (this.status === "fired" && (Math.sqrt((this.firedX - this.x) ** 2 + (this.firedY - this.y) ** 2) > 500)) { // if the distance between the player and the mouse is greater than 500 pixels, destroy the bullet to prevent it from flying indefinitely

            this.destroy();

        };

    };

};