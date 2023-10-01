import { djs } from '../dolmenjs.js';
export class djs_action_library {
    constructor() {
        this.goto = (json_parameter) => {
            djs.wm.destruct(json_parameter.p_destruct);
            const scriptUrl = djs.rm.get(json_parameter.p_route);
            if (typeof json_parameter.p_params != "undefined") {
                djs.params.setAll(json_parameter.p_params);
            }
            const scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl + "?" + Date.now();
            document.head.appendChild(scriptElement);
        };
        console.log("djs_action_library:constructor");
    }
}
