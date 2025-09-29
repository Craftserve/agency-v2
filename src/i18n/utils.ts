import { defaultLang } from './ui';
import en from "../../public/static/locales/en.json";
import pl from "../../public/static/locales/pl.json";

const ui = {
  "en": en,
  "pl-PL": pl
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangForRedirect(url: URL) {
    const [, lang] = url.pathname.split('/');
    if(lang in ui) return lang as keyof typeof ui;
}

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(path: string) {
    return (
      getNestedValue(ui[lang], path) ??
      getNestedValue(ui[defaultLang], path) ??
      path
    );
  }
}

export function getRoutes(url: URL){
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  return [
    {
        name: t("links.contact"),
        url: `/${lang != defaultLang ? lang+"/" : ""}#formSection`
    },
    {
        name: t("links.about"),
        url: `/${lang != defaultLang ? lang+"/" : ""}${t("urls.about")}`
    }
  ]
}

