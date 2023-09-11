import { djs } from "../dolmenjs.js";

export class djs_elements_loader {
    parameters = {};

    constructor() {
      console.log("elements_loader:constructor");
    }

    add = (p_object: string, p_var_struct) => {
      try {
        const response = djs.ni.loadJS("elements/"+p_object+".js", p_var_struct)
        .then(response => response)
        .then(js_response => {
          if (typeof js_response.params !== "undefined") {
            this.set_parameters(js_response.params)
          }
          eval(js_response.data);
        })
      } catch (error) {
        console.error("Erreur lors du chargement de l'élément :", error);
      }
    }
  
    set_parameters(p_var_struct) {
      if (typeof p_var_struct === 'object') {
        this.parameters = p_var_struct; // On remplace les paramètres actuels par les nouveaux
      } else {
        console.error("Erreur : p_var_struct n'est pas un objet JSON valide.");
      }
    }
  
    get_parameters() {
      return this.parameters; // On renvoie les paramètres actuels
    }
}
//EOF