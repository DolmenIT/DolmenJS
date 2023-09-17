import { djs } from "../dolmenjs.js";
export class djs_elements_loader {
    constructor() {
        this.parameters = {};
        this.add = (p_object, p_var_struct) => {
            try {
                const response = djs.ni.loadJS("elements/" + p_object + ".js", p_var_struct)
                    .then(response => response)
                    .then(js_response => {
                    if (typeof js_response.params !== "undefined") {
                        this.set_parameters(js_response.params);
                    }
                    eval(js_response.data);
                });
            }
            catch (error) {
                console.error("Erreur lors du chargement de l'élément :", error);
            }
        };
        console.log("elements_loader:constructor");
    }
    set_parameter(name, value) {
        this.parameters[name] = value;
    }
    set_parameters(p_var_struct) {
        if (typeof p_var_struct === 'object') {
            for (const key in p_var_struct) {
                this.parameters[key] = p_var_struct[key];
            }
        }
        else {
            console.error("Erreur : p_var_struct n'est pas un objet JSON valide.");
        }
    }
    get_parameters() {
        return this.parameters;
    }
}
