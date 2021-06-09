import menuTpl from './menu.hbs';
import menuItems from './menu.json';
import './sass/main.scss';

// Markup
const menu = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItems);

menu.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems) {
    return menuTpl(menuItems)
}

//Change theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const switchToggle = document.querySelector('#theme-switch-toggle');
const mainTheme = document.querySelector('body');


switchToggle.addEventListener('change', onChangeToggle);
function onChangeToggle() {
    if (switchToggle.checked) {
mainTheme.classList.remove(Theme.LIGHT);
        mainTheme.classList.add(Theme.DARK);
        localStorage.setItem('data-theme', Theme.DARK);
    } else {
        mainTheme.classList.remove(Theme.DARK);
        mainTheme.classList.add(Theme.LIGHT);
        localStorage.setItem('data-theme', Theme.LIGHT);
    }
    }
        
    savedTheme();
function savedTheme() {
    const theme = localStorage.getItem('data-theme');
    if (theme) {
        switchToggle.checked = theme === Theme.DARK ? true : false;
        onChangeToggle();
    } 
}




 


