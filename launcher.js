class Launcher extends Phaser.GameObjects.Image {

    constructor(id, x, y, scene) {
        
        super(scene, x, y, 'launcher');

        this.scene = scene; // sets the scene for later use

        this.setScale(0.1); // makes it actual size

        this.scene.add.existing(this);

        this.id = id; // stores the id
        this.missile; // declares a missile

    };

    update(player) {

        this.setRotation(Math.PI + Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y)); // sets the rotation of the launcher to point towards the player

        this.fire(player.x, player.y, player); // fires a missile towards the player

    };

    fire(x, y, player) {

        if (this.missile.scene === undefined) {

            this.missile = new Bullet(this.scene, this); // creates a new missile if there isn't one already
        
        };

        missile.fire(player.x, player.y); // fires the missile towards the player

    };

};

export default Launcher;