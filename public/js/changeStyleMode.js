window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else if (localStorage.getItem('mode') === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    document.getElementById('changeStyleModeButton').addEventListener('click', function () {
        if (document.body.classList.contains('dark') || getComputedStyle(document.body).getPropertyValue('--mode-image').includes('light')) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('mode', 'light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('mode', 'dark');
        }
    });
});
