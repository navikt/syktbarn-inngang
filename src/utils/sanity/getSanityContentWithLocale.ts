import { Locale, defaultLocale } from '../../types/locale';

export const getSanityContentWithLocale = (data: any, locale: Locale | string) => {
    if (!data) {
        return undefined;
    }
    if (data && data[locale]) {
        return data[locale];
    }
    return data[defaultLocale];
};