import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangForRedirect(url: URL) {
    const [, lang] = url.pathname.split('/');
    if(lang in ui) return lang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRoutes(url: URL){
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  return [
    {
        name: t("contact"),
        url: `/${lang != defaultLang ? lang+"/" : ""}${t("contactUrl")}`
    },
    {
        name: t("about"),
        url: `/${lang != defaultLang ? lang+"/" : ""}${t("aboutUrl")}`
    }
  ]
}

