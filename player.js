class Player extends Phaser.Physics.Arcade.Image {

    constructor(scene, x, y, key) {

        super(scene, x, y, key);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.05);
        this.setInteractive();
        this.WKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.AKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.SKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.DKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.setCollideWorldBounds(true);
        this.setBounce(0);
        this.scene = scene;
        
    };

    initialize() {
        
        this.setVelocity(0, 0);
        this.velocityForward = 0;
        
    };

    setVelocityForward(vel) {
        this.setVelocity(vel * Math.cos(this.rotation), vel * Math.sin(this.rotation));
        this.velocityForward = vel;
    }

    update() {

        if (this.cursors.up.isDown || this.WKey.isDown) {
            this.setVelocityForward(this.velocityForward - 1);
        };
        if (this.cursors.down.isDown || this.SKey.isDown) {
            this.setVelocityForward(this.velocityForward + 1);
        };
        if (this.cursors.left.isDown || this.AKey.isDown) {
            this.setAngle(this.angle - 5);
        };
        if (this.cursors.right.isDown || this.DKey.isDown) {
            this.setAngle(this.angle + 5);
        };

        this.setVelocity(0, 0);
        this.setVelocityForward(this.velocityForward);
        this.scene.cameras.main.setScroll(this.x - 400, this.y - 300);

    };

}