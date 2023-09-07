import { djs } from "../dolmenjs.js";
export class djs_effect_library {
    constructor() {
        this.effects = {};
        this.effectCounter = 1;
        this.preset = {
            zoom: { p_zoom_start: 0, p_zoom_end: 1, p_speed: 0.01 },
            zoom2: { p_zoom_start: 1, p_zoom_end: 2, p_speed: 0.01 },
            slow_zoom2: { p_zoom_start: 1, p_zoom_end: 2, p_speed: 0.002 },
            alpha_show: { p_alpha_start: 0, p_alpha_end: 1, p_speed: 0.01 },
            alpha_hide: { p_alpha_start: 1, p_alpha_end: 0, p_speed: 0.01 },
            slow_alpha_hide: { p_alpha_start: 1, p_alpha_end: 0, p_speed: 0.002 },
            shadow: { p_x: -0.5, p_y: 0.5, p_z: 0.5, p_color: djs.color.gray8 },
            alpha_title_show: { p_alpha_start: 0, p_alpha_end: 1.00, p_speed: 0.01 },
            shadow_title: { p_x: 0, p_y: 0.45, p_z: 0.45, p_color: djs.color.gray8 },
            alpha_subtitle_show: { p_alpha_start: 0, p_alpha_end: 0.85, p_speed: 0.01 },
            shadow_subtitle: { p_x: 0, p_y: 0.50, p_z: 0.50, p_color: djs.color.gray7 },
            alpha_button_show: { p_alpha_start: 0, p_alpha_end: 0.70, p_speed: 0.01 },
            shadow_button: { p_x: 0, p_y: 0.55, p_z: 0.55, p_color: djs.color.gray9 },
            border_0: { p_top_left: 0, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_1: { p_top_left: 1, p_top_right: 1, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_2: { p_top_left: 2, p_top_right: 2, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_3: { p_top_left: 3, p_top_right: 3, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_4: { p_top_left: 4, p_top_right: 4, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_5: { p_top_left: 5, p_top_right: 5, p_bottom_left: 0, p_bottom_right: 0 },
            border_top_6: { p_top_left: 6, p_top_right: 6, p_bottom_left: 0, p_bottom_right: 0 },
            border_bottom_1: { p_top_left: 0, p_top_right: 0, p_bottom_left: 1, p_bottom_right: 1 },
            border_bottom_2: { p_top_left: 0, p_top_right: 0, p_bottom_left: 2, p_bottom_right: 2 },
            border_bottom_3: { p_top_left: 0, p_top_right: 0, p_bottom_left: 3, p_bottom_right: 3 },
            border_bottom_4: { p_top_left: 0, p_top_right: 0, p_bottom_left: 4, p_bottom_right: 4 },
            border_bottom_5: { p_top_left: 0, p_top_right: 0, p_bottom_left: 5, p_bottom_right: 5 },
            border_bottom_6: { p_top_left: 0, p_top_right: 0, p_bottom_left: 6, p_bottom_right: 6 },
            border_button_1: { p_top_left: 1, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 1 },
            border_button_2: { p_top_left: 2, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 2 },
            border_button_3: { p_top_left: 3, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 3 },
            border_button_4: { p_top_left: 4, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 4 },
            border_button_5: { p_top_left: 5, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 5 },
            border_button_6: { p_top_left: 6, p_top_right: 0, p_bottom_left: 0, p_bottom_right: 6 }
        };
        this.tick = () => {
            this.doEffects();
            setTimeout(() => {
                this.tick();
            }, 5);
        };
        this.doEffects = () => {
            for (const key in this.effects) {
                const effect = this.effects[key];
                const { effectType } = effect;
                const effectFunctions = {
                    scroll: this.scrollStep,
                    zoom: this.zoomStep,
                    alpha: this.alphaStep,
                    textShadow: this.textShadowStep,
                    boxShadow: this.boxShadowStep,
                    borderRadius: this.borderRadiusStep,
                    text: this.textStep,
                };
                const effectFunction = effectFunctions[effectType];
                if (effectFunction) {
                    effectFunction(effect);
                }
            }
            for (const key in this.effects) {
                const effect = this.effects[key];
                if ("dirty" in effect) {
                    this.dropEffect(key);
                }
            }
        };
        this.addEffect = (json_parameter) => {
            const effectId = `fx${this.effectCounter}`;
            const effectWithId = Object.assign(Object.assign({}, json_parameter), { effectId: effectId });
            this.effects[effectId] = effectWithId;
            this.effectCounter++;
            return effectId;
        };
        this.dropEffect = (effectId) => {
            delete this.effects[effectId];
        };
        this.scroll = (p_instance, json_parameter) => {
            const effectType = "scroll";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentX: json_parameter.p_x_start, currentY: json_parameter.p_y_start });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.scrollStep = (json_parameter) => {
            const directionX = json_parameter.p_x_end >= json_parameter.p_x_start ? 1 : -1;
            const directionY = json_parameter.p_y_end >= json_parameter.p_y_start ? 1 : -1;
            const updatedX = json_parameter.currentX + json_parameter.p_speed * directionX;
            const updatedY = json_parameter.currentY + json_parameter.p_speed * directionY;
            const newX = directionX > 0 ? Math.min(updatedX, json_parameter.p_x_end) : Math.max(updatedX, json_parameter.p_x_end);
            const newY = directionY > 0 ? Math.min(updatedY, json_parameter.p_y_end) : Math.max(updatedY, json_parameter.p_y_end);
            json_parameter.currentX = newX;
            json_parameter.currentY = newY;
            json_parameter.p_instance.style.left = json_parameter.currentX;
            json_parameter.p_instance.style.top = json_parameter.currentY;
            const reachedEndX = (directionX > 0 && newX >= json_parameter.p_x_end) || (directionX < 0 && newX <= json_parameter.p_x_end);
            const reachedEndY = (directionY > 0 && newY >= json_parameter.p_y_end) || (directionY < 0 && newY <= json_parameter.p_y_end);
            if (reachedEndX && reachedEndY) {
                json_parameter.dirty = true;
            }
        };
        this.zoom = (p_instance, json_parameter) => {
            const effectType = "zoom";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentZoom: json_parameter.p_zoom_start });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.zoomStep = (json_parameter) => {
            const directionZoom = json_parameter.p_zoom_end >= json_parameter.p_zoom_start ? 1 : -1;
            const updatedZoom = json_parameter.currentZoom + json_parameter.p_speed * directionZoom;
            const newZoom = directionZoom > 0 ? Math.min(updatedZoom, json_parameter.p_zoom_end) : Math.max(updatedZoom, json_parameter.p_zoom_end);
            json_parameter.currentZoom = newZoom;
            json_parameter.p_instance.style.scale = json_parameter.currentZoom;
            const reachedEndZoom = (directionZoom > 0 && newZoom >= json_parameter.p_zoom_end) || (directionZoom < 0 && newZoom <= json_parameter.p_zoom_end);
            if (reachedEndZoom) {
                json_parameter.dirty = true;
            }
        };
        this.alpha = (p_instance, json_parameter) => {
            const effectType = "alpha";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentAlpha: json_parameter.p_alpha_start });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.alphaStep = (json_parameter) => {
            const directionAlpha = json_parameter.p_alpha_end >= json_parameter.p_alpha_start ? 1 : -1;
            const updatedAlpha = json_parameter.currentAlpha + json_parameter.p_speed * directionAlpha;
            const newAlpha = directionAlpha > 0 ? Math.min(updatedAlpha, json_parameter.p_alpha_end) : Math.max(updatedAlpha, json_parameter.p_alpha_end);
            json_parameter.currentAlpha = newAlpha;
            json_parameter.p_instance.style.opacity = json_parameter.currentAlpha;
            const reachedEndAlpha = (directionAlpha > 0 && newAlpha >= json_parameter.p_alpha_end) || (directionAlpha < 0 && newAlpha <= json_parameter.p_alpha_end);
            if (reachedEndAlpha) {
                json_parameter.dirty = true;
            }
        };
        this.textShadow = (p_instance, json_parameter) => {
            const effectType = "textShadow";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.textShadowStep = (json_parameter) => {
            const updatedShadow = djs.di.px(djs.di.rw(json_parameter.p_x)) + " " + djs.di.px(djs.di.rw(json_parameter.p_y)) + " " + djs.di.px(djs.di.rw(json_parameter.p_z)) + " " + json_parameter.p_color;
            json_parameter.p_instance.style.textShadow = updatedShadow;
            json_parameter.dirty = true;
        };
        this.boxShadow = (p_instance, json_parameter) => {
            const effectType = "boxShadow";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.boxShadowStep = (json_parameter) => {
            const updatedShadow = djs.di.px(djs.di.rw(json_parameter.p_x)) + " " + djs.di.px(djs.di.rw(json_parameter.p_y)) + " " + djs.di.px(djs.di.rw(json_parameter.p_z)) + " " + json_parameter.p_color;
            json_parameter.p_instance.style.boxShadow = updatedShadow;
            json_parameter.dirty = true;
        };
        this.borderRadius = (p_instance, json_parameter) => {
            const effectType = "borderRadius";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.borderRadiusStep = (json_parameter) => {
            const updatedBorderRadius = djs.di.px(djs.di.rw(json_parameter.p_top_left)) + " " + djs.di.px(djs.di.rw(json_parameter.p_top_right)) + " " + djs.di.px(djs.di.rw(json_parameter.p_bottom_right)) + " " + djs.di.px(djs.di.rw(json_parameter.p_bottom_left));
            json_parameter.p_instance.style.borderRadius = updatedBorderRadius;
            json_parameter.dirty = true;
        };
        this.text = (p_instance, json_parameter) => {
            const effectType = "text";
            const effectWithType = Object.assign(Object.assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            const effectId = this.addEffect(effectWithType);
            return effectId;
        };
        this.textStep = (json_parameter) => {
            json_parameter.p_instance.textContent = json_parameter.p_text;
            json_parameter.dirty = true;
        };
        console.log("djs_effect_library:constructor");
        this.tick();
    }
}
