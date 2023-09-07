import { djs } from "../dolmenjs.js";

export class djs_window_manager {
    // propriété pour stocker les fenêtres virtuelles avec leurs objets respectifs.
    windowsWithObjects: any = {};
    persistentObjects: any = {};
    currentWindow: string | null = null; // Fenêtre virtuelle actuelle

    constructor() {
        console.log("djs_window_manager:constructor");
    }

    // Méthode pour définir la fenêtre virtuelle actuelle.
    setWindow = (windowName: string) => {
        if (!(windowName in this.windowsWithObjects)) {
            this.windowsWithObjects[windowName] = {};
        }
        this.currentWindow = windowName;
    };
    set = this.setWindow;

    // Méthode pour ajouter un objet à une fenêtre virtuelle avec un nom donné.
    addObject = (objectName: string, obj: any) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        if (this.currentWindow) {
            // Stockage de l'objet avec son nom et la fenêtre virtuelle associée.
            this.windowsWithObjects[this.currentWindow][objectName] = obj;
            return this.windowsWithObjects[this.currentWindow][objectName];
        } else {
            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
        }
    };
    add = this.addObject;

    // Nouvelle méthode pour ajouter un objet persistant à une fenêtre virtuelle.
    addPersistant = (objectName: string, obj: any) => {
        if (this.persistentObjects[objectName]) {
            if (obj instanceof HTMLElement) {
                obj.remove();
            }
        } else {
            this.persistentObjects[objectName] = obj;
            return this.persistentObjects[objectName];
        }
    };

    // Méthode pour obtenir un objet par son nom dans la fenêtre virtuelle actuelle.
    getObject = (objectName: string) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        if (this.currentWindow) {
            return this.windowsWithObjects[this.currentWindow][objectName] || null;
        } else {
            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
        }
    };
    get = this.getObject;

    // Méthode pour détruire tous les objets dans la fenêtre virtuelle actuelle et vider la liste des fenêtres avec objets.
    destructWindow = (windowName: string) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        const windowObjects = this.windowsWithObjects[windowName];
        for (const name in windowObjects) {
            const obj = windowObjects[name];
            if (obj instanceof HTMLElement) {
                obj.remove();
            }
        }
        delete this.windowsWithObjects[windowName];
    };
    destruct = this.destructWindow;
}
//EOF