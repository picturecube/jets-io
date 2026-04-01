class Player extends Phaser.GameObjects.Image {

    constructor(scene, x, y, key) {

        super(scene, x, y, key);
        scene.add.existing(this);
        this.setScale(0.1);
        this.yVel = 0;
        this.xVel = 0;
        this.setInteractive();
        this.WKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.AKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.SKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.DKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = scene.input.keyboard.createCursorKeys();
        

    };

    initialize() {
        
        this.yVel = 5;
        
        
    };

    update() {

        this.setX(this.x + this.xVel);
        this.setY(this.y + this.yVel);
        if (this.cursors.up.isDown || this.WKey.isDown) {
            this.yVel += -0.1;
        };
        if (this.cursors.down.isDown || this.SKey.isDown) {
            this.yVel += 0.1;
        };
        if (this.cursors.left.isDown || this.AKey.isDown) {
            this.xVel += -0.1;
        };
        if (this.cursors.right.isDown || this.DKey.isDown) {
            this.xVel += 0.1;
        };

    };

}