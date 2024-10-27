document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle');
    const html = document.querySelector('html')

    toggleCheckbox.addEventListener('change', function(){
        html.classList.toggle('dark-mode')
    })  
});

export default toggle;
