import { djs } from "./dolmenjs.js";

export class djs_timer_interface {
    elapsedTimeSum = 0;
    lastUpdateTime = Date.now();
    isPaused = false;
    formattedTime = '';

    constructor() {
        console.log("djs_timer_interface:constructor");

        this.loop();
    }

    reset = () => {
        this.elapsedTimeSum = 0;
        this.lastUpdateTime = Date.now();
        this.isPaused = false;
        this.formattedTime = '';
    }

    loop = () => {
        this.update();
        setTimeout(() => {
            this.loop();
        }, 1);
    }

    // Obtient le temps actuel en milliseconde
    // Ajouter une fonction de rappel avec un nom associé
    update = () => {
        const currentTime = Date.now();
        if (!this.isPaused) {
            // Calcul la différence en milliseconde depuis la dernière mise a jour
            const deltaTime = currentTime - this.lastUpdateTime;
            this.elapsedTimeSum += deltaTime;
            // Fais la somme en ajoutant la différence en milliseconde
            const totalSeconds = Math.floor(this.elapsedTimeSum / 1000);
            const totalMilliseconds = Math.floor((this.elapsedTimeSum % 1000) / 10);
            this.formattedTime = `${totalSeconds}.${totalMilliseconds.toString().padStart(2, '0')}`;
        }
        this.lastUpdateTime = currentTime;
    };

    getElapsedTimeSum = () => {
        return this.elapsedTimeSum;
    }

    getFormattedTime = () => {
        return this.formattedTime;
    }

    // Pour arrêter la boucle principale et retirer la fonction de rappel
    pause = () => {
        this.isPaused = !this.isPaused;
    };
}
//EOF