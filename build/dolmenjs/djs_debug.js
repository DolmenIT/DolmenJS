import { djs } from './dolmenjs.js';
export class djs_debug {
    constructor() {
        this.enabled = true;
        this.urlsend = false;
        this.log = (text) => {
            if (djs.debug.enabled) {
                if (djs.debug.urlsend) {
                    const url = `/debug=${encodeURIComponent(text)}`;
                    const response = fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                        },
                    });
                }
                else {
                    console.log(djs.debug.getCurrentTimestamp() + ' : ' + text);
                }
            }
        };
        this.error = (text) => {
            if (djs.debug.enabled) {
                if (djs.debug.urlsend) {
                    const url = `/debug=${encodeURIComponent(text)}`;
                    const response = fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                        },
                    });
                }
                else {
                    console.log(djs.debug.getCurrentTimestamp() + ' : ' + text);
                }
            }
        };
        this.getCurrentTimestamp = () => {
            var now = new Date();
            var hours = now.getHours().toString().padStart(2, '0');
            var minutes = now.getMinutes().toString().padStart(2, '0');
            var seconds = now.getSeconds().toString().padStart(2, '0');
            var millis = Math.floor(performance.now()).toString().slice(-3);
            return hours + ':' + minutes + ':' + seconds + ':' + millis;
        };
        this.disable = () => {
            console.log("djs_debug.disable");
            djs.debug.enabled = false;
        };
        console.log("djs_debug.constructor");
    }
}
