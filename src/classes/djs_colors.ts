import { dolmenjs } from "../dolmenjs.js";

export class djs_colors {
    djs: dolmenjs;

    constructor(djs: dolmenjs) {
        console.log("djs_colors:constructor");

        this.djs = djs;

        // Appel de la méthode 'generateColorShades' pour générer différentes teintes de couleurs.
        // Les teintes générées sont stockées dans des variables correspondant aux différents groupes de couleurs.
        const blues = this.generateColorShades("blue", 0, [210, 85, 75], 9, [210, 40, 30]);
        const lightBlues = this.generateColorShades("lightblue", 0, [210, 80, 90], 9, [210, 35, 45]);
        const greens = this.generateColorShades("green", 0, [135, 85, 75], 9, [135, 40, 30]);
        const lightGreens = this.generateColorShades("lightgreen", 0, [135, 80, 90], 9, [135, 35, 45]);
        const yellows = this.generateColorShades("yellow", 0, [60, 85, 75], 9, [60, 40, 30]);
        const lightYellows = this.generateColorShades("lightyellow", 0, [60, 80, 90], 9, [60, 35, 45]);
        const oranges = this.generateColorShades("orange", 0, [35, 85, 75], 9, [35, 40, 30]);
        const lightOranges = this.generateColorShades("lightorange", 0, [35, 80, 90], 9, [35, 35, 45]);
        const reds = this.generateColorShades("red", 0, [0, 85, 75], 9, [0, 40, 30]);
        const lightReds = this.generateColorShades("lightred", 0, [0, 80, 90], 9, [0, 35, 45]);
        const grays = this.generateColorShades("gray", 0, [210, 10, 100], 9, [210, 1, 10]);
        const lightGrays = this.generateColorShades("lightgray", 0, [210, 10, 100], 9, [210, 1, 55]);
        const darkGrays = this.generateColorShades("darkgray", 0, [210, 10, 50], 9, [210, 1, 5]);

        // Utilisation de la fonction 'Object.assign' pour assigner les propriétés de chaque groupe de couleur
        // (noms d'ID générés avec leurs valeurs de teintes) à l'instance de classe 'djs_colors'.
        Object.assign(
            this,
            blues, lightBlues, greens, lightGreens, yellows, lightYellows,
            oranges, lightOranges, reds, lightReds, grays, lightGrays, darkGrays
        );
    }

    // Méthode privée pour générer les différentes teintes d'une couleur
    // en utilisant des valeurs HSL de départ et d'arrivée.
    // La fonction renvoie un objet contenant les noms d'ID (clé) et les couleurs correspondantes (valeur).
    private generateColorShades(
        basename: string,         // Le nom de base pour les noms d'ID des teintes de couleur générées.
        start: number,            // L'indice de départ pour les teintes générées.
        hslStart: [number, number, number],  // Le triplet [H, S, L] de départ pour les valeurs HSL.
        end: number,              // L'indice de fin pour les teintes générées.
        hslEnd: [number, number, number]     // Le triplet [H, S, L] d'arrivée pour les valeurs HSL.
    ): { [key: string]: string } { // La signature de retour est un objet avec des clés (noms d'ID) et des valeurs (couleurs en format hsl).

        const colors: { [key: string]: string } = {}; // Création d'un objet vide pour stocker les teintes de couleur générées.
        const [startHue, startSaturation, startLightness] = hslStart; // Extraction des valeurs HSL de départ.
        const [endHue, endSaturation, endLightness] = hslEnd;         // Extraction des valeurs HSL d'arrivée.

        // Calcul des étapes pour les valeurs HSL en fonction du nombre de teintes à générer.
        const stepHue = (endHue - startHue) / (end - start);
        const stepSaturation = (endSaturation - startSaturation) / (end - start);
        const stepLightness = (endLightness - startLightness) / (end - start);

        // Boucle pour générer les teintes de couleur et les stocker dans l'objet 'colors'.
        for (let i = start; i <= end; i++) {
            const hue = startHue + i * stepHue;
            const saturation = startSaturation + i * stepSaturation;
            const lightness = startLightness + i * stepLightness;
            const shade = `hsl(${hue},${saturation}%,${lightness}%)`; // Formatage de la teinte de couleur en format hsl.
            colors[`${basename}${i}`] = shade; // Ajout de la teinte dans l'objet 'colors' avec un nom d'ID basé sur 'basename' et l'indice 'i'.
        }

        return colors; // Renvoi de l'objet 'colors' contenant toutes les teintes générées avec leurs noms d'ID.

    }

    none = "transparent"; // Couleur "transparent" définie directement dans l'instance de classe 'djs_colors'.

    // Méthode pour ajouter une opacité à une couleur donnée au format hsl.
    alpha = (color: string, alpha: number): string => {
        const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/;
        const match = color.match(hslRegex);

        if (!match) {
            throw new Error("La chaîne de couleur n'est pas au format hsl.");
        }

        const hue = match[1];
        const saturation = match[2];
        const lightness = match[3];

        return `hsla(${hue},${saturation},${lightness},${alpha})`; // Retourne la couleur avec l'opacité spécifiée.
    };
}
//EOF