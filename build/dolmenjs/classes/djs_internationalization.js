var djs_internationalization = (function () {
    function djs_internationalization(djs) {
        var _this = this;
        this.currentLanguage = 'en';
        this.translations = {};
        this.setLangage = function (str_Langage) {
            try {
                var translationData = djs_ni.fetchJSON('./i18n/' + str_Langage + '.json');
                _this.translations[str_Langage] = translationData;
                _this.currentLanguage = str_Langage;
            }
            catch (error) {
                console.error("Error fetching translation for ".concat(str_Langage));
            }
        };
        this.set = this.setLangage;
        this.getTranslation = function (str_Text) {
            var translation = _this.translations[_this.currentLanguage];
            if (translation && translation[str_Text]) {
                return translation[str_Text];
            }
            return str_Text;
        };
        this.get = this.getTranslation;
        console.log("djs_internationalization:constructor");
        this.djs = djs;
    }
    return djs_internationalization;
}());
export { djs_internationalization };
