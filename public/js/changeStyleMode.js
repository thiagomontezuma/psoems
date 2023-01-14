window.addEventListener('DOMContentLoaded', function () {
    const changeStyleModeButton = document.getElementById('changeStyleModeButton');
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        changeStyleModeButton.children[0].src = '/images/light-mode-icon-white.svg';
    } else if (localStorage.getItem('mode') === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        changeStyleModeButton.children[0].src = '/images/dark-mode-icon.svg';
    }
    document.getElementById('changeStyleModeButton').addEventListener('click', function () {
        if (document.body.classList.contains('dark') || getComputedStyle(document.body).getPropertyValue('--mode-image').includes('light')) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            changeStyleModeButton.children[0].src = '/images/dark-mode-icon.svg';
            localStorage.setItem('mode', 'light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            changeStyleModeButton.children[0].src = '/images/light-mode-icon-white.svg';
            localStorage.setItem('mode', 'dark');
        }
    });
});
