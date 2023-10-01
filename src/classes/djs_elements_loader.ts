import { djs } from "../dolmenjs.js";

export class djs_elements_loader {
    parameters: Record<string, any> = {};

    constructor() {
      console.log("elements_loader:constructor");
    }

    add = (p_object: string, p_params) => {
      try {
        const response = djs.ni.loadJS("elements/"+p_object+".js", p_params)
        .then(response => response)
        .then(js_response => {
          if (typeof js_response.p_params !== "undefined") {
            djs.params.reset();
            djs.params.setAll(js_response.p_params);
          }
          eval(js_response.data);
        })
      } catch (error) {
        console.error("Erreur lors du chargement de l'élément :", error);
      }
    }
}
//EOF