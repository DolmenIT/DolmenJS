import { djs } from "./dolmenjs.js";
export class djs_views {
    constructor() {
        this.path = '';
        this.views = {};
        this.viewsWithObjects = {};
        this.persistentObjects = {};
        this.currentView = null;
        this.setView = (viewName) => {
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
        this.set = this.setView;
        this.getView = () => {
            if (djs.views.currentView) {
                return djs.views.views[djs.views.currentView] || null;
            }
            else {
                djs.debug.log("djs_views.getView: View is not defined");
            }
        };
        this.destructView = (viewName) => {
            for (const name in djs.views.viewsWithObjects[viewName]) {
                if (typeof djs.views.viewsWithObjects[viewName][name] !== "undefined") {
                    djs.views.viewsWithObjects[viewName][name].remove();
                }
                delete djs.views.viewsWithObjects[viewName][name];
            }
            delete djs.views.viewsWithObjects[viewName];
        };
        this.destruct = this.destructView;
        this.addObject = (objectName, obj) => {
            if (djs.views.currentView) {
                djs.views.viewsWithObjects[djs.views.currentView][objectName] = obj;
                return djs.views.viewsWithObjects[djs.views.currentView][objectName];
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.add = this.addObject;
        this.addObjects = (p_params) => {
            for (let name in p_params) {
                djs.views.addObject(name, p_params[name]);
            }
        };
        this.getObject = (objectName) => {
            if (djs.views.currentView) {
                return djs.views.viewsWithObjects[djs.views.currentView][objectName] || null;
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.get = this.getObject;
        this.addPersistant = (objectName, obj) => {
            if (djs.views.persistentObjects[objectName]) {
                if (obj instanceof HTMLElement) {
                    obj.remove();
                }
            }
            else {
                djs.views.persistentObjects[objectName] = obj;
                return djs.views.persistentObjects[objectName];
            }
        };
        djs.debug.log("djs_views:constructor");
    }
}
