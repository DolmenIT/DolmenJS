import { djs } from "../dolmenjs.js";

export class djs_routes_manager {
    routes_loaded = false;
    json_routes = {};

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

    run_route = (route_name) => {
        console.log("djs_routes_manager:run_route:${route_name}");
        if (this.routes_loaded) {
            console.log("djs_routes_manager:run_route:${route_name}:route_loaded");
            var element = document.createElement('script');
            element.setAttribute("src", this.json_routes["routes"][route_name]);
            document.head.appendChild(element);
        }
        else {
            console.log("djs_routes_manager:run_route:${route_name}:route_not_loaded");
            setTimeout(() => {
                this.run_route(route_name); // Retry after 100 ms
            }, 100);
        }
    }
}
//EOF