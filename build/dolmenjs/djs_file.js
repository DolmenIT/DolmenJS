import { djs } from './dolmenjs.js';
export class djs_file {
    constructor() {
        this.fetchJSON = (filePath) => {
            djs.debug.log("djs_file.fetchJSON:" + filePath);
            return new Promise((resolve, reject) => {
                if (typeof window.nativeInterface === "undefined") {
                    fetch(filePath)
                        .then((response) => {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JSON."));
                        }
                        else {
                            resolve(response.json());
                        }
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    try {
                        var fileData = JSON.parse(window.nativeInterface.fetchJSON(filePath));
                        resolve(fileData);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        };
        this.loadJS = (filePath, p_params) => {
            return new Promise((resolve, reject) => {
                if (typeof window.nativeInterface === "undefined") {
                    fetch(filePath)
                        .then((response) => {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JS."));
                        }
                        else {
                            response.text()
                                .then((fileContent) => {
                                resolve({ data: fileContent, p_params: p_params });
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
                    try {
                        var fileData = window.nativeInterface.loadJS(filePath);
                        resolve({ data: fileData, p_params: p_params });
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        };
        djs.debug.log("djs_file.constructor");
    }
}
