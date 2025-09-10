import { langs } from "../i18n/ui";
import { getLangForRedirect, getLangFromUrl } from "../i18n/utils";

document.getElementsByClassName("hamburger-button")[0].addEventListener("click", () => {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle("hamburger-menu-open");
});

document.getElementsByClassName("logoContainer")[0].addEventListener("click", () => {
    const lang = getLangFromUrl(new URL(window.location.href));

    if (!lang.startsWith("pl")) {
        window.location.assign(`/${lang}`);
        return;
    }

    window.location.assign(`/`);
});

document.getElementsByClassName("languageSection")[0].addEventListener("click", () => {
    const lang = getLangFromUrl(new URL(window.location.href));
    const currentLangIndex = langs.indexOf(lang);

    let nextLang;

    if(currentLangIndex == langs.length-1){
        nextLang = langs[0];
    }else{
        nextLang = langs[currentLangIndex+1];
    }

    const meta = document.createElement("meta");
    meta.httpEquiv = "refresh";
    document.head.appendChild(meta);

    if (!nextLang.startsWith("pl")) {
        meta.content = `0;url=/${nextLang}/`;
    }else{
        meta.content = `0;url=/`;
    }
    
})