var theme_bubble = document.getElementsByClassName('theme-bubble');
for(var i=0; theme_bubble.length > i; i++) {
    theme_bubble[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        seTheme(mode)
    })
}

function seTheme(mode) {
    if (mode == 'light') {
        document.getElementById('change-theme').href = 'css/light-theme.css'
    }
    if (mode == 'dark') {
        document.getElementById('change-theme').href = 'css/purple-theme.css'
    }
}
