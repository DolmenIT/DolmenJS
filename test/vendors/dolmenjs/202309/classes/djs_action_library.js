import { djs } from '../dolmenjs.js';
var djs_action_library = (function () {
    function djs_action_library() {
        this.goto = function (json_parameter) {
            var scriptUrl = json_parameter.p_object;
            var scriptElement = document.createElement("script");
            if (typeof json_parameter.p_var_struct != "undefined") {
                window.params[scriptUrl] = {};
                window.params[scriptUrl].p_var_struct = json_parameter.p_var_struct;
            }
            scriptElement.src = scriptUrl + "?" + Date.now();
            ;
            scriptElement.onload = function () {
                console.log(json_parameter.p_destruct);
                djs.wm.destruct(json_parameter.p_destruct);
            };
            document.head.appendChild(scriptElement);
        };
        console.log("djs_action_library:constructor");
    }
    return djs_action_library;
}());
export { djs_action_library };
window.params = {};
