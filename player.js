class Player extends Phaser.Physics.Arcade.Image {

    constructor(scene, x, y, key) {

        super(scene, x, y, key);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.1);
        this.setInteractive();
        this.WKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.AKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.SKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.DKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.setCollideWorldBounds(true);
        this.setBounce(0);
        

    };

    initialize() {
        
        this.setVelocityY(-5);
        
        
    };

    update() {

        this.setX(this.x + this.xVel);
        this.setY(this.y + this.yVel);
        if (this.cursors.up.isDown || this.WKey.isDown) {
            this.setVelocityY(velocityY - 0.01);
        };
        if (this.cursors.down.isDown || this.SKey.isDown) {
            this.setVelocityY(velocityY + 0.01);
        };
        if (this.cursors.left.isDown || this.AKey.isDown) {
            this.setVelocityX(velocityX - 0.01);
        };
        if (this.cursors.right.isDown || this.DKey.isDown) {
            this.setVelocityX(velocityX + 0.01);
        };

    };

}