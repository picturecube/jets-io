class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, player) {

        super(scene, player.x, player.y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setVisible(false);

    }

    fire(x, y, playerX, playerY) {

        this.setVisible(true);

        this.moveTo(this, x, y, 150);

        if (sqrt((playerX - x) ** 2 + (playerY - y) ** 2) < 500) {

            this.destroy();

        };

    };

};