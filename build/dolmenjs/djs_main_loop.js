export class djs_main_loop {
    constructor() {
        console.log("djs_main_loop:constructor");
        this.callbacks = {};
        this.timeInterval = 10;
        this.running = false;
        this.start();
    }
    add(name, callback) {
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
        if (!this.running)
            return;
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
    destroy(name) {
        if (name in this.callbacks) {
            delete this.callbacks[name];
        }
    }
}
