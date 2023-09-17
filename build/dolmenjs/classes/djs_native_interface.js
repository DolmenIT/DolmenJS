export class djs_native_interface {
    constructor() {
        this.fetchJSON = (filePath) => {
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
        this.loadJS = (filePath, p_var_struct) => {
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
                                resolve({ data: fileContent, params: p_var_struct });
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
                        resolve({ data: fileData, params: p_var_struct });
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        };
        console.log("djs_native_interface:constructor");
    }
}
