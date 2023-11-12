import { djs } from "./dolmenjs.js";
export class djs_object_basic {
    constructor() {
        this.createAndAppendElement = (dom_parent, json_parameter, classname) => {
            const appDiv = dom_parent || document.getElementById('app');
            const element = document.createElement('div');
            element.className = classname;
            if (typeof json_parameter !== "undefined") {
                if (typeof json_parameter.p_x !== "undefined") {
                    element.style.left = djs.di.px(json_parameter.p_x);
                }
                if (typeof json_parameter.p_y !== "undefined") {
                    element.style.top = djs.di.px(json_parameter.p_y);
                }
                if (typeof json_parameter.p_w !== "undefined") {
                    element.style.marginLeft = djs.di.px(-json_parameter.p_w / 2);
                    element.style.width = djs.di.px(json_parameter.p_w);
                }
                if (typeof json_parameter.p_h !== "undefined") {
                    element.style.height = djs.di.px(json_parameter.p_h);
                }
                if (typeof json_parameter.p_z !== "undefined") {
                    element.style.zIndex = json_parameter.p_z;
                }
                if (typeof json_parameter.p_file !== "undefined") {
                    element.style.background = `url(${json_parameter.p_file})`;
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
        this.image = (dom_parent, json_parameter) => {
            const classname = 'djs-image';
            return this.createAndAppendElement(dom_parent, json_parameter, classname);
        };
        this.icon = (dom_parent, json_parameter) => {
            const classname = 'djs-icon';
            return this.createAndAppendElement(dom_parent, json_parameter, classname);
        };
        this.text = (dom_parent, json_parameter) => {
            const classname = 'djs-text';
            const element = this.createAndAppendElement(dom_parent, json_parameter, classname);
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
    }
}
