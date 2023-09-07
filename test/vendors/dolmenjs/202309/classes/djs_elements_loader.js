export class djs_elements_loader {
    constructor() {
        this.parameters = {};
        this.add = async (p_object) => {
            try {
                const response = await fetch("./elements/" + p_object + ".processed.js?" + Date.now());
                const textResponse = await response.text();
                eval(textResponse);
            }
            catch (error) {
                console.error("Erreur lors du chargement de l'élément :", error);
            }
        };
        console.log("djs_elements_loader:constructor");
    }
    set_parameters(p_var_struct) {
        if (typeof p_var_struct === 'object') {
            this.parameters = p_var_struct;
        }
        else {
            console.error("Erreur : p_var_struct n'est pas un objet JSON valide.");
        }
    }
    get_parameters() {
        return this.parameters;
    }
}
