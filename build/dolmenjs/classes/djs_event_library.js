import { djs } from "../dolmenjs.js";
export class djs_event_library {
    constructor() {
        this.delay = (json_parameter) => {
            setTimeout(() => {
                if (json_parameter.on_delay && json_parameter.on_delay.p_object && json_parameter.on_delay.p_var_struct) {
                    const { p_object, p_instance, p_var_struct } = json_parameter.on_delay;
                    if (typeof p_object === "function") {
                        if (p_instance == null) {
                            p_object(p_var_struct);
                        }
                        else {
                            p_object(p_instance, p_var_struct);
                        }
                    }
                    else {
                        console.error("La fonction fournie n'est pas valide.");
                    }
                }
            }, json_parameter.p_delay);
        };
        this.timer = (json_parameter) => {
            djs.ml.add(json_parameter.p_timer, () => {
                if (parseInt(djs.ti.getElapsedTimeSum()) >= json_parameter.p_timer) {
                    if (json_parameter.on_timer && json_parameter.on_timer.p_object && json_parameter.on_timer.p_var_struct) {
                        const { p_object, p_instance, p_var_struct } = json_parameter.on_timer;
                        if (typeof p_object === "function") {
                            if (p_instance == null) {
                                p_object(p_var_struct);
                            }
                            else {
                                p_object(p_instance, p_var_struct);
                            }
                        }
                        else {
                            console.error("La fonction fournie n'est pas valide.");
                        }
                    }
                    djs.ml.destroy(json_parameter.p_timer);
                }
            });
        };
        this.click = (object, json_parameter) => {
            object.addEventListener("click", () => {
                json_parameter.p_object(json_parameter.p_var_struct);
            });
        };
        console.log("djs_event_library:constructor");
    }
}
