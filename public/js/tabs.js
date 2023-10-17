let tab = document.getElementsByClassName("tab");
let toggleTab = document.querySelectorAll('[data-toggle="tab"]');
let targetButtonTab = document.querySelectorAll('[data-targettab]');
for (let tabIndex = 0; tabIndex < targetButtonTab.length; tabIndex++) {
    toggleTab[tabIndex].addEventListener('click', function(e) {
        let collapseSelf = false;
        if (toggleTab[tabIndex].classList.contains("tab-selector-active")) {
            collapseSelf = true;
        }
        Array.from(toggleTab).forEach(value => {
            if (toggleTab[tabIndex].dataset.tabname === value.dataset.tabname) {
                value.classList.remove("tab-selector-active");
                document.querySelector(value.dataset.targettab).classList.remove("tab-show");
            }
        });
        if (collapseSelf === false) {
            tab[tabIndex].classList.add("tab-show");
            toggleTab[tabIndex].classList.add("tab-selector-active");
        }
    })
}