var djs_routes_manager = (function () {
    function djs_routes_manager(djs) {
        var _this = this;
        this.routes_loaded = false;
        this.json_routes = {};
        this.run_main = function () {
            console.log("djs_routes_manager:run_main");
            _this.run_route('/');
        };
        this.run_route = function (route_name) {
            console.log("djs_routes_manager:run_route:${route_name}");
            if (_this.routes_loaded) {
                console.log("djs_routes_manager:run_route:${route_name}:route_loaded");
                var element = document.createElement('script');
                element.setAttribute("src", _this.json_routes["routes"][route_name]);
                document.head.appendChild(element);
            }
            else {
                console.log("djs_routes_manager:run_route:${route_name}:route_not_loaded");
                setTimeout(function () {
                    _this.run_route(route_name);
                }, 100);
            }
        };
        console.log("djs_routes_manager:constructor");
        this.djs = djs;
        fetch("configs/djs_routes.json")
            .then(function (response) { return response.json(); })
            .then(function (json_response) {
            _this.routes_loaded = true;
            _this.json_routes = json_response;
        })
            .catch(function (error) {
            console.error("Error loading routes:", error);
        });
    }
    return djs_routes_manager;
}());
export { djs_routes_manager };
