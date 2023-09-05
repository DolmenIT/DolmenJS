import { djs_native_interface } from './classes/djs_native_interface.js';
import { djs_colors } from './classes/djs_colors.js';
import { djs_action_library } from './classes/djs_action_library.js';
import { djs_effect_library } from './classes/djs_effect_library.js';
import { djs_event_library } from './classes/djs_event_library.js';
import { djs_object_basic } from './classes/djs_object_basic.js';
import { djs_object_advance } from './classes/djs_object_advance.js';
import { djs_window_manager } from './classes/djs_window_manager.js';
import { djs_dimensions } from './classes/djs_dimensions.js';
import { djs_routes_manager } from './classes/djs_routes_manager.js';
import { djs_elements_loader } from './classes/djs_elements_loader.js';
import { djs_main_loop } from './classes/djs_main_loop.js';
import { djs_timer_interface } from './classes/djs_timer_interface.js';
import { djs_internationalization } from './classes/djs_internationalization.js';
import { djs_fonts } from './classes/djs_fonts.js';
var dolmenjs = (function () {
    function dolmenjs() {
        var _this = this;
        this.init = function () {
            _this.ac = new djs_action_library(_this);
            _this.color = new djs_colors(_this);
            _this.di = new djs_dimensions(_this);
            _this.fx = new djs_effect_library(_this);
            _this.el = new djs_elements_loader(_this);
            _this.ev = new djs_event_library(_this);
            _this.font = new djs_fonts(_this);
            _this.i18n = new djs_internationalization(_this);
            _this.ml = new djs_main_loop(_this);
            _this.ni = new djs_native_interface(_this);
            _this.oa = new djs_object_advance(_this);
            _this.ob = new djs_object_basic(_this);
            _this.rm = new djs_routes_manager(_this);
            _this.ti = new djs_timer_interface(_this);
            _this.wm = new djs_window_manager(_this);
        };
        console.log("dolmenjs:constructor");
    }
    return dolmenjs;
}());
export { dolmenjs };
var djs = new dolmenjs();
djs.init();
document.addEventListener('DOMContentLoaded', function (event) {
    console.log("document");
    djs.rm.run_main();
});
window.addEventListener('load', function (event) {
    console.log("window");
    djs.rm.run_main();
});
