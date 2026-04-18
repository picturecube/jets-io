import Launcher from "./launcher.js";

class LauncherSpawner {

    constructor() {
        
        this.launchers = []

    };

    spawn(scene) {

        if (this.launchers.length <= 80) {

            this.launchers.push(new Launcher(this.launchers.length - 1, (Math.random() * 10000 - 5000), (Math.random() * 10000 - 5000), scene))

        };

    };

};

export const launcherSpawner = new LauncherSpawner();