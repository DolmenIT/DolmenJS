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

export class dolmenjs {
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
  rm: djs_routes_manager | undefined;
  ti: djs_timer_interface | undefined;
  wm: djs_window_manager | undefined;

  constructor() {
    console.log("dolmenjs:constructor");
  }

  init = () => {
    this.ac = new djs_action_library();
    this.color = new djs_colors();
    this.di = new djs_dimensions();
    this.fx = new djs_effect_library();
    this.ni = new djs_native_interface();
    this.el = new djs_elements_loader();
    this.ev = new djs_event_library();
    this.font = new djs_fonts();
    this.i18n = new djs_internationalization();
    this.ml = new djs_main_loop();
    this.oa = new djs_object_advance();
    this.ob = new djs_object_basic();
    this.rm = new djs_routes_manager();
    this.ti = new djs_timer_interface();
    this.wm = new djs_window_manager();
  }

  // Vous pouvez ajouter d'autres modules et propriétés ici si nécessaire
}

// Créer une instance globale
(window as any).djs = new dolmenjs();
export const djs = (window as any).djs;
djs.init();

window.addEventListener('load', (event) => {
  console.log("window:load");
  djs.rm.run_main();
});