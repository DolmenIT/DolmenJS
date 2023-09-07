import { djs } from "../dolmenjs.js";
export class djs_internationalization {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.setLangage = (str_Langage) => {
            try {
                const translationData = djs.ni.fetchJSON('./i18n/' + str_Langage + '.json');
                this.translations[str_Langage] = translationData;
                this.currentLanguage = str_Langage;
            }
            catch (error) {
                console.error(`Error fetching translation for ${str_Langage}`);
            }
        };
        this.set = this.setLangage;
        this.getTranslation = (str_Text) => {
            const translation = this.translations[this.currentLanguage];
            if (translation && translation[str_Text]) {
                return translation[str_Text];
            }
            return str_Text;
        };
        this.get = this.getTranslation;
        console.log("djs_internationalization:constructor");
    }
}
