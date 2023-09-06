import { djs } from "../dolmenjs.js";

export class djs_dimensions {
    constructor() {
        console.log("djs_dimensions:constructor");
    }

    vh = (h_size: number) => {
        const viewHeight: number = window.innerHeight;
        return h_size * (viewHeight / 100);
    }
    vw = (w_size: number) => {
        const viewWidth: number = window.innerWidth;
        return w_size * (viewWidth / 100);
    }
    rh = (h_size: number) => {
        return h_size * this.vh(1);
    };
    rw = (w_size: number) => {
        return w_size * this.vw(1);
    };
    px = (size: number) => {
        return size + "px";
    }
}
//EOF