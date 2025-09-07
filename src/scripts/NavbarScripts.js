import { getLangFromUrl } from "../i18n/utils";

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
