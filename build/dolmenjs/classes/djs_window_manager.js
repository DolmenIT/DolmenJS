var djs_window_manager = (function () {
    function djs_window_manager() {
        var _this = this;
        this.windowsWithObjects = {};
        this.persistentObjects = {};
        this.currentWindow = null;
        this.setWindow = function (windowName) {
            if (!(windowName in _this.windowsWithObjects)) {
                _this.windowsWithObjects[windowName] = {};
            }
            _this.currentWindow = windowName;
        };
        this.set = this.setWindow;
        this.addObject = function (objectName, obj) {
            if (_this.currentWindow) {
                _this.windowsWithObjects[_this.currentWindow][objectName] = obj;
                return _this.windowsWithObjects[_this.currentWindow][objectName];
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.add = this.addObject;
        this.addPersistant = function (objectName, obj) {
            if (_this.persistentObjects[objectName]) {
                if (obj instanceof HTMLElement) {
                    obj.remove();
                }
            }
            else {
                _this.persistentObjects[objectName] = obj;
                return _this.persistentObjects[objectName];
            }
        };
        this.getObject = function (objectName) {
            if (_this.currentWindow) {
                return _this.windowsWithObjects[_this.currentWindow][objectName] || null;
            }
            else {
                throw new Error("Aucune fenêtre virtuelle n'est actuellement définie.");
            }
        };
        this.get = this.getObject;
        this.destructWindow = function (windowName) {
            var windowObjects = _this.windowsWithObjects[windowName];
            for (var name_1 in windowObjects) {
                var obj = windowObjects[name_1];
                if (obj instanceof HTMLElement) {
                    obj.remove();
                }
            }
            delete _this.windowsWithObjects[windowName];
        };
        this.destruct = this.destructWindow;
        console.log("djs_window_manager:constructor");
    }
    return djs_window_manager;
}());
export { djs_window_manager };
