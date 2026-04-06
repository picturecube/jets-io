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
        
        this.setVelocity(0, 0);
        
        
    };

    update() {

        this.changeXVel = 0
        this.changeYVel = 0

        if (this.cursors.up.isDown || this.WKey.isDown) {
            this.changeYVel = -0.01;
        };
        if (this.cursors.down.isDown || this.SKey.isDown) {
            this.changeYVel = 0.01;
        };
        if (this.cursors.left.isDown || this.AKey.isDown) {
            this.changeXVel = -0.01;
        };
        if (this.cursors.right.isDown || this.DKey.isDown) {
            this.changeXVel = 0.01;
        };

        this.setVelocity(this.changeXVel, this.changeYVel);

    };

}