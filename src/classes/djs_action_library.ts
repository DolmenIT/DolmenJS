import { djs } from '../dolmenjs.js';

export class djs_action_library {
    constructor() {
        console.log("djs_action_library:constructor");
    }
    goto = (json_parameter: any) => {
        const scriptUrl = json_parameter.p_object;
        const scriptElement = document.createElement("script");
        if (typeof json_parameter.p_var_struct != "undefined") {
            window.params[scriptUrl] = {}
            window.params[scriptUrl].p_var_struct = json_parameter.p_var_struct;
        }
        scriptElement.src = scriptUrl + "?" + Date.now();;
        scriptElement.onload = () => {
            console.log(json_parameter.p_destruct);
            djs.wm.destruct(json_parameter.p_destruct);
        };
        document.head.appendChild(scriptElement);
    }
}
window.params = {};
//EOF  