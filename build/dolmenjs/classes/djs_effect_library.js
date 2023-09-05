var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var djs_effect_library = (function () {
    function djs_effect_library(djs) {
        var _this = this;
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
        this.tick = function () {
            _this.doEffects();
            setTimeout(function () {
                _this.tick();
            }, 5);
        };
        this.doEffects = function () {
            for (var key in _this.effects) {
                var effect = _this.effects[key];
                var effectType = effect.effectType;
                var effectFunctions = {
                    scroll: _this.scrollStep,
                    zoom: _this.zoomStep,
                    alpha: _this.alphaStep,
                    textShadow: _this.textShadowStep,
                    boxShadow: _this.boxShadowStep,
                    borderRadius: _this.borderRadiusStep,
                    text: _this.textStep,
                };
                var effectFunction = effectFunctions[effectType];
                if (effectFunction) {
                    effectFunction(effect);
                }
            }
            for (var key in _this.effects) {
                var effect = _this.effects[key];
                if ("dirty" in effect) {
                    _this.dropEffect(key);
                }
            }
        };
        this.addEffect = function (json_parameter) {
            var effectId = "fx".concat(_this.effectCounter);
            var effectWithId = __assign(__assign({}, json_parameter), { effectId: effectId });
            _this.effects[effectId] = effectWithId;
            _this.effectCounter++;
            return effectId;
        };
        this.dropEffect = function (effectId) {
            delete _this.effects[effectId];
        };
        this.scroll = function (p_instance, json_parameter) {
            var effectType = "scroll";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentX: json_parameter.p_x_start, currentY: json_parameter.p_y_start });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.scrollStep = function (json_parameter) {
            var directionX = json_parameter.p_x_end >= json_parameter.p_x_start ? 1 : -1;
            var directionY = json_parameter.p_y_end >= json_parameter.p_y_start ? 1 : -1;
            var updatedX = json_parameter.currentX + json_parameter.p_speed * directionX;
            var updatedY = json_parameter.currentY + json_parameter.p_speed * directionY;
            var newX = directionX > 0 ? Math.min(updatedX, json_parameter.p_x_end) : Math.max(updatedX, json_parameter.p_x_end);
            var newY = directionY > 0 ? Math.min(updatedY, json_parameter.p_y_end) : Math.max(updatedY, json_parameter.p_y_end);
            json_parameter.currentX = newX;
            json_parameter.currentY = newY;
            json_parameter.p_instance.style.left = json_parameter.currentX;
            json_parameter.p_instance.style.top = json_parameter.currentY;
            var reachedEndX = (directionX > 0 && newX >= json_parameter.p_x_end) || (directionX < 0 && newX <= json_parameter.p_x_end);
            var reachedEndY = (directionY > 0 && newY >= json_parameter.p_y_end) || (directionY < 0 && newY <= json_parameter.p_y_end);
            if (reachedEndX && reachedEndY) {
                json_parameter.dirty = true;
            }
        };
        this.zoom = function (p_instance, json_parameter) {
            var effectType = "zoom";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentZoom: json_parameter.p_zoom_start });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.zoomStep = function (json_parameter) {
            var directionZoom = json_parameter.p_zoom_end >= json_parameter.p_zoom_start ? 1 : -1;
            var updatedZoom = json_parameter.currentZoom + json_parameter.p_speed * directionZoom;
            var newZoom = directionZoom > 0 ? Math.min(updatedZoom, json_parameter.p_zoom_end) : Math.max(updatedZoom, json_parameter.p_zoom_end);
            json_parameter.currentZoom = newZoom;
            json_parameter.p_instance.style.scale = json_parameter.currentZoom;
            var reachedEndZoom = (directionZoom > 0 && newZoom >= json_parameter.p_zoom_end) || (directionZoom < 0 && newZoom <= json_parameter.p_zoom_end);
            if (reachedEndZoom) {
                json_parameter.dirty = true;
            }
        };
        this.alpha = function (p_instance, json_parameter) {
            var effectType = "alpha";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentAlpha: json_parameter.p_alpha_start });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.alphaStep = function (json_parameter) {
            var directionAlpha = json_parameter.p_alpha_end >= json_parameter.p_alpha_start ? 1 : -1;
            var updatedAlpha = json_parameter.currentAlpha + json_parameter.p_speed * directionAlpha;
            var newAlpha = directionAlpha > 0 ? Math.min(updatedAlpha, json_parameter.p_alpha_end) : Math.max(updatedAlpha, json_parameter.p_alpha_end);
            json_parameter.currentAlpha = newAlpha;
            json_parameter.p_instance.style.opacity = json_parameter.currentAlpha;
            var reachedEndAlpha = (directionAlpha > 0 && newAlpha >= json_parameter.p_alpha_end) || (directionAlpha < 0 && newAlpha <= json_parameter.p_alpha_end);
            if (reachedEndAlpha) {
                json_parameter.dirty = true;
            }
        };
        this.textShadow = function (p_instance, json_parameter) {
            var effectType = "textShadow";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.textShadowStep = function (json_parameter) {
            var updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;
            json_parameter.p_instance.style.textShadow = updatedShadow;
            json_parameter.dirty = true;
        };
        this.boxShadow = function (p_instance, json_parameter) {
            var effectType = "boxShadow";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.boxShadowStep = function (json_parameter) {
            var updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;
            json_parameter.p_instance.style.boxShadow = updatedShadow;
            json_parameter.dirty = true;
        };
        this.borderRadius = function (p_instance, json_parameter) {
            var effectType = "borderRadius";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.borderRadiusStep = function (json_parameter) {
            var updatedBorderRadius = px(rw(json_parameter.p_top_left)) + " " + px(rw(json_parameter.p_top_right)) + " " + px(rw(json_parameter.p_bottom_right)) + " " + px(rw(json_parameter.p_bottom_left));
            json_parameter.p_instance.style.borderRadius = updatedBorderRadius;
            json_parameter.dirty = true;
        };
        this.text = function (p_instance, json_parameter) {
            var effectType = "text";
            var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
            var effectId = _this.addEffect(effectWithType);
            return effectId;
        };
        this.textStep = function (json_parameter) {
            json_parameter.p_instance.textContent = json_parameter.p_text;
            json_parameter.dirty = true;
        };
        console.log("djs_effect_library:constructor");
        this.djs = djs;
        this.tick();
    }
    return djs_effect_library;
}());
export { djs_effect_library };
