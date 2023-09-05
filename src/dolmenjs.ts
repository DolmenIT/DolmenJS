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
  ac: djs_action_library;
  color: djs_colors;
  di: djs_dimensions;
  fx: djs_effect_library;
  el: djs_elements_loader;
  ev: djs_event_library;
  font: djs_fonts;
  i18n: djs_internationalization;
  ml: djs_main_loop;
  ni: djs_native_interface;
  oa: djs_object_advance;
  ob: djs_object_basic;
  rm: djs_routes_manager;
  ti: djs_timer_interface;
  wm: djs_window_manager;

  constructor() {
    console.log("dolmenjs:constructor");
  }

  init = () => {
    this.ac = new djs_action_library(this);
    this.color = new djs_colors(this);
    this.di = new djs_dimensions(this);
    this.fx = new djs_effect_library(this);
    this.el = new djs_elements_loader(this);
    this.ev = new djs_event_library(this);
    this.font = new djs_fonts(this);
    this.i18n = new djs_internationalization(this);
    this.ml = new djs_main_loop(this);
    this.ni = new djs_native_interface(this);
    this.oa = new djs_object_advance(this);
    this.ob = new djs_object_basic(this);
    this.rm = new djs_routes_manager(this);
    this.ti = new djs_timer_interface(this);
    this.wm = new djs_window_manager(this);
  }

  // Vous pouvez ajouter d'autres modules et propriétés ici si nécessaire
}

// Créer une instance globale
const djs = new dolmenjs();
djs.init();

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("document");
  djs.rm.run_main();
});

window.addEventListener('load', (event) => {
  console.log("window");
  djs.rm.run_main();
});