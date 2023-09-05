var djs_event_library = (function () {
    function djs_event_library(djs) {
        this.delay = function (json_parameter) {
            setTimeout(function () {
                if (json_parameter.on_delay && json_parameter.on_delay.p_object && json_parameter.on_delay.p_var_struct) {
                    var _a = json_parameter.on_delay, p_object = _a.p_object, p_instance = _a.p_instance, p_var_struct = _a.p_var_struct;
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
        this.timer = function (json_parameter) {
            djs_ml.add(json_parameter.p_timer, function () {
                if (parseInt(djs_ti.getElapsedTimeSum()) >= json_parameter.p_timer) {
                    if (json_parameter.on_timer && json_parameter.on_timer.p_object && json_parameter.on_timer.p_var_struct) {
                        var _a = json_parameter.on_timer, p_object = _a.p_object, p_instance = _a.p_instance, p_var_struct = _a.p_var_struct;
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
                    djs_ml.destroy(json_parameter.p_timer);
                }
            });
        };
        this.click = function (object, json_parameter) {
            object.addEventListener("click", function () {
                json_parameter.p_object(json_parameter.p_var_struct);
            });
        };
        console.log("djs_event_library:constructor");
        this.djs = djs;
    }
    return djs_event_library;
}());
export { djs_event_library };
