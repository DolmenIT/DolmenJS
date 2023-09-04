import { djs_native_interface } from './classes/djs_native_interface';
import { djs_colors } from './classes/djs_colors';
import { djs_action_library } from './classes/djs_action_library';
import { djs_effect_library } from './classes/djs_effect_library';
import { djs_event_library } from './classes/djs_event_library';
import { djs_object_basic } from './classes/djs_object_basic';
import { djs_object_advance } from './classes/djs_object_advance';
import { djs_window_manager } from './classes/djs_window_manager';
import { djs_dimensions } from './classes/djs_dimensions';
import { djs_routes_manager } from './classes/djs_routes_manager';
import { djs_elements_loader } from './classes/djs_elements_loader';
import { djs_main_loop } from './classes/djs_main_loop';
import { djs_timer_interface } from './classes/djs_timer_interface';
import { djs_fonts } from './classes/djs_fonts';

class dolmenjs {
  ac: djs_action_library;
  co: djs_colors;
  di: djs_dimensions;
  fx: djs_effect_library;
  el: djs_elements_loader;
  ev: djs_event_library;
  fo: djs_fonts;
  ml: djs_main_loop;
  ni: djs_native_interface;
  oa: djs_object_advance;
  ob: djs_object_basic;
  rm: djs_routes_manager;
  ti: djs_timer_interface;
  wm: djs_window_manager;

  constructor() {
    this.ac = new djs_action_library();
    this.co = new djs_colors();
    this.di = new djs_dimensions();
    this.fx = new djs_effect_library();
    this.el = new djs_elements_loader();
    this.ev = new djs_event_library();
    this.fo = new djs_fonts();
    this.ml = new djs_main_loop();
    this.ni = new djs_native_interface();
    this.oa = new djs_object_advance();
    this.ob = new djs_object_basic();
    this.rm = new djs_routes_manager();
    this.ti = new djs_timer_interface();
    this.wm = new djs_window_manager();
  }

  // Vous pouvez ajouter d'autres modules et propriétés ici si nécessaire
}

// Créer une instance globale
const djs = new dolmenjs();
export default djs;