import { djs } from "./dolmenjs.js";

export class djs_views {
    path = '';
    // propriété pour stocker les fenêtres virtuelles avec leurs objets respectifs.
    views: any = {};
    viewsWithObjects: any = {};
    persistentObjects: any = {};
    currentView: string | null = null; // Fenêtre virtuelle actuelle

    constructor() {
        djs.debug.log("djs_views:constructor");
    }

    // Méthode pour définir la fenêtre virtuelle actuelle.
    setView = (viewName: string) => {
        if (!(viewName in djs.views.views)) {
            let tagView = document.createElement("view");
            tagView.setAttribute('id', viewName);
            tagView.style.display = `block`;
            tagView.style.width = `100vw`;
            tagView.style.height = `100vh`;
            djs.views.views[viewName] = document.body.appendChild(tagView); 
            djs.views.viewsWithObjects[viewName] = {};
        }
        djs.views.currentView = viewName;
        return djs.views.views[viewName];
    };
    set = this.setView;

    // Méthode pour obtenir un objet par son nom dans la fenêtre virtuelle actuelle.
    getView = () => {
        // djs.debug.log("djs_views.getScene");
        // Vérification si la fenêtre virtuelle actuelle est définie.
        if (djs.views.currentView) {
            return djs.views.views[djs.views.currentView] || null;
        } else {
            djs.debug.log("djs_views.getView: View is not defined");
        }
    };

    // Méthode pour détruire tous les objets dans la fenêtre virtuelle actuelle et vider la liste des fenêtres avec objets.
    destructView = (viewName: string) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        for (const name in djs.views.viewsWithObjects[viewName]) {
            if (typeof djs.views.viewsWithObjects[viewName][name] !== "undefined") {
                djs.views.viewsWithObjects[viewName][name].remove();
            }
            delete djs.views.viewsWithObjects[viewName][name];
        }
        delete djs.views.viewsWithObjects[viewName];
    };
    destruct = this.destructView;

    // Méthode pour ajouter un objet à une fenêtre virtuelle avec un nom donné.
    addObject = (objectName: string, obj: any) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        if (djs.views.currentView) {
            // Stockage de l'objet avec son nom et la fenêtre virtuelle associée.
            djs.views.viewsWithObjects[djs.views.currentView][objectName] = obj;
            return djs.views.viewsWithObjects[djs.views.currentView][objectName];
        } else {
            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
        }
    };
    add = this.addObject;

    // Méthode pour ajouter un objet à une fenêtre virtuelle avec un nom donné.
    addObjects = (p_params: any) => {
        // d3d.debug.log("d3d_scenes.addObjects:" + JSON.stringify(p_params));

        for (let name in p_params) {
            djs.views.addObject(name, p_params[name]);
        }
    };

    // Méthode pour obtenir un objet par son nom dans la fenêtre virtuelle actuelle.
    getObject = (objectName: string) => {
        // Vérification si la fenêtre virtuelle actuelle est définie.
        if (djs.views.currentView) {
            return djs.views.viewsWithObjects[djs.views.currentView][objectName] || null;
        } else {
            throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
        }
    };
    get = this.getObject;

    // destructObject

    // Nouvelle méthode pour ajouter un objet persistant à une fenêtre virtuelle.
    addPersistant = (objectName: string, obj: any) => {
        if (djs.views.persistentObjects[objectName]) {
            if (obj instanceof HTMLElement) {
                obj.remove();
            }
        } else {
            djs.views.persistentObjects[objectName] = obj;
            return djs.views.persistentObjects[objectName];
        }
    };

    // getPersistant

    // destructPersistant
}
//EOF