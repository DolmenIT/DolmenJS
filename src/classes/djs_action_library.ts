import { djs } from '../dolmenjs.js';

export class djs_action_library {
    constructor() {
        console.log("djs_action_library:constructor");
    }
    goto = (json_parameter: any) => {
        djs.wm.destruct(json_parameter.p_destruct);

        const scriptUrl = djs.rm.get(json_parameter.p_route);
        if (typeof json_parameter.p_params != "undefined") {
            djs.params.setAll(json_parameter.p_params);
        }
        const scriptElement = document.createElement("script");
        scriptElement.src = scriptUrl + "?" + Date.now();
        // scriptElement.onload = () => {
        //     console.log(json_parameter.p_destruct);
        // };
        document.head.appendChild(scriptElement);
    }
}
//EOF  