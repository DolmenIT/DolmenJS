import { djs } from './dolmenjs.js';
export class djs_loader {
    constructor() {
        this.loadView = (view_path, p_params) => {
            djs.debug.log("djs_loader.loadView");
            try {
                djs.file.loadJS(djs.views.path + view_path, p_params)
                    .then((response) => {
                    if (typeof response.p_params !== "undefined") {
                        djs.params.reset();
                        djs.params.setAll(response.p_params);
                    }
                    eval(response.data);
                });
            }
            catch (error) {
                djs.debug.error("Erreur lors du chargement de la View :", error);
            }
        };
        this.loadElement = (element_path, p_params) => {
            djs.debug.log("djs_loader.loadView");
            try {
                djs.file.loadJS(djs.elements.path + element_path + '.js', p_params)
                    .then((response) => {
                    if (typeof response.p_params !== "undefined") {
                        djs.params.reset();
                        djs.params.setAll(response.p_params);
                    }
                    eval(response.data);
                });
            }
            catch (error) {
                djs.debug.error("Erreur lors du chargement de l'Element :", error);
            }
        };
        djs.debug.log("djs_loader.constructor");
    }
}
