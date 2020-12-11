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
var images = ["assets/img/g63.jpg", "assets/img/panamera.jpg"];


function changeImg() {
    x.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", 5000);
}
window.onload = changeImg;



var sva = document.getElementById("svavozila");

var naziv = ["Mercedes-Benz A200", "Audi A7 S-Line", "BMW X6 M-Paket", "Porsche Panamera 4S",
    "Mercedes-Benz E300 4MATIC", "Audi TT S-Line", "Mercedes-AMG G63", "BMW 330 M",
    "Volkswagen Golf 6", "BMW 640d", "Porsche Cayenne Turbo", "Audi Q8", "Volkswagen Passat CC",
    "Audi A6 S"];

var slika = ["assets/img/vozila/a.jpg", "assets/img/vozila/a7.jpg", "assets/img/vozila/x6.jpg",
    "assets/img/vozila/pana.jpg", "assets/img/vozila/e.jpg", "assets/img/vozila/tt.jpg",
    "assets/img/vozila/g.jpg", "assets/img/vozila/330.jpg", "assets/img/vozila/g6.jpg",
    "assets/img/vozila/640.jpg", "assets/img/vozila/cay.jpg", "assets/img/vozila/q8.jpg",
    "assets/img/vozila/cc.jpg", "assets/img/vozila/a6.jpg"];

var cena = ["13.000", "80.600", "73.300", "86.000", "33.900", "14.900", "129.800", "48.700", "6.500", "27.700",
    "55.000", "88.900", "22.000", "18.200"];

var filter = ["mercedes", "audi", "bmw", "porsche", "mercedes", "audi", "mercedes", "bmw", "vw", "bmw", "porsche",
    "audi", "vw", "audi"];

var altauto = ["a200", , "audi-a7", "bmw-x6", "panamera", "e220", "audi-tt", "g63", "bmw330", "golf6", "bmw640",
    "cayenne", "audi-q8", "passat-cc", "audi-a6"]

var dugme = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "d14"];

for (c = 0; c < naziv.length; c++) {

    sva.innerHTML += '<div class="col-12  col-md-6 col-lg-4 svi my-5 ' + filter[c] + '"><h5>' + naziv[c] + '</h5><img src="' + slika[c] + '" alt="' + altauto[c] + '"><h4>' + cena[c] + ' €</h4><div class="col-12 bt"><i class="fa fa-chevron-down ' + dugme[c] + ' btn0"></i></div></div>';


}

var spec = document.getElementsByClassName("svi");

var godina = ["2010", "2019", "2018", "2017", "2015", "2009", "2017", "2018", "2008", "2012", "2016", "2018",
    "2014", "2013"];

var gorivo = ["Dizel", "Benzin", "Dizel", "Benzin", "Dizel", "Benzin", "Benzin", "Dizel", "Dizel", "Dizel", "Benzin",
    "Dizel", "Dizel", "Benzin"];

var kub = ["1987", "2890", "1997", "3460", "1990", "1890", "3983", "2477", "1689", "1998", "2844",
    "2879", "1898", "1988"];

var karo = ["Hečbek", "Kupe", "SUV", "Kupe", "Limuzina", "Kupe", "SUV", "Limuzina", "Hečbek", "Limuzina", "SUV",
    "SUV", "Limuzina", "Limuzina"]

