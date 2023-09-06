var djs_main_loop = (function () {
    function djs_main_loop() {
        console.log("djs_main_loop:constructor");
        this.callbacks = {};
        this.timeInterval = 10;
        this.running = false;
        this.start();
    }
    djs_main_loop.prototype.add = function (name, callback) {
        if (!this.callbacks[name]) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
    };
    djs_main_loop.prototype.start = function () {
        this.running = true;
        this.runLoop();
    };
    djs_main_loop.prototype.runLoop = function () {
        var _this = this;
        if (!this.running)
            return;
        for (var name_1 in this.callbacks) {
            var callbacks = this.callbacks[name_1];
            for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                var callback = callbacks_1[_i];
                callback();
            }
        }
        setTimeout(function () {
            _this.runLoop();
        }, this.timeInterval);
    };
    djs_main_loop.prototype.stop = function () {
        this.running = false;
    };
    djs_main_loop.prototype.destroy = function (name) {
        if (name in this.callbacks) {
            delete this.callbacks[name];
        }
    };
    return djs_main_loop;
}());
export { djs_main_loop };
