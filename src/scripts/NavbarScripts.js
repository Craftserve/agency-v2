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

document.getElementById("langSwitch").addEventListener("click", () => {
    const lang = getLangFromUrl(new URL(window.location.href));
    const currentLangIndex = langs.indexOf(lang);

    const nextLang = langs[(currentLangIndex + 1) % langs.length];
    const targetUrl = nextLang.startsWith("pl") ? "/" : `/${nextLang}/`;

    const meta = document.createElement("meta");
    meta.httpEquiv = "refresh";
    meta.content = `0;url=${targetUrl}`;

    if (!nextLang.startsWith("pl")) {
        localStorage.setItem("lang", "en-US");
    }else{
        localStorage.setItem("lang", "pl-PL");
    }
    
    document.head.appendChild(meta);
})