var kl = ["k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "k10", "k11", "k12", "k13", "k14"];







for (d = 0; d < spec.length; d++) {

    spec[d].innerHTML += '<div class="row ' + kl[d] + '"><div class="col-6 car tamno"><p>Godina</p></div><div class="col-6 car tamno"><p>' + godina[d] + '</p></div><div class="col-6 car sivo"><p>Gorivo</p></div><div class="col-6 car sivo"><p>' + gorivo[d] + '</p></div><div class="col-6 car tamno"><p>Kubikaža</p></div><div class="col-6 car tamno"><p>' + kub[d] + 'c㎥</p></div><div class="col-6 car sivo"><p>Karoserija</p></div><div class="col-6 car sivo"><p>' + karo[d] + '</p></div></div>'

}





var izab = document.getElementById("izaberi");

var slikeizab = ["assets/img/audi.png", "assets/img/mb.png", "assets/img/bmw.png",
    "assets/img/porsche.png", "assets/img/vw.png"];

var altizab = ["audilogo", "mblogo", "bmwlogo", "porschelogo", "vwlogo"];

var idtrazi = ["audi", "merc", "bmw", "pors", "volks"]

for (let s = 0; s < slikeizab.length; s++) {

    izab.innerHTML += '<img src="' + slikeizab[s] + '" alt="' + altizab[s] + '" id="' + idtrazi[s] + '">'


}



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



    $('.k1').hide();
    $('.k2').hide();
    $('.k3').hide();
    $('.k4').hide();
    $('.k5').hide();
    $('.k6').hide();
    $('.k7').hide();
    $('.k8').hide();
    $('.k9').hide();
    $('.k10').hide();
    $('.k11').hide();
    $('.k12').hide();
    $('.k13').hide();
    $('.k14').hide();

    $('.d1').click(function () {
        $('.k1').slideToggle('slow');
    })
    $('.d2').click(function () {
        $('.k2').slideToggle('slow');
    })
    $('.d3').click(function () {
        $('.k3').slideToggle('slow');
    })
    $('.d4').click(function () {
        $('.k4').slideToggle('slow');
    })
    $('.d5').click(function () {
        $('.k5').slideToggle('slow');
    })
    $('.d6').click(function () {
        $('.k6').slideToggle('slow');
    })
    $('.d7').click(function () {
        $('.k7').slideToggle('slow');
    })
    $('.d8').click(function () {
        $('.k8').slideToggle('slow');
    })
    $('.d9').click(function () {
        $('.k9').slideToggle('slow');
    })
    $('.d10').click(function () {
        $('.k10').slideToggle('slow');
    })
    $('.d11').click(function () {
        $('.k11').slideToggle('slow');
    })
    $('.d12').click(function () {
        $('.k12').slideToggle('slow');
    })
    $('.d13').click(function () {
        $('.k13').slideToggle('slow');
    })
    $('.d14').click(function () {
        $('.k14').slideToggle('slow');
    })




    $('#trazi').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('.svi').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    $('#trazi').focus(function () {
        $(this).animate({ width: '100%' }, 1000);

    })




    $('#izaberi img').mouseover(function () {

        $(this).css('filter', 'none');
    })
    $('#izaberi img').mouseout(function () {

        $(this).css('filter', 'grayscale(100%)');
    })

    $('#audi').click(function () {
        $('.audi').show(1000);
        $('.svi:not(.audi)').hide();
    })
    $('#merc').click(function () {
        $('.mercedes').show(1000);
        $('.svi:not(.mercedes)').hide();
    })
    $('#bmw').click(function () {
        $('.bmw').show(1000);
        $('.svi:not(.bmw)').hide();
    })
    $('#pors').click(function () {
        $('.porsche').show(1000);
        $('.svi:not(.porsche)').hide();
    })
    $('#volks').click(function () {
        $('.vw').show(1000);
        $('.svi:not(.vw)').hide();
    })



    $('#tabela tr:even').css('background-color', '#dfdfdf');



    $("#svavozila img").sliphover();

});







var p = 0;
var maxcena = 0;
var mincena = 99999;
var maxkub = 0;
var minkub = 99999
for (let z = 0; z < cena.length; z++) {

    p += parseFloat(cena[z]);
    if (parseFloat(cena[z]) > maxcena) maxcena = parseFloat(cena[z]);
    if (parseFloat(cena[z]) < mincena) mincena = parseFloat(cena[z]);
    if (parseInt(kub[z]) > maxkub) maxkub = parseInt(kub[z]);
    if (parseInt(kub[z]) < minkub) minkub = parseInt(kub[z]);
}

var cenaukupno = p.toFixed(1);
let ukupno = spec.length;
var prosek = p / 14;
var prosekdec = prosek.toFixed(1);

document.getElementById("ukupnovozila").innerHTML += ukupno;
document.getElementById("ukupnacena").innerHTML += '' + cenaukupno + '00€';
document.getElementById("prosekcena").innerHTML += '' + prosekdec + '00€';
document.getElementById("maxcena").innerHTML += '' + maxcena + '00€';
document.getElementById("mincena").innerHTML += '' + mincena + '00€';
document.getElementById("maxkub").innerHTML += '' + maxkub + 'c㎥';
document.getElementById("minkub").innerHTML += '' + minkub + 'c㎥';


var ikone = document.getElementById("ikone");

var nizikone = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter", "fa fa-youtube"];

var nizlink = ["https://www.facebook.com",
    "https://www.instagram.com",
    "https://twitter.com",
    "https://www.youtube.com/user"];

for (j = 0; j < nizikone.length; j++) {
    ikone.innerHTML += '<a href="' + nizlink[j] + '" target="_blank"><span class="' + nizikone[j] + '"></span></a>'
}



