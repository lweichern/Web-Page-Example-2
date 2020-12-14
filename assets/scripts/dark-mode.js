const mode_button = document.querySelector('.mode-button');


mode_button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
        
    document.querySelectorAll('.inverted').forEach(elem => {
        elem.classList.toggle('invert');
    });
});