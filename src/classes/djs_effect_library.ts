import { djs } from "../dolmenjs.js";

export class djs_effect_library {
    constructor() {
        console.log("djs_effect_library:constructor");

        this.tick();
    }

    private effects: { [key: string]: any } = {};
    private effectCounter: number = 1;

    public preset = {
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
    }

    tick = () => {
        this.doEffects();
        setTimeout(() => {
            this.tick();
        }, 5);
    };

    private doEffects = () => {
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

        // Drop les effets dirty
        for (const key in this.effects) {
            const effect = this.effects[key];
            if ("dirty" in effect) {
                this.dropEffect(key);
            }
        }
    };

    private addEffect = (json_parameter: any) => {
        const effectId = `fx${this.effectCounter}`;
        const effectWithId = {
            ...json_parameter,
            effectId: effectId
        };
        this.effects[effectId] = effectWithId;
        this.effectCounter++;
        return effectId;
    };

    private dropEffect = (effectId: string) => {
        delete this.effects[effectId];
    };

    // *******************************************************
    // ******************** Scroll Effect ********************
    // *******************************************************
    public scroll = (p_instance, json_parameter: any) => {
        const effectType = "scroll"; // Remplacez "scroll" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance,
            currentX: json_parameter.p_x_start,
            currentY: json_parameter.p_y_start
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public scrollStep = (json_parameter: any) => {
        // Déterminer la direction du défilement
        const directionX = json_parameter.p_x_end >= json_parameter.p_x_start ? 1 : -1;
        const directionY = json_parameter.p_y_end >= json_parameter.p_y_start ? 1 : -1;

        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
        const updatedX = json_parameter.currentX + json_parameter.p_speed * directionX;
        const updatedY = json_parameter.currentY + json_parameter.p_speed * directionY;

        // Limiter les valeurs actuelles en fonction des limites maximales
        const newX = directionX > 0 ? Math.min(updatedX, json_parameter.p_x_end) : Math.max(updatedX, json_parameter.p_x_end);
        const newY = directionY > 0 ? Math.min(updatedY, json_parameter.p_y_end) : Math.max(updatedY, json_parameter.p_y_end);

        // Mettre à jour les valeurs actuelles dans l'effet
        json_parameter.currentX = newX;
        json_parameter.currentY = newY;

        // TODO EFFECT
        //console.log(json_parameter.effectId + ", X:" + json_parameter.currentX + ", Y:" + json_parameter.currentY);
        json_parameter.p_instance.style.left = json_parameter.currentX;
        json_parameter.p_instance.style.top = json_parameter.currentY;

        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
        const reachedEndX = (directionX > 0 && newX >= json_parameter.p_x_end) || (directionX < 0 && newX <= json_parameter.p_x_end);
        const reachedEndY = (directionY > 0 && newY >= json_parameter.p_y_end) || (directionY < 0 && newY <= json_parameter.p_y_end);

        if (reachedEndX && reachedEndY) {
            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
            json_parameter.dirty = true;
        }
    };

    // *****************************************************
    // ******************** Zoom Effect ********************
    // *****************************************************
    public zoom = (p_instance, json_parameter: any) => {
        const effectType = "zoom"; // Remplacez "zoom" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance,
            currentZoom: json_parameter.p_zoom_start
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public zoomStep = (json_parameter: any) => {
        // Déterminer la direction du défilement
        const directionZoom = json_parameter.p_zoom_end >= json_parameter.p_zoom_start ? 1 : -1;

        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
        const updatedZoom = json_parameter.currentZoom + json_parameter.p_speed * directionZoom;

        // Limiter les valeurs actuelles en fonction des limites maximales
        const newZoom = directionZoom > 0 ? Math.min(updatedZoom, json_parameter.p_zoom_end) : Math.max(updatedZoom, json_parameter.p_zoom_end);

        // Mettre à jour les valeurs actuelles dans l'effet
        json_parameter.currentZoom = newZoom;

        // TODO EFFECT
        //console.log(json_parameter.effectId + ", Zoom:" + json_parameter.currentZoom);
        json_parameter.p_instance.style.scale = json_parameter.currentZoom;

        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
        const reachedEndZoom = (directionZoom > 0 && newZoom >= json_parameter.p_zoom_end) || (directionZoom < 0 && newZoom <= json_parameter.p_zoom_end);

        if (reachedEndZoom) {
            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
            json_parameter.dirty = true;
        }
    };

    // *****************************************************
    // ******************** Alpha Effect ********************
    // *****************************************************
    public alpha = (p_instance, json_parameter: any) => {
        const effectType = "alpha"; // Remplacez "alpha" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance,
            currentAlpha: json_parameter.p_alpha_start
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public alphaStep = (json_parameter: any) => {
        // Déterminer la direction du défilement
        const directionAlpha = json_parameter.p_alpha_end >= json_parameter.p_alpha_start ? 1 : -1;

        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
        const updatedAlpha = json_parameter.currentAlpha + json_parameter.p_speed * directionAlpha;

        // Limiter les valeurs actuelles en fonction des limites maximales
        const newAlpha = directionAlpha > 0 ? Math.min(updatedAlpha, json_parameter.p_alpha_end) : Math.max(updatedAlpha, json_parameter.p_alpha_end);

        // Mettre à jour les valeurs actuelles dans l'effet
        json_parameter.currentAlpha = newAlpha;

        // TODO EFFECT
        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
        json_parameter.p_instance.style.opacity = json_parameter.currentAlpha;

        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
        const reachedEndAlpha = (directionAlpha > 0 && newAlpha >= json_parameter.p_alpha_end) || (directionAlpha < 0 && newAlpha <= json_parameter.p_alpha_end);

        if (reachedEndAlpha) {
            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
            json_parameter.dirty = true;
        }
    };

    // ************************************************************
    // ******************** Text Shadow Effect ********************
    // ************************************************************
    public textShadow = (p_instance, json_parameter: any) => {
        const effectType = "textShadow"; // Remplacez "textShadow" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public textShadowStep = (json_parameter: any) => {
        // TODO EFFECT
        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
        const updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;

        json_parameter.p_instance.style.textShadow = updatedShadow;
        json_parameter.dirty = true;
    };

    // ***********************************************************
    // ******************** Box Shadow Effect ********************
    // ***********************************************************
    public boxShadow = (p_instance, json_parameter: any) => {
        const effectType = "boxShadow"; // Remplacez "boxShadow" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public boxShadowStep = (json_parameter: any) => {
        // TODO EFFECT
        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
        const updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;

        json_parameter.p_instance.style.boxShadow = updatedShadow;
        json_parameter.dirty = true;
    };


    // ***********************************************************
    // ******************** Box Shadow Effect ********************
    // ***********************************************************
    public borderRadius = (p_instance, json_parameter: any) => {
        const effectType = "borderRadius"; // Remplacez "border" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public borderRadiusStep = (json_parameter: any) => {
        // TODO EFFECT
        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
        const updatedBorderRadius = px(rw(json_parameter.p_top_left)) + " " + px(rw(json_parameter.p_top_right)) + " " + px(rw(json_parameter.p_bottom_right)) + " " + px(rw(json_parameter.p_bottom_left));

        json_parameter.p_instance.style.borderRadius = updatedBorderRadius;
        json_parameter.dirty = true;
    };

    // ***********************************************************
    // ******************** Box Shadow Effect ********************
    // ***********************************************************
    public text = (p_instance, json_parameter: any) => {
        const effectType = "text"; // Remplacez "border" par le type d'effet réel

        const effectWithType = {
            ...json_parameter,
            effectType: effectType,
            p_instance: p_instance
        };

        const effectId = this.addEffect(effectWithType);
        return effectId;
    };

    public textStep = (json_parameter: any) => {
        json_parameter.p_instance.textContent = json_parameter.p_text;
        json_parameter.dirty = true;
    };
}
//EOF  