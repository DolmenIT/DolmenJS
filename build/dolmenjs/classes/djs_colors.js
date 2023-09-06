var djs_colors = (function () {
    function djs_colors() {
        this.none = "transparent";
        this.alpha = function (color, alpha) {
            var hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/;
            var match = color.match(hslRegex);
            if (!match) {
                throw new Error("La chaîne de couleur n'est pas au format hsl.");
            }
            var hue = match[1];
            var saturation = match[2];
            var lightness = match[3];
            return "hsla(".concat(hue, ",").concat(saturation, ",").concat(lightness, ",").concat(alpha, ")");
        };
        console.log("djs_colors:constructor");
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
        Object.assign(this, blues, lightBlues, greens, lightGreens, yellows, lightYellows, oranges, lightOranges, reds, lightReds, grays, lightGrays, darkGrays);
    }
    djs_colors.prototype.generateColorShades = function (basename, start, hslStart, end, hslEnd) {
        var colors = {};
        var startHue = hslStart[0], startSaturation = hslStart[1], startLightness = hslStart[2];
        var endHue = hslEnd[0], endSaturation = hslEnd[1], endLightness = hslEnd[2];
        var stepHue = (endHue - startHue) / (end - start);
        var stepSaturation = (endSaturation - startSaturation) / (end - start);
        var stepLightness = (endLightness - startLightness) / (end - start);
        for (var i = start; i <= end; i++) {
            var hue = startHue + i * stepHue;
            var saturation = startSaturation + i * stepSaturation;
            var lightness = startLightness + i * stepLightness;
            var shade = "hsl(".concat(hue, ",").concat(saturation, "%,").concat(lightness, "%)");
            colors["".concat(basename).concat(i)] = shade;
        }
        return colors;
    };
    return djs_colors;
}());
export { djs_colors };
