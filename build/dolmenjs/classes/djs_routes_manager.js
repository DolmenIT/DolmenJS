export class djs_routes_manager {
    constructor() {
        this.routes_loaded = false;
        this.json_routes = {};
        this.run_main = () => {
            console.log("djs_routes_manager:run_main");
            this.run_route('/');
        };
        this.run_route = (route_name) => {
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
                    this.run_route(route_name);
                }, 100);
            }
        };
        this.get = (route_name) => {
            if (this.routes_loaded) {
                return this.json_routes["routes"][route_name];
            }
            else {
                console.error(`Route "${route_name}" not loaded yet.`);
                return null;
            }
        };
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
}
