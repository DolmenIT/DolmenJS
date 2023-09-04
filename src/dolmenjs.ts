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
  ob: djs_object_basic;

  constructor() {
    this.ob = new djs_object_basic();
  }

  // Vous pouvez ajouter d'autres modules et propriétés ici si nécessaire
}

// Créer une instance globale
const djs = new dolmenjs();
export default djs;