const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

toggleButton.addEventListener('click', () => {
    if (rootElement.classList.contains('dark-theme')) {
        rootElement.classList.remove('dark-theme');
        rootElement.classList.add('light-theme');
    } else {
        rootElement.classList.remove('light-theme');
        rootElement.classList.add('dark-theme');
    }
});
