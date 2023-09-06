var djs_native_interface = (function () {
    function djs_native_interface() {
        this.fetchJSON = function (filePath) {
            return new Promise(function (resolve, reject) {
                if (typeof window.nativeInterface === "undefined") {
                    fetch(filePath)
                        .then(function (response) {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JSON."));
                        }
                        else {
                            resolve(response.json());
                        }
                    })
                        .catch(function (error) {
                        reject(error);
                    });
                }
                else {
                    try {
                        var fileData = JSON.parse(window.nativeInterface.fetchJSON(filePath));
                        console.log(fileData);
                        resolve(fileData);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        };
        this.loadJS = function (filePath) {
            return new Promise(function (resolve, reject) {
                if (typeof window.nativeInterface === "undefined") {
                    fetch(filePath)
                        .then(function (response) {
                        if (!response.ok) {
                            reject(new Error("Erreur lors du chargement du fichier JS."));
                        }
                        else {
                            response.text()
                                .then(function (fileContent) {
                                resolve(fileContent);
                            })
                                .catch(function (error) {
                                reject(error);
                            });
                        }
                    })
                        .catch(function (error) {
                        reject(error);
                    });
                }
                else {
                    try {
                        var fileData = window.nativeInterface.loadJS(filePath);
                        resolve(fileData);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        };
        console.log("djs_native_interface:constructor");
    }
    return djs_native_interface;
}());
export { djs_native_interface };
