import { djs } from "./dolmenjs.js";
export class djs_elements {
    constructor() {
        this.path = '';
        this.load = (elementName, json_parameter) => {
            djs.loader.loadElement(elementName, json_parameter);
        };
        djs.debug.log("djs_elements:constructor");
    }
}
