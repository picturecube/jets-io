class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, player) {

        super(scene, player.x, player.y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setVisible(false);

    }

    fire(x, y, playerX, playerY) {

        this.setVisible(true);

        this.setAngle(Math.atan((playerY - y) / (playerX - x)) * 180 / Math.PI); // makes the bullet face the mouse using trigonometry

        this.setVelocityForward(150); // sets the velocity to 150 pixels per second in the direction the player is facing

        if (sqrt((playerX - x) ** 2 + (playerY - y) ** 2) < 500) {

            this.destroy();

        };

    };

    setVelocityForward(vel) {

        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation)); // sets the velocity to the forward velocity in the direction the player is facing using trigonometry

        this.velocityForward = vel; // stores the forward velocity in a variable for later use

    };

};