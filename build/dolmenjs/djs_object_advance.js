import { djs } from "./dolmenjs.js";
export class djs_object_advance {
    constructor() {
        this.createAndAppendElement = (dom_parent, element_type, json_parameter, classname) => {
            var appDiv = dom_parent;
            const element = document.createElement(element_type);
            element.className = classname;
            if (typeof json_parameter !== "undefined") {
                if (typeof json_parameter.p_parent !== "undefined") {
                    appDiv = djs.wm.get(json_parameter.p_parent);
                }
                if (typeof json_parameter.p_x !== "undefined") {
                    element.style.left = djs.di.px(json_parameter.p_x);
                }
                if (typeof json_parameter.p_y !== "undefined") {
                    element.style.top = djs.di.px(json_parameter.p_y);
                }
                if (typeof json_parameter.p_w !== "undefined") {
                    element.style.width = djs.di.px(json_parameter.p_w);
                }
                if (typeof json_parameter.p_h !== "undefined") {
                    element.style.height = djs.di.px(json_parameter.p_h);
                    element.style.lineHeight = djs.di.px(json_parameter.p_h);
                }
                if (typeof json_parameter.p_z !== "undefined") {
                    element.style.zIndex = json_parameter.p_z;
                }
                if (typeof json_parameter.p_margin !== "undefined") {
                    element.style.margin = djs.di.px(json_parameter.p_margin);
                }
                if (typeof json_parameter.p_padding_top !== "undefined") {
                    element.style.paddingTop = djs.di.px(json_parameter.p_padding_top);
                    element.style.lineHeight = djs.di.px(json_parameter.p_h - json_parameter.p_padding_top);
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
            appDiv = appDiv || document.getElementById('app');
            appDiv.appendChild(element);
            return element;
        };
        this.title = (json_parameter) => {
            const classname = 'djs-title';
            return this.createAndAppendElement(null, 'div', json_parameter, classname);
        };
        this.section = (json_parameter) => {
            const classname = 'djs-title';
            return this.createAndAppendElement(null, 'section', json_parameter, classname);
        };
        this.label = (json_parameter) => {
            const classname = 'djs-label';
            return this.createAndAppendElement(null, 'div', json_parameter, classname);
        };
        this.button = (json_parameter) => {
            const classname = 'djs-button';
            const button = this.createAndAppendElement(null, 'button', json_parameter, classname);
            if (typeof json_parameter !== "undefined" && typeof json_parameter.on_click !== "undefined") {
                button.addEventListener("click", () => {
                    json_parameter.on_click.p_object(json_parameter.on_click.p_var_struct);
                });
            }
            return button;
        };
        this.scrollX = (json_parameter) => {
            const classname = 'djs-scroll';
            const scroll = this.createAndAppendElement(null, 'div', json_parameter, classname);
            scroll.style.overflowX = "scroll";
            scroll.style.overflowY = "hidden";
            return scroll;
        };
        this.scrollY = (json_parameter) => {
            const classname = 'djs-scroll';
            const scroll = this.createAndAppendElement(null, 'div', json_parameter, classname);
            scroll.style.overflowX = "hidden";
            scroll.style.overflowY = "scroll";
            return scroll;
        };
        this.scrollXY = (json_parameter) => {
            const classname = 'djs-scroll';
            const scroll = this.createAndAppendElement(null, 'div', json_parameter, classname);
            scroll.style.overflowX = "scroll";
            scroll.style.overflowY = "scroll";
            return scroll;
        };
        this.list = (json_parameter) => {
            const classname = 'djs-list';
            const ul = this.createAndAppendElement(null, 'ul', json_parameter, classname);
            ul.style.overflowY = "scroll";
            ul.style.listStyleType = 'none';
            return ul;
        };
        this.listItem = (list, json_parameter) => {
            const classname = 'djs-item';
            return this.createAndAppendElement(list, 'li', json_parameter, classname);
        };
        this.table = (objParent, json_parameter) => {
            const classname = 'djs-table';
            const table = this.createAndAppendElement(objParent, 'table', json_parameter, classname);
            table.style.display = "table";
            table.style.borderSpacing = "0";
            table.style.position = "unset";
            table.style.overflow = "hidden";
            return table;
        };
        this.tableRow = (objParent, json_parameter) => {
            const classname = 'djs-tablerow';
            const tr = this.createAndAppendElement(objParent, 'tr', json_parameter, classname);
            tr.style.display = "table-row";
            tr.style.position = "unset";
            return tr;
        };
        this.tableCell = (objParent, json_parameter) => {
            const classname = 'djs-tablecell';
            const td = this.createAndAppendElement(objParent, 'td', json_parameter, classname);
            td.style.display = "table-cell";
            td.style.position = "unset";
            td.style.textAlign = "center";
            return td;
        };
        console.log("djs_object_advance:constructor");
    }
}
