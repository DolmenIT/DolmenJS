import { djs } from "./dolmenjs.js";

export class djs_routes_manager {
    routes_loaded: boolean = false;
    json_routes: any = {};

    constructor() {
        console.log("djs_routes_manager:constructor");

        fetch("configs/djs_routes.json")
            .then(response => response.json())
            .then(json_response => {
                this.routes_loaded = true;
                this.json_routes = json_response;
            })
            .catch(error => {
                console.error("Error loading routes:", error);
            });
    }

    run_main = () => {
        console.log("djs_routes_manager:run_main");
        this.run_route('/');
    }

    run_route = (route_name: string) => {
        console.log("djs_routes_manager:run_route:${route_name}");
        if (this.routes_loaded) {
            console.log("djs_routes_manager:run_route:${route_name}:route_loaded");
            var element = document.createElement('script');
            element.setAttribute("src", this.get(route_name));
            document.head.appendChild(element);
        }
        else {
            console.log("djs_routes_manager:run_route:${route_name}:route_not_loaded");
            setTimeout(() => {
                this.run_route(route_name); // Retry after 100 ms
            }, 100);
        }
    }

    get = (route_name: string) => {
        if (this.routes_loaded) {
            return djs.config.get("base_url") + this.json_routes["routes"][route_name];
        } else {
            console.error(`Route "${route_name}" not loaded yet.`);
            return null;
        }
    }
}
//EOF