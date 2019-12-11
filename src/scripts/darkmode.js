const toggleSwitch = document.querySelector('.ar-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.style.setProperty('--ar-black', '#FBFBFB');
        document.documentElement.style.setProperty('--ar-white', '#0B0B0B');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.style.setProperty('--ar-white', '#FBFBFB');
        document.documentElement.style.setProperty('--ar-black', '#0B0B0B');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);