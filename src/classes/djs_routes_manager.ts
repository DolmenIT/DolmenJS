export class djs_route_manager {
    routes_loaded = false;
    json_routes = {};

    constructor() {
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
        this.run_route('/');
    }

    run_route = (route_name) => {
        if (this.routes_loaded) {
            var element = document.createElement('script');
            element.setAttribute("src", this.json_routes["routes"][route_name]);
            document.head.appendChild(element);
        }
        else {
            setTimeout(() => {
                this.run_route(route_name); // Retry after 100 ms
            }, 100);
        }
    }
}
//EOF