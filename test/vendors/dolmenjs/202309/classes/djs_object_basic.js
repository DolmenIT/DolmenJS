var djs_object_basic = (function () {
    function djs_object_basic(djs) {
        var _this = this;
        this.createAndAppendElement = function (dom_parent, json_parameter, classname) {
            var appDiv = dom_parent || document.getElementById('app');
            var element = document.createElement('div');
            element.className = classname;
            if (typeof json_parameter !== "undefined") {
                if (typeof json_parameter.p_x !== "undefined") {
                    element.style.left = json_parameter.p_x;
                }
                if (typeof json_parameter.p_y !== "undefined") {
                    element.style.top = px(json_parameter.p_y);
                }
                if (typeof json_parameter.p_w !== "undefined") {
                    element.style.marginLeft = -json_parameter.p_w / 2;
                    element.style.width = json_parameter.p_w;
                }
                if (typeof json_parameter.p_h !== "undefined") {
                    element.style.height = json_parameter.p_h;
                }
                if (typeof json_parameter.p_z !== "undefined") {
                    element.style.zIndex = json_parameter.p_z;
                }
                if (typeof json_parameter.p_file !== "undefined") {
                    element.style.background = "url(".concat(json_parameter.p_file, ")");
                }
                if (typeof json_parameter.p_bgcolor !== "undefined") {
                    element.style.backgroundColor = json_parameter.p_bgcolor;
                }
                if (typeof json_parameter.p_opacity !== "undefined") {
                    element.style.opacity = json_parameter.p_opacity;
                }
            }
            appDiv.appendChild(element);
            return element;
        };
        this.image = function (dom_parent, json_parameter) {
            var classname = 'djs-image';
            return _this.createAndAppendElement(dom_parent, json_parameter, classname);
        };
        this.icon = function (dom_parent, json_parameter) {
            var classname = 'djs-icon';
            return _this.createAndAppendElement(dom_parent, json_parameter, classname);
        };
        this.text = function (dom_parent, json_parameter) {
            var classname = 'djs-text';
            var element = _this.createAndAppendElement(dom_parent, json_parameter, classname);
            element.style.width = json_parameter.p_w || 9999;
            element.style.height = json_parameter.p_h || 0;
            element.style.marginLeft = json_parameter.p_ox || -4999.5;
            element.textContent = json_parameter.p_text;
            if (json_parameter.p_font_name) {
                element.style.cssText += json_parameter.p_font_name;
            }
            if (json_parameter.p_font_color) {
                element.style.color = json_parameter.p_font_color;
            }
            return element;
        };
        console.log("djs_object_basic:constructor");
        this.djs = djs;
    }
    return djs_object_basic;
}());
export { djs_object_basic };
