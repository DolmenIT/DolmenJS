import { djs } from "../dolmenjs.js";

export class djs_params {
    all_params: { [key: string]: any } = {};

    constructor() {
        console.log("djs_params:constructor");
    }

    getAll = () => {
        return this.all_params;
    };

    setAll = (json_parameter: any) => {
        for (const key in json_parameter) {
            this.all_params[key] = json_parameter[key];
        }
    };

    set = (name: string, value: any) => {
        this.all_params[name] = value;
    };
}
//EOF