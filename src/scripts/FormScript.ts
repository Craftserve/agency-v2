const toggleClasses = (elementId: string, className: string): void => {
    if (document.getElementById(elementId) !== null) document.getElementById(elementId)?.classList.toggle(className);
    else return;
};

document.getElementById("formSubmitButton")?.addEventListener("click", (): void => {
    toggleClasses("formSection", "invisible");
    toggleClasses("form-section-after-send", "invisible");
});

document.getElementById("secondary-form-button")?.addEventListener("click", (): void => {
    toggleClasses("formSection", "invisible");
    toggleClasses("form-section-after-send", "invisible");
});
