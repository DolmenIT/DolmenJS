import { dolmenjs } from "../dolmenjs.js";

export class djs_internationalization {
    djs: dolmenjs;

    constructor(djs: dolmenjs) {
        console.log("djs_internationalization:constructor");

        this.djs = djs;
    }

    private currentLanguage: string = 'en';
    private translations: Record<string, Record<string, string>> = {};

    setLangage = (str_Langage: string) => {
        try {
            const translationData = djs_ni.fetchJSON('./i18n/' + str_Langage + '.json');
            this.translations[str_Langage] = translationData;
            this.currentLanguage = str_Langage;
        } catch (error) {
            console.error(`Error fetching translation for ${str_Langage}`);
        }
    }

    set = this.setLangage;

    getTranslation = (str_Text: string) => {
        const translation = this.translations[this.currentLanguage];

        if (translation && translation[str_Text]) {
            return translation[str_Text];
        }

        return str_Text;
    }

    get = this.getTranslation;
}
//EOF