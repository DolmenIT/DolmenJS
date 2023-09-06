var djs_timer_interface = (function () {
    function djs_timer_interface() {
        var _this = this;
        this.elapsedTimeSum = 0;
        this.lastUpdateTime = Date.now();
        this.isPaused = false;
        this.formattedTime = '';
        this.reset = function () {
            _this.elapsedTimeSum = 0;
            _this.lastUpdateTime = Date.now();
            _this.isPaused = false;
            _this.formattedTime = '';
        };
        this.loop = function () {
            _this.update();
            setTimeout(function () {
                _this.loop();
            }, 1);
        };
        this.update = function () {
            var currentTime = Date.now();
            if (!_this.isPaused) {
                var deltaTime = currentTime - _this.lastUpdateTime;
                _this.elapsedTimeSum += deltaTime;
                var totalSeconds = Math.floor(_this.elapsedTimeSum / 1000);
                var totalMilliseconds = Math.floor((_this.elapsedTimeSum % 1000) / 10);
                _this.formattedTime = "".concat(totalSeconds, ".").concat(totalMilliseconds.toString().padStart(2, '0'));
            }
            _this.lastUpdateTime = currentTime;
        };
        this.getElapsedTimeSum = function () {
            return _this.elapsedTimeSum;
        };
        this.getFormattedTime = function () {
            return _this.formattedTime;
        };
        this.pause = function () {
            _this.isPaused = !_this.isPaused;
        };
        console.log("djs_timer_interface:constructor");
        this.loop();
    }
    return djs_timer_interface;
}());
export { djs_timer_interface };
