export class djs_config {
    constructor() {
        this.config_loaded = false;
        this.json_config = {};
        this.get = (config_name) => {
            if (this.config_loaded) {
                return this.json_config[config_name];
            }
            else {
                console.error(`Config "${config_name}" not loaded yet.`);
                return null;
            }
        };
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
}
