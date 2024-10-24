document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle');
    const body = document.body;
    const menu_superior = document.getElementById('menu-superior');
    const links = document.querySelectorAll('a');

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Checkbox marcado');
            body.style.background = "#262626";
            menu_superior.style.background = "#262626"
            links.forEach(link => {
                link.style.color = "yellow"; // Cor branca quando o checkbox está marcado
            });
        } else {
            console.log('Checkbox desmarcado');
            body.style.background = "#ECEBE2";
            menu_superior.style.background = "#004D73"
            links.forEach(link => {
                link.style.color = "black"; // Cor branca quando o checkbox está marcado
            });
            
        }
    });
});
