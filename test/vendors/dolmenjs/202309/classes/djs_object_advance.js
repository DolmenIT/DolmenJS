var djs_object_advance = (function () {
    function djs_object_advance(djs) {
        var _this = this;
        this.createAndAppendElement = function (dom_parent, element_type, json_parameter, classname) {
            var appDiv = dom_parent || document.getElementById('app');
            var element = document.createElement(element_type);
            element.className = classname;
            if (typeof json_parameter !== "undefined") {
                if (typeof json_parameter.p_x !== "undefined") {
                    element.style.left = px(json_parameter.p_x);
                }
                if (typeof json_parameter.p_y !== "undefined") {
                    element.style.top = px(json_parameter.p_y);
                }
                if (typeof json_parameter.p_w !== "undefined") {
                    element.style.width = px(json_parameter.p_w);
                }
                if (typeof json_parameter.p_h !== "undefined") {
                    element.style.height = px(json_parameter.p_h);
                    element.style.lineHeight = px(json_parameter.p_h);
                }
                if (typeof json_parameter.p_z !== "undefined") {
                    element.style.zIndex = json_parameter.p_z;
                }
                if (typeof json_parameter.p_margin !== "undefined") {
                    element.style.margin = px(json_parameter.p_margin);
                }
                if (typeof json_parameter.p_padding_top !== "undefined") {
                    element.style.paddingTop = px(json_parameter.p_padding_top);
                    element.style.lineHeight = px(json_parameter.p_h - json_parameter.p_padding_top);
                }
                if (typeof json_parameter.p_text !== "undefined") {
                    element.textContent = json_parameter.p_text;
                }
                if (typeof json_parameter.p_opacity !== "undefined") {
                    element.style.opacity = json_parameter.p_opacity;
                }
                if (typeof json_parameter.p_bgcolor !== "undefined") {
                    element.style.backgroundColor = json_parameter.p_bgcolor;
                }
                if (typeof json_parameter.p_font_name !== "undefined") {
                    element.style.cssText += json_parameter.p_font_name;
                }
                if (typeof json_parameter.p_font_color !== "undefined") {
                    element.style.color = json_parameter.p_font_color;
                }
                if (typeof json_parameter.p_padding !== "undefined") {
                    element.style.paddingTop = json_parameter.p_padding[0];
                    element.style.paddingRight = json_parameter.p_padding[1];
                    element.style.paddingBottom = json_parameter.p_padding[2];
                    element.style.paddingLeft = json_parameter.p_padding[3];
                }
            }
            appDiv.appendChild(element);
            return element;
        };
        this.title = function (json_parameter) {
            var classname = 'djs-title';
            return _this.createAndAppendElement(null, 'div', json_parameter, classname);
        };
        this.section = function (json_parameter) {
            var classname = 'djs-title';
            return _this.createAndAppendElement(null, 'section', json_parameter, classname);
        };
        this.button = function (json_parameter) {
            var classname = 'djs-button';
            var button = _this.createAndAppendElement(null, 'button', json_parameter, classname);
            if (typeof json_parameter !== "undefined" && typeof json_parameter.on_click !== "undefined") {
                button.addEventListener("click", function () {
                    json_parameter.on_click.p_object(json_parameter.on_click.p_var_struct);
                });
            }
            return button;
        };
        this.list = function (json_parameter) {
            var classname = 'djs-list';
            var ul = _this.createAndAppendElement(null, 'ul', json_parameter, classname);
            ul.style.overflowY = "scroll";
            ul.style.listStyleType = 'none';
            return ul;
        };
        this.listItem = function (list, json_parameter) {
            var classname = 'djs-item';
            return _this.createAndAppendElement(list, 'li', json_parameter, classname);
        };
        this.table = function (objParent, json_parameter) {
            var classname = 'djs-table';
            var table = _this.createAndAppendElement(objParent, 'table', json_parameter, classname);
            table.style.display = "table";
            table.style.borderSpacing = "0";
            table.style.position = "unset";
            table.style.overflow = "hidden";
            return table;
        };
        this.tableRow = function (objParent, json_parameter) {
            var classname = 'djs-tablerow';
            var tr = _this.createAndAppendElement(objParent, 'tr', json_parameter, classname);
            tr.style.display = "table-row";
            tr.style.position = "unset";
            return tr;
        };
        this.tableCell = function (objParent, json_parameter) {
            var classname = 'djs-tablecell';
            var td = _this.createAndAppendElement(objParent, 'td', json_parameter, classname);
            td.style.display = "table-cell";
            td.style.position = "unset";
            td.style.textAlign = "center";
            return td;
        };
        console.log("djs_object_advance:constructor");
        this.djs = djs;
    }
    return djs_object_advance;
}());
export { djs_object_advance };
