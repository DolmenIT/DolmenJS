export class djs_window_manager {
    constructor() {
        this.windowsWithObjects = {};
        this.persistentObjects = {};
        this.currentWindow = null;
        this.setWindow = (windowName) => {
            if (!(windowName in this.windowsWithObjects)) {
                this.windowsWithObjects[windowName] = {};
            }
            this.currentWindow = windowName;
        };
        this.set = this.setWindow;
        this.addObject = (objectName, obj) => {
            if (this.currentWindow) {
                this.windowsWithObjects[this.currentWindow][objectName] = obj;
                return this.windowsWithObjects[this.currentWindow][objectName];
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.add = this.addObject;
        this.addPersistant = (objectName, obj) => {
            if (this.persistentObjects[objectName]) {
                if (obj instanceof HTMLElement) {
                    obj.remove();
                }
            }
            else {
                this.persistentObjects[objectName] = obj;
                return this.persistentObjects[objectName];
            }
        };
        this.getObject = (objectName) => {
            if (this.currentWindow) {
                return this.windowsWithObjects[this.currentWindow][objectName] || null;
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.get = this.getObject;
        this.destructWindow = (windowName) => {
            for (const name in this.windowsWithObjects[windowName]) {
                if (typeof this.windowsWithObjects[windowName][name] !== "undefined") {
                    this.windowsWithObjects[windowName][name].remove();
                }
                delete this.windowsWithObjects[windowName][name];
            }
            delete this.windowsWithObjects[windowName];
        };
        this.destruct = this.destructWindow;
        console.log("djs_window_manager:constructor");
    }
}
