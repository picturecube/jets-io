class Player extends Phaser.Physics.Arcade.Image {

    constructor(scene, x, y, key) {

        super(scene, x, y, key);

        scene.add.existing(this); //adds to scene
        scene.physics.add.existing(this); // adds physics body

        this.setScale(0.05); //makes the big image smaller

        this.setInteractive(); // makes keyboard input work

        this.WKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W); //adds input keys for WASD
        this.AKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.SKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.DKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = scene.input.keyboard.createCursorKeys(); //adds arrow keys
        
        this.setCollideWorldBounds(true); //makes it so the player can't leave the world bounds

        this.setBounce(0); //remove bouncing on world bounds

        this.scene = scene; //stores the scene in a variable for later use
        
    };

    initialize() {
        
        this.setVelocity(0, 0); //sets initial velocity to 0
        this.velocityForward = 0; //stores the forward velocity in a variable for later use
        
    };

    setVelocityForward(vel) {
        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation)); //sets the velocity to the forward velocity in the direction the player is facing using trigonometry
        this.velocityForward = vel; //stores the forward velocity in a variable for later use
    }

    update() {

        if (this.cursors.up.isDown || this.WKey.isDown) { //changes velocity accordingly to the input keys

            this.setVelocityForward(this.velocityForward - 1); 

        };

        if (this.cursors.down.isDown || this.SKey.isDown) {

            this.setVelocityForward(this.velocityForward + 1);

        };

        if (this.cursors.left.isDown || this.AKey.isDown) {

            this.setAngle(this.angle + 5);

        };

        if (this.cursors.right.isDown || this.DKey.isDown) {

            this.setAngle(this.angle - 5);

        };

        this.setVelocity(0, 0); //resets velocity to 0 before applying the forward velocity to prevent diagonal movement if the player turns while moving forward
        this.setVelocityForward(this.velocityForward);

        this.scene.cameras.main.setScroll(this.x - 400, this.y - 300); //moves the camera to follow the player
        this.scene.cameras.main.setAngle(90 - this.angle); //rotates the camera to match the player's rotation

    };

}