import { djs_debug } from './djs_debug.js';
import { djs_loader } from './djs_loader.js';
import { djs_file } from './djs_file.js';
import { djs_views } from './djs_views.js';
import { djs_objects } from './djs_objects.js';
import { djs_elements } from './djs_elements.js';

// import { djs_monitor } from './djs_monitor.js';
import { djs_native_interface } from './djs_native_interface.js';
import { djs_colors } from './djs_colors.js';
import { djs_action_library } from './djs_action_library.js';
import { djs_effect_library } from './djs_effect_library.js';
import { djs_event_library } from './djs_event_library.js';
import { djs_object_basic } from './djs_object_basic.js';
import { djs_object_advance } from './djs_object_advance.js';
import { djs_window_manager } from './djs_window_manager.js';
import { djs_dimensions } from './djs_dimensions.js';
// import { djs_routes_manager } from './djs_routes_manager.js';
import { djs_elements_loader } from './djs_elements_loader.js';
import { djs_main_loop } from './djs_main_loop.js';
import { djs_timer_interface } from './djs_timer_interface.js';
import { djs_internationalization } from './djs_internationalization.js';
import { djs_fonts } from './djs_fonts.js';
import { djs_params } from './djs_params.js';
// import { djs_config } from './djs_config.js';


export class dolmenjs {
  debug: djs_debug | undefined;
  // monitor: djs_monitor | undefined;
  loader: djs_loader | undefined;
  file: djs_file | undefined;
  views: djs_views | undefined;
  objects: djs_objects | undefined;
  elements: djs_elements | undefined;

  ac: djs_action_library | undefined;
  color: djs_colors | undefined;
  di: djs_dimensions | undefined;
  fx: djs_effect_library | undefined;
  el: djs_elements_loader | undefined;
  ev: djs_event_library | undefined;
  font: djs_fonts | undefined;
  i18n: djs_internationalization | undefined;
  ml: djs_main_loop | undefined;
  ni: djs_native_interface | undefined;
  oa: djs_object_advance | undefined;
  ob: djs_object_basic | undefined;
  // rm: djs_routes_manager | undefined;
  ti: djs_timer_interface | undefined;
  wm: djs_window_manager | undefined;
  params: djs_params | undefined;
  // config: djs_config | undefined;
  callback: any | undefined;

  constructor() {
    console.log("dolmenjs:constructor");
  }

  init = () => {
    console.log("dolmenjs.init");

    djs.debug = new djs_debug();
    djs.loader = new djs_loader();
    djs.file = new djs_file();
    djs.views = new djs_views();
    djs.objects = new djs_objects();
    djs.elements = new djs_elements();

    // djs.monitor = new djs_monitor();
    djs.ac = new djs_action_library();
    djs.color = new djs_colors();
    djs.di = new djs_dimensions();
    djs.fx = new djs_effect_library();
    djs.ni = new djs_native_interface();
    djs.el = new djs_elements_loader();
    djs.ev = new djs_event_library();
    djs.font = new djs_fonts();
    djs.i18n = new djs_internationalization();
    djs.ml = new djs_main_loop();
    djs.oa = new djs_object_advance();
    djs.ob = new djs_object_basic();
    // djs.rm = new djs_routes_manager();
    djs.ti = new djs_timer_interface();
    djs.wm = new djs_window_manager();
    djs.params = new djs_params();
    // djs.config = new djs_config();
  }

  start = () => {
    console.log("dolmenjs.start");
  }

  onLoad = (callback_function: any) => {
    console.log("dolmenjs.onLoad");

    djs.callback = callback_function;
  }

  tryCallback = () => {
    console.log("dolmenjs.tryCallback");

    if (typeof djs.callback == 'function') {
      console.log("dolmenjs.tryCallback.callback");
      djs.callback();
    }
    else {
      console.log("dolmenjs.tryCallback.settimeout");
      setTimeout(() => { djs.tryCallback() }, 100);
    }
  }
}

(window as any).djs = new dolmenjs();
export const djs = (window as any).djs;
djs.init();

window.addEventListener('load', (event) => {
  djs.start();
  setTimeout(() => { djs.tryCallback() }, 1);
});