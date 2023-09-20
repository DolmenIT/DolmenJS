import { djs } from '../dolmenjs.js';
export class djs_action_library {
    constructor() {
        this.goto = (json_parameter) => {
            const scriptUrl = djs.rm.get(json_parameter.p_route);
            const filename = scriptUrl.substring(scriptUrl.lastIndexOf('/') + 1);
            if (typeof json_parameter.p_params != "undefined") {
                djs.params.setAll(json_parameter.p_params);
            }
            const scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl + "?" + Date.now();
            scriptElement.onload = () => {
                console.log(json_parameter.p_destruct);
                djs.wm.destruct(json_parameter.p_destruct);
            };
            document.head.appendChild(scriptElement);
        };
        console.log("djs_action_library:constructor");
    }
}
