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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("classes/djs_native_interface", [], function (exports_1, context_1) {
    "use strict";
    var djs_native_interface;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            djs_native_interface = /** @class */ (function () {
                function djs_native_interface() {
                    // Fonction pour charger le fichier JSON à partir de l'URL
                    this.fetchJSON = function (filePath) {
                        return new Promise(function (resolve, reject) {
                            if (typeof window.nativeInterface === "undefined") {
                                // Utilisation de fetch pour charger le fichier JSON à partir de l'URL
                                fetch(filePath)
                                    .then(function (response) {
                                    if (!response.ok) {
                                        reject(new Error("Erreur lors du chargement du fichier JSON."));
                                    }
                                    else {
                                        resolve(response.json());
                                    }
                                })
                                    .catch(function (error) {
                                    reject(error);
                                });
                            }
                            else {
                                // Utilisation de l'interface native dans le WebView
                                try {
                                    var fileData = JSON.parse(window.nativeInterface.fetchJSON(filePath));
                                    console.log(fileData);
                                    resolve(fileData);
                                }
                                catch (error) {
                                    reject(error);
                                }
                            }
                        });
                    };
                    // Fonction pour charger le fichier JS à partir de l'URL
                    this.loadJS = function (filePath) {
                        return new Promise(function (resolve, reject) {
                            if (typeof window.nativeInterface === "undefined") {
                                // Utilisation de fetch pour charger le fichier JS à partir de l'URL
                                fetch(filePath)
                                    .then(function (response) {
                                    if (!response.ok) {
                                        reject(new Error("Erreur lors du chargement du fichier JS."));
                                    }
                                    else {
                                        response.text()
                                            .then(function (fileContent) {
                                            resolve(fileContent);
                                        })
                                            .catch(function (error) {
                                            reject(error);
                                        });
                                    }
                                })
                                    .catch(function (error) {
                                    reject(error);
                                });
                            }
                            else {
                                // Utilisation de l'interface native dans le WebView
                                try {
                                    var fileData = window.nativeInterface.loadJS(filePath);
                                    resolve(fileData);
                                }
                                catch (error) {
                                    reject(error);
                                }
                            }
                        });
                    };
                }
                return djs_native_interface;
            }());
            exports_1("djs_native_interface", djs_native_interface);
        }
    };
});
System.register("classes/djs_colors", [], function (exports_2, context_2) {
    "use strict";
    var djs_colors;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            djs_colors = /** @class */ (function () {
                function djs_colors() {
                    this.none = "transparent"; // Couleur "transparent" définie directement dans l'instance de classe 'djs_colors'.
                    // Méthode pour ajouter une opacité à une couleur donnée au format hsl.
                    this.alpha = function (color, alpha) {
                        var hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/;
                        var match = color.match(hslRegex);
                        if (!match) {
                            throw new Error("La chaîne de couleur n'est pas au format hsl.");
                        }
                        var hue = match[1];
                        var saturation = match[2];
                        var lightness = match[3];
                        return "hsla(".concat(hue, ",").concat(saturation, ",").concat(lightness, ",").concat(alpha, ")"); // Retourne la couleur avec l'opacité spécifiée.
                    };
                    // Appel de la méthode 'generateColorShades' pour générer différentes teintes de couleurs.
                    // Les teintes générées sont stockées dans des variables correspondant aux différents groupes de couleurs.
                    var blues = this.generateColorShades("blue", 0, [210, 85, 75], 9, [210, 40, 30]);
                    var lightBlues = this.generateColorShades("lightblue", 0, [210, 80, 90], 9, [210, 35, 45]);
                    var greens = this.generateColorShades("green", 0, [135, 85, 75], 9, [135, 40, 30]);
                    var lightGreens = this.generateColorShades("lightgreen", 0, [135, 80, 90], 9, [135, 35, 45]);
                    var yellows = this.generateColorShades("yellow", 0, [60, 85, 75], 9, [60, 40, 30]);
                    var lightYellows = this.generateColorShades("lightyellow", 0, [60, 80, 90], 9, [60, 35, 45]);
                    var oranges = this.generateColorShades("orange", 0, [35, 85, 75], 9, [35, 40, 30]);
                    var lightOranges = this.generateColorShades("lightorange", 0, [35, 80, 90], 9, [35, 35, 45]);
                    var reds = this.generateColorShades("red", 0, [0, 85, 75], 9, [0, 40, 30]);
                    var lightReds = this.generateColorShades("lightred", 0, [0, 80, 90], 9, [0, 35, 45]);
                    var grays = this.generateColorShades("gray", 0, [210, 10, 100], 9, [210, 1, 10]);
                    var lightGrays = this.generateColorShades("lightgray", 0, [210, 10, 100], 9, [210, 1, 55]);
                    var darkGrays = this.generateColorShades("darkgray", 0, [210, 10, 50], 9, [210, 1, 5]);
                    // Utilisation de la fonction 'Object.assign' pour assigner les propriétés de chaque groupe de couleur
                    // (noms d'ID générés avec leurs valeurs de teintes) à l'instance de classe 'djs_colors'.
                    Object.assign(this, blues, lightBlues, greens, lightGreens, yellows, lightYellows, oranges, lightOranges, reds, lightReds, grays, lightGrays, darkGrays);
                }
                // Méthode privée pour générer les différentes teintes d'une couleur
                // en utilisant des valeurs HSL de départ et d'arrivée.
                // La fonction renvoie un objet contenant les noms d'ID (clé) et les couleurs correspondantes (valeur).
                djs_colors.prototype.generateColorShades = function (basename, // Le nom de base pour les noms d'ID des teintes de couleur générées.
                start, // L'indice de départ pour les teintes générées.
                hslStart, // Le triplet [H, S, L] de départ pour les valeurs HSL.
                end, // L'indice de fin pour les teintes générées.
                hslEnd // Le triplet [H, S, L] d'arrivée pour les valeurs HSL.
                ) {
                    var colors = {}; // Création d'un objet vide pour stocker les teintes de couleur générées.
                    var startHue = hslStart[0], startSaturation = hslStart[1], startLightness = hslStart[2]; // Extraction des valeurs HSL de départ.
                    var endHue = hslEnd[0], endSaturation = hslEnd[1], endLightness = hslEnd[2]; // Extraction des valeurs HSL d'arrivée.
                    // Calcul des étapes pour les valeurs HSL en fonction du nombre de teintes à générer.
                    var stepHue = (endHue - startHue) / (end - start);
                    var stepSaturation = (endSaturation - startSaturation) / (end - start);
                    var stepLightness = (endLightness - startLightness) / (end - start);
                    // Boucle pour générer les teintes de couleur et les stocker dans l'objet 'colors'.
                    for (var i = start; i <= end; i++) {
                        var hue = startHue + i * stepHue;
                        var saturation = startSaturation + i * stepSaturation;
                        var lightness = startLightness + i * stepLightness;
                        var shade = "hsl(".concat(hue, ",").concat(saturation, "%,").concat(lightness, "%)"); // Formatage de la teinte de couleur en format hsl.
                        colors["".concat(basename).concat(i)] = shade; // Ajout de la teinte dans l'objet 'colors' avec un nom d'ID basé sur 'basename' et l'indice 'i'.
                    }
                    return colors; // Renvoi de l'objet 'colors' contenant toutes les teintes générées avec leurs noms d'ID.
                };
                return djs_colors;
            }());
            exports_2("djs_colors", djs_colors);
        }
    };
});
System.register("classes/djs_action_library", [], function (exports_3, context_3) {
    "use strict";
    var djs_action_library;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            djs_action_library = /** @class */ (function () {
                function djs_action_library() {
                    this.goto = function (json_parameter) {
                        var scriptUrl = json_parameter.p_object;
                        var scriptElement = document.createElement("script");
                        if (typeof json_parameter.p_var_struct != "undefined") {
                            window.params[scriptUrl] = {};
                            window.params[scriptUrl].p_var_struct = json_parameter.p_var_struct;
                        }
                        scriptElement.src = scriptUrl + "?" + Date.now();
                        ;
                        scriptElement.onload = function () {
                            console.log(json_parameter.p_destruct);
                            djs_wm.destruct(json_parameter.p_destruct);
                        };
                        document.head.appendChild(scriptElement);
                    };
                }
                return djs_action_library;
            }());
            exports_3("djs_action_library", djs_action_library);
            window.params = {};
        }
    };
});
System.register("classes/djs_effect_library", [], function (exports_4, context_4) {
    "use strict";
    var djs_effect_library;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            djs_effect_library = /** @class */ (function () {
                function djs_effect_library() {
                    var _this = this;
                    this.effects = {};
                    this.effectCounter = 1;
                    this.preset = {
                        zoom: { p_zoom_start: 0, p_zoom_end: 1, p_speed: 0.01 },
                        zoom2: { p_zoom_start: 1, p_zoom_end: 2, p_speed: 0.01 },
                        alpha_show: { p_alpha_start: 0, p_alpha_end: 1, p_speed: 0.01 },
                        alpha_hide: { p_alpha_start: 1, p_alpha_end: 0, p_speed: 0.01 },
                        shadow: { p_x: -0.5, p_y: 0.5, p_z: 0.5, p_color: color.gray8 },
                        alpha_title_show: { p_alpha_start: 0, p_alpha_end: 1.00, p_speed: 0.01 },
                        shadow_title: { p_x: 0, p_y: 0.45, p_z: 0.45, p_color: color.gray8 },
                        alpha_subtitle_show: { p_alpha_start: 0, p_alpha_end: 0.85, p_speed: 0.01 },
                        shadow_subtitle: { p_x: 0, p_y: 0.50, p_z: 0.50, p_color: color.gray7 },
                        alpha_button_show: { p_alpha_start: 0, p_alpha_end: 0.70, p_speed: 0.01 },
                        shadow_button: { p_x: 0, p_y: 0.55, p_z: 0.55, p_color: color.gray9 },
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
                        // Drop les effets dirty
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
                    // *******************************************************
                    // ******************** Scroll Effect ********************
                    // *******************************************************
                    this.scroll = function (p_instance, json_parameter) {
                        var effectType = "scroll"; // Remplacez "scroll" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentX: json_parameter.p_x_start, currentY: json_parameter.p_y_start });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.scrollStep = function (json_parameter) {
                        // Déterminer la direction du défilement
                        var directionX = json_parameter.p_x_end >= json_parameter.p_x_start ? 1 : -1;
                        var directionY = json_parameter.p_y_end >= json_parameter.p_y_start ? 1 : -1;
                        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
                        var updatedX = json_parameter.currentX + json_parameter.p_speed * directionX;
                        var updatedY = json_parameter.currentY + json_parameter.p_speed * directionY;
                        // Limiter les valeurs actuelles en fonction des limites maximales
                        var newX = directionX > 0 ? Math.min(updatedX, json_parameter.p_x_end) : Math.max(updatedX, json_parameter.p_x_end);
                        var newY = directionY > 0 ? Math.min(updatedY, json_parameter.p_y_end) : Math.max(updatedY, json_parameter.p_y_end);
                        // Mettre à jour les valeurs actuelles dans l'effet
                        json_parameter.currentX = newX;
                        json_parameter.currentY = newY;
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", X:" + json_parameter.currentX + ", Y:" + json_parameter.currentY);
                        json_parameter.p_instance.style.left = json_parameter.currentX;
                        json_parameter.p_instance.style.top = json_parameter.currentY;
                        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
                        var reachedEndX = (directionX > 0 && newX >= json_parameter.p_x_end) || (directionX < 0 && newX <= json_parameter.p_x_end);
                        var reachedEndY = (directionY > 0 && newY >= json_parameter.p_y_end) || (directionY < 0 && newY <= json_parameter.p_y_end);
                        if (reachedEndX && reachedEndY) {
                            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
                            json_parameter.dirty = true;
                        }
                    };
                    // *****************************************************
                    // ******************** Zoom Effect ********************
                    // *****************************************************
                    this.zoom = function (p_instance, json_parameter) {
                        var effectType = "zoom"; // Remplacez "zoom" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentZoom: json_parameter.p_zoom_start });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.zoomStep = function (json_parameter) {
                        // Déterminer la direction du défilement
                        var directionZoom = json_parameter.p_zoom_end >= json_parameter.p_zoom_start ? 1 : -1;
                        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
                        var updatedZoom = json_parameter.currentZoom + json_parameter.p_speed * directionZoom;
                        // Limiter les valeurs actuelles en fonction des limites maximales
                        var newZoom = directionZoom > 0 ? Math.min(updatedZoom, json_parameter.p_zoom_end) : Math.max(updatedZoom, json_parameter.p_zoom_end);
                        // Mettre à jour les valeurs actuelles dans l'effet
                        json_parameter.currentZoom = newZoom;
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", Zoom:" + json_parameter.currentZoom);
                        json_parameter.p_instance.style.scale = json_parameter.currentZoom;
                        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
                        var reachedEndZoom = (directionZoom > 0 && newZoom >= json_parameter.p_zoom_end) || (directionZoom < 0 && newZoom <= json_parameter.p_zoom_end);
                        if (reachedEndZoom) {
                            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
                            json_parameter.dirty = true;
                        }
                    };
                    // *****************************************************
                    // ******************** Alpha Effect ********************
                    // *****************************************************
                    this.alpha = function (p_instance, json_parameter) {
                        var effectType = "alpha"; // Remplacez "alpha" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance, currentAlpha: json_parameter.p_alpha_start });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.alphaStep = function (json_parameter) {
                        // Déterminer la direction du défilement
                        var directionAlpha = json_parameter.p_alpha_end >= json_parameter.p_alpha_start ? 1 : -1;
                        // Mettre à jour les valeurs actuelles en ajoutant le pas p_speed
                        var updatedAlpha = json_parameter.currentAlpha + json_parameter.p_speed * directionAlpha;
                        // Limiter les valeurs actuelles en fonction des limites maximales
                        var newAlpha = directionAlpha > 0 ? Math.min(updatedAlpha, json_parameter.p_alpha_end) : Math.max(updatedAlpha, json_parameter.p_alpha_end);
                        // Mettre à jour les valeurs actuelles dans l'effet
                        json_parameter.currentAlpha = newAlpha;
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
                        json_parameter.p_instance.style.opacity = json_parameter.currentAlpha;
                        // Vérifier si les valeurs actuelles ont atteint les valeurs maximales
                        var reachedEndAlpha = (directionAlpha > 0 && newAlpha >= json_parameter.p_alpha_end) || (directionAlpha < 0 && newAlpha <= json_parameter.p_alpha_end);
                        if (reachedEndAlpha) {
                            // Les valeurs maximales sont atteintes, ajouter la propriété "dirty"
                            json_parameter.dirty = true;
                        }
                    };
                    // ************************************************************
                    // ******************** Text Shadow Effect ********************
                    // ************************************************************
                    this.textShadow = function (p_instance, json_parameter) {
                        var effectType = "textShadow"; // Remplacez "textShadow" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.textShadowStep = function (json_parameter) {
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
                        var updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;
                        json_parameter.p_instance.style.textShadow = updatedShadow;
                        json_parameter.dirty = true;
                    };
                    // ***********************************************************
                    // ******************** Box Shadow Effect ********************
                    // ***********************************************************
                    this.boxShadow = function (p_instance, json_parameter) {
                        var effectType = "boxShadow"; // Remplacez "boxShadow" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.boxShadowStep = function (json_parameter) {
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
                        var updatedShadow = px(rw(json_parameter.p_x)) + " " + px(rw(json_parameter.p_y)) + " " + px(rw(json_parameter.p_z)) + " " + json_parameter.p_color;
                        json_parameter.p_instance.style.boxShadow = updatedShadow;
                        json_parameter.dirty = true;
                    };
                    // ***********************************************************
                    // ******************** Box Shadow Effect ********************
                    // ***********************************************************
                    this.borderRadius = function (p_instance, json_parameter) {
                        var effectType = "borderRadius"; // Remplacez "border" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.borderRadiusStep = function (json_parameter) {
                        // TODO EFFECT
                        //console.log(json_parameter.effectId + ", Alpha:" + json_parameter.currentAlpha);
                        var updatedBorderRadius = px(rw(json_parameter.p_top_left)) + " " + px(rw(json_parameter.p_top_right)) + " " + px(rw(json_parameter.p_bottom_right)) + " " + px(rw(json_parameter.p_bottom_left));
                        json_parameter.p_instance.style.borderRadius = updatedBorderRadius;
                        json_parameter.dirty = true;
                    };
                    // ***********************************************************
                    // ******************** Box Shadow Effect ********************
                    // ***********************************************************
                    this.text = function (p_instance, json_parameter) {
                        var effectType = "text"; // Remplacez "border" par le type d'effet réel
                        var effectWithType = __assign(__assign({}, json_parameter), { effectType: effectType, p_instance: p_instance });
                        var effectId = _this.addEffect(effectWithType);
                        return effectId;
                    };
                    this.textStep = function (json_parameter) {
                        json_parameter.p_instance.textContent = json_parameter.p_text;
                        json_parameter.dirty = true;
                    };
                    this.tick();
                }
                return djs_effect_library;
            }());
            exports_4("djs_effect_library", djs_effect_library);
        }
    };
});
System.register("classes/djs_event_library", [], function (exports_5, context_5) {
    "use strict";
    var djs_event_library;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            djs_event_library = /** @class */ (function () {
                function djs_event_library() {
                    this.delay = function (json_parameter) {
                        setTimeout(function () {
                            if (json_parameter.on_delay && json_parameter.on_delay.p_object && json_parameter.on_delay.p_var_struct) {
                                var _a = json_parameter.on_delay, p_object = _a.p_object, p_instance = _a.p_instance, p_var_struct = _a.p_var_struct;
                                if (typeof p_object === "function") {
                                    if (p_instance == null) {
                                        p_object(p_var_struct);
                                    }
                                    else {
                                        p_object(p_instance, p_var_struct);
                                    }
                                }
                                else {
                                    console.error("La fonction fournie n'est pas valide.");
                                }
                            }
                        }, json_parameter.p_delay);
                    };
                    this.timer = function (json_parameter) {
                        djs_ml.add(json_parameter.p_timer, function () {
                            if (parseInt(djs_ti.getElapsedTimeSum()) >= json_parameter.p_timer) {
                                if (json_parameter.on_timer && json_parameter.on_timer.p_object && json_parameter.on_timer.p_var_struct) {
                                    var _a = json_parameter.on_timer, p_object = _a.p_object, p_instance = _a.p_instance, p_var_struct = _a.p_var_struct;
                                    if (typeof p_object === "function") {
                                        if (p_instance == null) {
                                            p_object(p_var_struct);
                                        }
                                        else {
                                            p_object(p_instance, p_var_struct);
                                        }
                                    }
                                    else {
                                        console.error("La fonction fournie n'est pas valide.");
                                    }
                                }
                                djs_ml.destroy(json_parameter.p_timer);
                            }
                        });
                    };
                    this.click = function (object, json_parameter) {
                        object.addEventListener("click", function () {
                            json_parameter.p_object(json_parameter.p_var_struct);
                        });
                    };
                }
                return djs_event_library;
            }());
            exports_5("djs_event_library", djs_event_library);
        }
    };
});
System.register("classes/djs_object_basic", [], function (exports_6, context_6) {
    "use strict";
    var djs_object_basic;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            djs_object_basic = /** @class */ (function () {
                function djs_object_basic() {
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
                        // Ajoutez d'autres styles de police si nécessaire
                        return element;
                    };
                }
                return djs_object_basic;
            }());
            exports_6("djs_object_basic", djs_object_basic);
        }
    };
});
System.register("classes/djs_object_advance", [], function (exports_7, context_7) {
    "use strict";
    var djs_object_advance;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            djs_object_advance = /** @class */ (function () {
                function djs_object_advance() {
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
                }
                return djs_object_advance;
            }());
            exports_7("djs_object_advance", djs_object_advance);
        }
    };
});
System.register("classes/djs_window_manager", [], function (exports_8, context_8) {
    "use strict";
    var djs_window_manager;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            djs_window_manager = /** @class */ (function () {
                function djs_window_manager() {
                    var _this = this;
                    // Nouvelle propriété pour stocker les fenêtres virtuelles avec leurs objets respectifs.
                    this.windowsWithObjects = {};
                    this.currentWindow = null; // Fenêtre virtuelle actuelle
                    // Méthode pour définir la fenêtre virtuelle actuelle.
                    this.setWindow = function (windowName) {
                        if (!(windowName in _this.windowsWithObjects)) {
                            _this.windowsWithObjects[windowName] = {};
                        }
                        _this.currentWindow = windowName;
                    };
                    this.set = this.setWindow;
                    // Méthode pour ajouter un objet à une fenêtre virtuelle avec un nom donné.
                    this.addObject = function (objectName, obj) {
                        // Vérification si la fenêtre virtuelle actuelle est définie.
                        if (_this.currentWindow) {
                            // Stockage de l'objet avec son nom et la fenêtre virtuelle associée.
                            _this.windowsWithObjects[_this.currentWindow][objectName] = obj;
                            return _this.windowsWithObjects[_this.currentWindow][objectName];
                        }
                        else {
                            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
                        }
                    };
                    this.add = this.addObject;
                    // Méthode pour obtenir un objet par son nom dans la fenêtre virtuelle actuelle.
                    this.getObject = function (objectName) {
                        // Vérification si la fenêtre virtuelle actuelle est définie.
                        if (_this.currentWindow) {
                            return _this.windowsWithObjects[_this.currentWindow][objectName] || null;
                        }
                        else {
                            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
                        }
                    };
                    this.get = this.getObject;
                    // Méthode pour détruire tous les objets dans la fenêtre virtuelle actuelle et vider la liste des fenêtres avec objets.
                    this.destructWindow = function (windowName) {
                        // Vérification si la fenêtre virtuelle actuelle est définie.
                        var windowObjects = _this.windowsWithObjects[windowName];
                        for (var name_1 in windowObjects) {
                            var obj = windowObjects[name_1];
                            if (obj instanceof HTMLElement) {
                                obj.remove();
                            }
                        }
                        delete _this.windowsWithObjects[windowName];
                    };
                    this.destruct = this.destructWindow;
                }
                return djs_window_manager;
            }());
            exports_8("djs_window_manager", djs_window_manager);
        }
    };
});
System.register("classes/djs_routes_manager", [], function (exports_9, context_9) {
    "use strict";
    var djs_route_manager;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            djs_route_manager = /** @class */ (function () {
                function djs_route_manager() {
                    var _this = this;
                    this.routes_loaded = false;
                    this.json_routes = {};
                    this.run_main = function () {
                        _this.run_route('/');
                    };
                    this.run_route = function (route_name) {
                        if (_this.routes_loaded) {
                            var element = document.createElement('script');
                            element.setAttribute("src", _this.json_routes["routes"][route_name]);
                            document.head.appendChild(element);
                        }
                        else {
                            setTimeout(function () {
                                _this.run_route(route_name); // Retry after 100 ms
                            }, 100);
                        }
                    };
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
                return djs_route_manager;
            }());
            exports_9("djs_route_manager", djs_route_manager);
        }
    };
});
System.register("classes/djs_elements_loader", [], function (exports_10, context_10) {
    "use strict";
    var djs_elements_loader;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            djs_elements_loader = /** @class */ (function () {
                function djs_elements_loader() {
                    var _this = this;
                    this.parameters = {};
                    this.add = function (p_object) { return __awaiter(_this, void 0, void 0, function () {
                        var response, textResponse, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, fetch("./elements/" + p_object + ".processed.js?" + Date.now())];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    textResponse = _a.sent();
                                    eval(textResponse);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    console.error("Erreur lors du chargement de l'élément :", error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); };
                }
                djs_elements_loader.prototype.set_parameters = function (p_var_struct) {
                    if (typeof p_var_struct === 'object') {
                        this.parameters = p_var_struct; // On remplace les paramètres actuels par les nouveaux
                    }
                    else {
                        console.error("Erreur : p_var_struct n'est pas un objet JSON valide.");
                    }
                };
                djs_elements_loader.prototype.get_parameters = function () {
                    return this.parameters; // On renvoie les paramètres actuels
                };
                return djs_elements_loader;
            }());
            exports_10("djs_elements_loader", djs_elements_loader);
        }
    };
});
System.register("classes/djs_main_loop", [], function (exports_11, context_11) {
    "use strict";
    var djs_main_loop;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            djs_main_loop = /** @class */ (function () {
                function djs_main_loop() {
                    this.callbacks = {};
                    this.timeInterval = 10; // Interval in milliseconds (1 second)
                    this.running = false; // Flag to track if the loop is running
                    this.start();
                }
                djs_main_loop.prototype.add = function (name, callback) {
                    if (!this.callbacks[name]) {
                        this.callbacks[name] = [];
                    }
                    this.callbacks[name].push(callback);
                };
                djs_main_loop.prototype.start = function () {
                    this.running = true;
                    this.runLoop();
                };
                djs_main_loop.prototype.runLoop = function () {
                    var _this = this;
                    if (!this.running)
                        return;
                    for (var name_2 in this.callbacks) {
                        var callbacks = this.callbacks[name_2];
                        for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                            var callback = callbacks_1[_i];
                            callback();
                        }
                    }
                    setTimeout(function () {
                        _this.runLoop();
                    }, this.timeInterval);
                };
                djs_main_loop.prototype.stop = function () {
                    this.running = false;
                };
                djs_main_loop.prototype.destroy = function (name) {
                    if (name in this.callbacks) {
                        delete this.callbacks[name];
                    }
                };
                return djs_main_loop;
            }());
            exports_11("djs_main_loop", djs_main_loop);
        }
    };
});
System.register("classes/djs_timer_interface", [], function (exports_12, context_12) {
    "use strict";
    var djs_timer_interface;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            djs_timer_interface = /** @class */ (function () {
                function djs_timer_interface() {
                    var _this = this;
                    // Initialiser la somme à 0
                    this.elapsedTimeSum = 0;
                    this.lastUpdateTime = Date.now();
                    this.isPaused = false;
                    this.formattedTime = '';
                    this.reset = function () {
                        _this.elapsedTimeSum = 0;
                        _this.lastUpdateTime = Date.now();
                        _this.isPaused = false;
                        _this.formattedTime = '';
                    };
                    this.loop = function () {
                        _this.update();
                        setTimeout(function () {
                            _this.loop();
                        }, 1);
                    };
                    // Obtient le temps actuel en milliseconde
                    // Ajouter une fonction de rappel avec un nom associé
                    this.update = function () {
                        var currentTime = Date.now();
                        if (!_this.isPaused) {
                            // Calcul la différence en milliseconde depuis la dernière mise a jour
                            var deltaTime = currentTime - _this.lastUpdateTime;
                            _this.elapsedTimeSum += deltaTime;
                            // Fais la somme en ajoutant la différence en milliseconde
                            var totalSeconds = Math.floor(_this.elapsedTimeSum / 1000);
                            var totalMilliseconds = Math.floor((_this.elapsedTimeSum % 1000) / 10);
                            _this.formattedTime = "".concat(totalSeconds, ".").concat(totalMilliseconds.toString().padStart(2, '0'));
                        }
                        _this.lastUpdateTime = currentTime;
                    };
                    this.getElapsedTimeSum = function () {
                        return _this.elapsedTimeSum;
                    };
                    this.getFormattedTime = function () {
                        return _this.formattedTime;
                    };
                    // Pour arrêter la boucle principale et retirer la fonction de rappel
                    this.pause = function () {
                        _this.isPaused = !_this.isPaused;
                    };
                    this.loop();
                }
                return djs_timer_interface;
            }());
            exports_12("djs_timer_interface", djs_timer_interface);
        }
    };
});
System.register("classes/djs_fonts", [], function (exports_13, context_13) {
    "use strict";
    var djs_fonts;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            djs_fonts = /** @class */ (function () {
                function djs_fonts() {
                    this.arial95 = "font-family: Arial; font-size: " + rw(9.5) + "; letter-spacing: " + rw(0.65) + "px;";
                    this.arial90 = "font-family: Arial; font-size: " + rw(9.0) + "; letter-spacing: " + rw(0.60) + "px;";
                    this.arial85 = "font-family: Arial; font-size: " + rw(8.5) + "; letter-spacing: " + rw(0.55) + "px;";
                    this.arial80 = "font-family: Arial; font-size: " + rw(8.0) + "; letter-spacing: " + rw(0.50) + "px;";
                    this.arial75 = "font-family: Arial; font-size: " + rw(7.5) + "; letter-spacing: " + rw(0.45) + "px;";
                    this.arial70 = "font-family: Arial; font-size: " + rw(7.0) + "; letter-spacing: " + rw(0.40) + "px;";
                    this.arial65 = "font-family: Arial; font-size: " + rw(6.5) + "; letter-spacing: " + rw(0.35) + "px;";
                    this.arial60 = "font-family: Arial; font-size: " + rw(6.0) + "; letter-spacing: " + rw(0.30) + "px;";
                    this.arial55 = "font-family: Arial; font-size: " + rw(5.5) + "; letter-spacing: " + rw(0.25) + "px;";
                    this.arial50 = "font-family: Arial; font-size: " + rw(5.0) + "; letter-spacing: " + rw(0.20) + "px;";
                    this.arial45 = "font-family: Arial; font-size: " + rw(4.5) + "; letter-spacing: " + rw(0.15) + "px;";
                    this.arial40 = "font-family: Arial; font-size: " + rw(4.0) + "; letter-spacing: " + rw(0.10) + "px;";
                    this.arial35 = "font-family: Arial; font-size: " + rw(3.5) + "; letter-spacing: " + rw(0.05) + "px;";
                    this.arial30 = "font-family: Arial; font-size: " + rw(3.0) + "; letter-spacing: " + rw(0.00) + "px;";
                    this.center = "djs-font-halign-center";
                    this.gray0 = "djs-font-gray0";
                    this.gray2 = "djs-font-gray2";
                }
                return djs_fonts;
            }());
            exports_13("djs_fonts", djs_fonts);
        }
    };
});
System.register("dolmenjs", ["classes/djs_native_interface", "classes/djs_colors", "classes/djs_action_library", "classes/djs_effect_library", "classes/djs_event_library", "classes/djs_object_basic", "classes/djs_object_advance", "classes/djs_window_manager", "./classes/djs_dimensions", "classes/djs_routes_manager", "classes/djs_elements_loader", "classes/djs_main_loop", "classes/djs_timer_interface", "classes/djs_fonts"], function (exports_14, context_14) {
    "use strict";
    var djs_native_interface_1, djs_colors_1, djs_action_library_1, djs_effect_library_1, djs_event_library_1, djs_object_basic_1, djs_object_advance_1, djs_window_manager_1, djs_dimensions_1, djs_routes_manager_1, djs_elements_loader_1, djs_main_loop_1, djs_timer_interface_1, djs_fonts_1, dolmenjs, djs;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (djs_native_interface_1_1) {
                djs_native_interface_1 = djs_native_interface_1_1;
            },
            function (djs_colors_1_1) {
                djs_colors_1 = djs_colors_1_1;
            },
            function (djs_action_library_1_1) {
                djs_action_library_1 = djs_action_library_1_1;
            },
            function (djs_effect_library_1_1) {
                djs_effect_library_1 = djs_effect_library_1_1;
            },
            function (djs_event_library_1_1) {
                djs_event_library_1 = djs_event_library_1_1;
            },
            function (djs_object_basic_1_1) {
                djs_object_basic_1 = djs_object_basic_1_1;
            },
            function (djs_object_advance_1_1) {
                djs_object_advance_1 = djs_object_advance_1_1;
            },
            function (djs_window_manager_1_1) {
                djs_window_manager_1 = djs_window_manager_1_1;
            },
            function (djs_dimensions_1_1) {
                djs_dimensions_1 = djs_dimensions_1_1;
            },
            function (djs_routes_manager_1_1) {
                djs_routes_manager_1 = djs_routes_manager_1_1;
            },
            function (djs_elements_loader_1_1) {
                djs_elements_loader_1 = djs_elements_loader_1_1;
            },
            function (djs_main_loop_1_1) {
                djs_main_loop_1 = djs_main_loop_1_1;
            },
            function (djs_timer_interface_1_1) {
                djs_timer_interface_1 = djs_timer_interface_1_1;
            },
            function (djs_fonts_1_1) {
                djs_fonts_1 = djs_fonts_1_1;
            }
        ],
        execute: function () {
            dolmenjs = /** @class */ (function () {
                function dolmenjs() {
                    this.ac = new djs_action_library_1.djs_action_library();
                    this.co = new djs_colors_1.djs_colors();
                    this.di = new djs_dimensions_1.djs_dimensions();
                    this.fx = new djs_effect_library_1.djs_effect_library();
                    this.el = new djs_elements_loader_1.djs_elements_loader();
                    this.ev = new djs_event_library_1.djs_event_library();
                    this.fo = new djs_fonts_1.djs_fonts();
                    this.ml = new djs_main_loop_1.djs_main_loop();
                    this.ni = new djs_native_interface_1.djs_native_interface();
                    this.oa = new djs_object_advance_1.djs_object_advance();
                    this.ob = new djs_object_basic_1.djs_object_basic();
                    this.rm = new djs_routes_manager_1.djs_routes_manager();
                    this.ti = new djs_timer_interface_1.djs_timer_interface();
                    this.wm = new djs_window_manager_1.djs_window_manager();
                }
                return dolmenjs;
            }());
            // Créer une instance globale
            djs = new dolmenjs();
            exports_14("default", djs);
        }
    };
});
System.register("classes/djs_dimension", [], function (exports_15, context_15) {
    "use strict";
    var djs_dimensions;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            djs_dimensions = /** @class */ (function () {
                function djs_dimensions() {
                    this.vh = function (h_size) {
                        var viewHeight = window.innerHeight;
                        return h_size * (viewHeight / 100);
                    };
                    this.vw = function (w_size) {
                        var viewWidth = window.innerWidth;
                        return w_size * (viewWidth / 100);
                    };
                    this.rh = function (h_size) {
                        return h_size * vh(1);
                    };
                    this.rw = function (w_size) {
                        return w_size * vw(1);
                    };
                    this.px = function (size) {
                        return size + "px";
                    };
                }
                return djs_dimensions;
            }());
            exports_15("djs_dimensions", djs_dimensions);
        }
    };
});
