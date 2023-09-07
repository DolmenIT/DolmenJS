export class djs_dimensions {
    constructor() {
        this.vh = (h_size) => {
            const viewHeight = window.innerHeight;
            return h_size * (viewHeight / 100);
        };
        this.vw = (w_size) => {
            const viewWidth = window.innerWidth;
            return w_size * (viewWidth / 100);
        };
        this.rh = (h_size) => {
            return h_size * this.vh(1);
        };
        this.rw = (w_size) => {
            return w_size * this.vw(1);
        };
        this.px = (size) => {
            return size + "px";
        };
        console.log("djs_dimensions:constructor");
    }
}
