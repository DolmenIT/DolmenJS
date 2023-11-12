export class djs_colors {
    constructor() {
        this.none = "transparent";
        this.alpha = (color, alpha) => {
            const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/;
            const match = color.match(hslRegex);
            if (!match) {
                throw new Error("La chaîne de couleur n'est pas au format hsl.");
            }
            const hue = match[1];
            const saturation = match[2];
            const lightness = match[3];
            return `hsla(${hue},${saturation},${lightness},${alpha})`;
        };
        console.log("djs_colors:constructor");
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
        Object.assign(this, blues, lightBlues, greens, lightGreens, yellows, lightYellows, oranges, lightOranges, reds, lightReds, grays, lightGrays, darkGrays);
    }
    generateColorShades(basename, start, hslStart, end, hslEnd) {
        const colors = {};
        const [startHue, startSaturation, startLightness] = hslStart;
        const [endHue, endSaturation, endLightness] = hslEnd;
        const stepHue = (endHue - startHue) / (end - start);
        const stepSaturation = (endSaturation - startSaturation) / (end - start);
        const stepLightness = (endLightness - startLightness) / (end - start);
        for (let i = start; i <= end; i++) {
            const hue = startHue + i * stepHue;
            const saturation = startSaturation + i * stepSaturation;
            const lightness = startLightness + i * stepLightness;
            const shade = `hsl(${hue},${saturation}%,${lightness}%)`;
            colors[`${basename}${i}`] = shade;
        }
        return colors;
    }
}
