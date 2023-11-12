export class djs_params {
    constructor() {
        this.all_params = {};
        this.getAll = () => {
            return this.all_params;
        };
        this.setAll = (json_parameter) => {
            for (const key in json_parameter) {
                this.all_params[key] = json_parameter[key];
            }
        };
        this.reset = () => {
            for (const key in this.all_params) {
                delete this.all_params[key];
            }
        };
        this.set = (name, value) => {
            this.all_params[name] = value;
        };
        console.log("djs_params:constructor");
    }
}
