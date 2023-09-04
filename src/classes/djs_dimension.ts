export class djs_dimensions {
    vh = (h_size) => {
        const viewHeight: number = window.innerHeight;
        return h_size * (viewHeight / 100);
    }
    vw = (w_size) => {
        const viewWidth: number = window.innerWidth;
        return w_size * (viewWidth / 100);
    }
    rh = (h_size) => {
        return h_size * vh(1);
    };
    rw = (w_size) => {
        return w_size * vw(1);
    };
    px = (size) => {
        return size + "px";
    }
}
//EOF