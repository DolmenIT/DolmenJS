import { djs } from '../dolmenjs.js';
export class djs_action_library {
    constructor() {
        this.goto = (json_parameter) => {
            const scriptUrl = json_parameter.p_object;
            const scriptElement = document.createElement("script");
            if (typeof json_parameter.p_var_struct != "undefined") {
                window.params[scriptUrl] = {};
                window.params[scriptUrl].p_var_struct = json_parameter.p_var_struct;
            }
            scriptElement.src = scriptUrl + "?" + Date.now();
            ;
            scriptElement.onload = () => {
                console.log(json_parameter.p_destruct);
                djs.wm.destruct(json_parameter.p_destruct);
            };
            document.head.appendChild(scriptElement);
        };
        console.log("djs_action_library:constructor");
    }
}
window.params = {};
