import { djs } from "../dolmenjs.js";

export class djs_main_loop {
    timeInterval: number;
    running: boolean;
    callbacks: any;

    constructor() {
        console.log("djs_main_loop:constructor");

        this.callbacks = {};
        this.timeInterval = 10; // Interval in milliseconds (1 second)
        this.running = false; // Flag to track if the loop is running
        this.start();
    }

    add(name: string, callback: any) {
        if (!this.callbacks[name]) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
    }

    start() {
        this.running = true;
        this.runLoop();
    }

    runLoop() {
        if (!this.running) return;

        for (const name in this.callbacks) {
            const callbacks = this.callbacks[name];
            for (const callback of callbacks) {
                callback();
            }
        }

        setTimeout(() => {
            this.runLoop();
        }, this.timeInterval);
    }

    stop() {
        this.running = false;
    }

    destroy(name: string) {
        if (name in this.callbacks) {
            delete this.callbacks[name];
        }
    }
}
//EOF