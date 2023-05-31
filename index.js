window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myButton").style.bottom = "40px";
  } else {
    document.getElementById("myButton").style.bottom = "20px";
  }
}

var btnJava = document.getElementById('btn-java');
var btnHtml = document.getElementById('btn-html');
var btnCsharp = document.getElementById('btn-csharp');
var btnReseau = document.getElementById('btn-reseau');
var btnAll = document.getElementById('btn-all');

var elementsJava = document.querySelectorAll('.projet.java'); 
var elementsHtml = document.querySelectorAll('.projet.html'); 
var elementsCsharp = document.querySelectorAll('.projet.csharp'); 
var elementsReseau = document.querySelectorAll('.projet.reseau'); 


btnJava.addEventListener('click', function() {
    for (var i = 0; i < elementsJava.length; i++) {
        elementsJava[i].style.display = 'block';
    }
    for (var i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].style.display = 'none';
    }
    for (var i = 0; i < elementsCsharp.length; i++) {
        elementsCsharp[i].style.display = 'none';
    }
    for (var i = 0; i < elementsReseau.length; i++) {
        elementsReseau[i].style.display = 'none';
    }
}
);

btnHtml.addEventListener('click', function() {
    for (var i = 0; i < elementsJava.length; i++) {
        elementsJava[i].style.display = 'none';
    }
    for (var i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].style.display = 'block';
    }
    for (var i = 0; i < elementsCsharp.length; i++) {
        elementsCsharp[i].style.display = 'none';
    }
    for (var i = 0; i < elementsReseau.length; i++) {
        elementsReseau[i].style.display = 'none';
    }
}
);

btnCsharp.addEventListener('click', function() {
    for (var i = 0; i < elementsJava.length; i++) {
        elementsJava[i].style.display = 'none';
    }
    for (var i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].style.display = 'none';
    }
    for (var i = 0; i < elementsCsharp.length; i++) {
        elementsCsharp[i].style.display = 'block';
    }
    for (var i = 0; i < elementsReseau.length; i++) {
        elementsReseau[i].style.display = 'none';
    }
}
);

btnReseau.addEventListener('click', function() {
    for (var i = 0; i < elementsJava.length; i++) {
        elementsJava[i].style.display = 'none';
    }
    for (var i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].style.display = 'none';
    }
    for (var i = 0; i < elementsCsharp.length; i++) {
        elementsCsharp[i].style.display = 'none';
    }
    for (var i = 0; i < elementsReseau.length; i++) {
        elementsReseau[i].style.display = 'block';
    }
}
);

btnAll.addEventListener('click', function() {
    for (var i = 0; i < elementsJava.length; i++) {
        elementsJava[i].style.display = 'block';
    }
    for (var i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].style.display = 'block';
    }
    for (var i = 0; i < elementsCsharp.length; i++) {
        elementsCsharp[i].style.display = 'block';
    }
    for (var i = 0; i < elementsReseau.length; i++) {
        elementsReseau[i].style.display = 'block';
    }
}
);