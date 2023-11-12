import { djs } from "./dolmenjs.js";

export class djs_config {
    config_loaded: boolean = false;
    json_config: any = {};

    constructor() {
        console.log("djs_config:constructor");

        fetch("configs/djs_config.json")
            .then(response => response.json())
            .then(json_response => {
                this.config_loaded = true;
                this.json_config = json_response;
            })
            .catch(error => {
                console.error("Error loading config:", error);
            });
    }

    get = (config_name: string) => {
        if (this.config_loaded) {
            return this.json_config[config_name];
        } else {
            console.error(`Config "${config_name}" not loaded yet.`);
            return null;
        }
    }
}
//EOF