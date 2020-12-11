var ikonenav = document.getElementById("navsoc");

var navikone = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter", "fa fa-youtube"];

var navlink = ["https://www.facebook.com",
    "https://www.instagram.com",
    "https://twitter.com",
    "https://www.youtube.com"];

for (u = 0; u < navikone.length; u++) {
    ikonenav.innerHTML += '<a href="' + navlink[u] + '" target="_blank"><span class="' + navikone[u] + '"></span></a>'
}



var navmenu = document.getElementById("navlinks");

var navnaziv = ["Početna", "Vozila", "Autor", "Usluge", "Dokumentacija"];

var navhref = ["index.html", "vozila.html", "autor.html", "usluge.html"];

for (l = 0; l < navnaziv.length; l++) {

    navmenu.innerHTML += '<li><a href=' + navhref[l] + '>' + navnaziv[l] + '</a></li>';

}


var x = document.getElementById("slide");
var i = 0;
var images = ["assets/img/probna.jpg", "assets/img/servister.jpg"];


function changeImg() {
    x.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", 4000);
}
window.onload = changeImg;






var naziv = ["Mercedes-Benz A200", "Audi A7 S-Line", "BMW X6 M-Paket", "Porsche Panamera 4S",
    "Mercedes-Benz E300 4MATIC", "Audi TT S-Line", "Mercedes-AMG G63", "BMW 330 M",
    "Volkswagen Golf 6", "BMW 640d", "Porsche Cayenne Turbo", "Audi Q8", "Volkswagen Passat CC",
    "Audi A6 S"];

var selekt = document.getElementById("voziladdl");


for (let g = 0; g < naziv.length; g++) {

    selekt.innerHTML += '<option>' + naziv[g] + '</option>';

}


var godistev = document.getElementById("godistev");


for (let m = 2020; m >= 1980; m--) {

    godistev.innerHTML += '<option>' + m + '</option>';

}



var zakazi = document.getElementById("zakazi");
var ime0 = document.getElementById("imeproba");
var prezime0 = document.getElementById("prezimeproba");
var mejl0 = document.getElementById("mejlproba");
var broj0 = document.getElementById("brojproba");



var ime1 = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,10}/;
var mejl = /^[\w\d.]{9,21}@(gmail|hotmail).com$/;
var broj = /^6[124569][0-9]{6,7}$/;

zakazi.addEventListener('click', function () {

    if (ime1.test(ime0.value)) {

    }
    else {
        document.getElementById("loseime").style.display = "block";
    }

    if (ime1.test(prezime0.value)) {

    }
    else {
        document.getElementById("loseprezime").style.display = "block";
    }

    if (mejl.test(mejl0.value)) {

    }
    else {
        document.getElementById("losmejl").style.display = "block";
    }

    if (broj.test(broj0.value)) {

    }
    else {
        document.getElementById("losbroj").style.display = "block";
    }

})





var zakaziteh = document.getElementById("zakaziteh");
var imeteh = document.getElementById("imeteh");
var prezime0 = document.getElementById("prezimeteh");


var ime1 = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,10}/;


zakaziteh.addEventListener('click', function () {

    if (ime1.test(imeteh.value)) {

    }
    else {
        document.getElementById("loseimeteh").style.display = "block";
    }

    if (ime1.test(prezimeteh.value)) {

    }
    else {
        document.getElementById("loseprezimeteh").style.display = "block";
    }


})

var tasterteh = document.getElementById("izracunaj");
var snagateh = document.getElementById("snaga");
var zapreminateh = document.getElementById("zapremina");



tasterteh.addEventListener('click', function () {



    var x = parseInt(godistev.value);
    var y = parseInt(snagateh.value);
    var z = parseInt(zapreminateh.value * 5);
    document.getElementById("konacnacena").innerHTML = (x * 6) + (y * 10) + (z * 2);
})


$(document).ready(function () {

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
    });
    $('nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('nav').removeClass('open');
    });

    $('#navlinks li a').hover(function () {
        $(this).css('border-bottom', '3px solid #fff700')
    }, function () {
        $(this).css('border-bottom', 'none')
    });


    $('.probna input').focus(function () {
        $(this).animate({ width: '80%' }, 1000);

    })


});


var ikone = document.getElementById("ikone");

var nizikone = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter", "fa fa-youtube"];

var nizlink = ["https://www.facebook.com",
    "https://www.instagram.com",
    "https://twitter.com",
    "https://www.youtube.com/user"];

for (j = 0; j < nizikone.length; j++) {
    ikone.innerHTML += '<a href="' + nizlink[j] + '" target="_blank"><span class="' + nizikone[j] + '"></span></a>'
}



