var djs_dimensions = (function () {
    function djs_dimensions() {
        var _this = this;
        this.vh = function (h_size) {
            var viewHeight = window.innerHeight;
            return h_size * (viewHeight / 100);
        };
        this.vw = function (w_size) {
            var viewWidth = window.innerWidth;
            return w_size * (viewWidth / 100);
        };
        this.rh = function (h_size) {
            return h_size * _this.vh(1);
        };
        this.rw = function (w_size) {
            return w_size * _this.vw(1);
        };
        this.px = function (size) {
            return size + "px";
        };
        console.log("djs_dimensions:constructor");
    }
    return djs_dimensions;
}());
export { djs_dimensions };
