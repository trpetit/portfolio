var btn1 = document.getElementById('btn1');

var elements = document.querySelectorAll('.texte');

var elements = document.querySelectorAll('.chiffre');
btn1.addEventListener('click', function() {
    for (var i = 0; i < elements.length; i+=3) {
        elements[i].style.display = 'none';
    }
});


