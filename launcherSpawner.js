import { Launcher } from "./launcher.js";

class LauncherSpawner {

    constructor() {
        
        this.launchers = []

    };

    spawn(scene) {

        if (this.launchers.length <= 80) {

            this.launchers.push(new Launcher(this.launchers.length - 1, (Math.random() * 1000 - 500), (Math.random() * 1000 - 500), scene))

        };

    };

};

export const launcherSpawner =  new LauncherSpawner();