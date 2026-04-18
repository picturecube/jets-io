class Launcher extends Phaser.GameObjects.Image {

    constructor(id, x, y, scene) {
        
        super(scene, x, y, 'launcher');

        this.scene = scene;

        this.scene.add.existing(this);

        this.id = id;
        this.missile;

    };

    update(player) {

        this.setRotation(Math.PI + Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y));

        this.fire(player.x, player.y, player);

    };

    fire(x, y, player) {

        if (this.missile.scene === undefined) {

            this.missile = new Bullet(this.scene, this);
        
        };

        missile.fire(player.x, player.y);

    };

};

export default Launcher;