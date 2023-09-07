export class djs_timer_interface {
    constructor() {
        this.elapsedTimeSum = 0;
        this.lastUpdateTime = Date.now();
        this.isPaused = false;
        this.formattedTime = '';
        this.reset = () => {
            this.elapsedTimeSum = 0;
            this.lastUpdateTime = Date.now();
            this.isPaused = false;
            this.formattedTime = '';
        };
        this.loop = () => {
            this.update();
            setTimeout(() => {
                this.loop();
            }, 1);
        };
        this.update = () => {
            const currentTime = Date.now();
            if (!this.isPaused) {
                const deltaTime = currentTime - this.lastUpdateTime;
                this.elapsedTimeSum += deltaTime;
                const totalSeconds = Math.floor(this.elapsedTimeSum / 1000);
                const totalMilliseconds = Math.floor((this.elapsedTimeSum % 1000) / 10);
                this.formattedTime = `${totalSeconds}.${totalMilliseconds.toString().padStart(2, '0')}`;
            }
            this.lastUpdateTime = currentTime;
        };
        this.getElapsedTimeSum = () => {
            return this.elapsedTimeSum;
        };
        this.getFormattedTime = () => {
            return this.formattedTime;
        };
        this.pause = () => {
            this.isPaused = !this.isPaused;
        };
        console.log("djs_timer_interface:constructor");
        this.loop();
    }
}
