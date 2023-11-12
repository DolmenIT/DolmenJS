import { djs } from "./dolmenjs.js";

export class djs_elements {
    path = '';

    constructor() {
        djs.debug.log("djs_elements:constructor");
    }

    load = (elementName: String, json_parameter: any) => {
        djs.loader.loadElement(elementName, json_parameter);
    }
}
//EOF 