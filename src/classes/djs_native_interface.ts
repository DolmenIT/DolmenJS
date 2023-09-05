import { dolmenjs } from "../dolmenjs.js";

export class djs_native_interface {
    djs: dolmenjs;

    constructor(djs: dolmenjs) {
        console.log("djs_native_interface:constructor");

        this.djs = djs;
    }

    // Fonction pour charger le fichier JSON à partir de l'URL
    fetchJSON = (filePath: string) => {
        return new Promise((resolve, reject) => {
            if (typeof window.nativeInterface === "undefined") {
                // Utilisation de fetch pour charger le fichier JSON à partir de l'URL
                fetch(filePath)
                    .then((response) => {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JSON."));
                        } else {
                            resolve(response.json());
                        }
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
            else {
                // Utilisation de l'interface native dans le WebView
                try {
                    var fileData = JSON.parse(window.nativeInterface.fetchJSON(filePath));
                    console.log(fileData);
                    resolve(fileData);
                } catch (error) {
                    reject(error);
                }
            }
        });
    }
    // Fonction pour charger le fichier JS à partir de l'URL
    loadJS = (filePath: string) => {
        return new Promise((resolve, reject) => {
            if (typeof window.nativeInterface === "undefined") {
                // Utilisation de fetch pour charger le fichier JS à partir de l'URL
                fetch(filePath)
                    .then((response) => {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JS."));
                        } else {
                            response.text()
                                .then((fileContent) => {
                                    resolve(fileContent);
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        }
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
            else {
                // Utilisation de l'interface native dans le WebView
                try {
                    var fileData = window.nativeInterface.loadJS(filePath);
                    resolve(fileData);
                } catch (error) {
                    reject(error);
                }
            }
        });
    }
}
//EOF