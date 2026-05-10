import translations from './translations.json';

export const languages = ['en', 'cz'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'en';

export function getTranslation(lang: Language, key: string): string {
  const lang_translations = translations[lang as keyof typeof translations];
  if (!lang_translations) {
    return translations[defaultLanguage as keyof typeof translations][key as keyof typeof translations.en] || key;
  }
  return (lang_translations[key as keyof typeof lang_translations] as string) || key;
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'cz') {
    return lang as Language;
  }
  return defaultLanguage;
}

export function useTranslations(lang: Language) {
  return (key: string): string => getTranslation(lang, key);
}

export function getLocalizedUrl(lang: Language, path: string): string {
  return `/${lang}${path}`;
}

// Helper for getting all static paths for i18n
export function getStaticPaths() {
  return languages.map(lang => ({
    params: { lang }
  }));
}
