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





    $('#vise').hide();

    $('#procitajvise').click(function () {
        $('#vise').toggle();


        if ($('#vise').is(':visible')) {
            $('#procitajvise').removeClass('fa fa-chevron-down');
            $('#procitajvise').addClass('fa fa-chevron-up');
        }
        else {
            $('#procitajvise').removeClass('fa fa-chevron-up');
            $('#procitajvise').addClass('fa fa-chevron-down');
        }
    });

    $('.tx1').hide();
    $('.tx2').hide();
    $('.tx3').hide();
    $('.tx4').hide();
    $('.tx5').hide();
    $('.tx6').hide();



    $('.btn1').hover(function () {
        $('.tx1').slideToggle('slow');
    })

    $('.btn2').hover(function () {
        $('.tx2').slideToggle('slow');
    })

    $('.btn3').hover(function () {
        $('.tx3').slideToggle('slow');
    })

    $('.btn4').hover(function () {
        $('.tx4').slideToggle('slow');
    })

    $('.btn5').hover(function () {
        $('.tx5').slideToggle('slow');
    })

    $('.btn6').hover(function () {
        $('.tx6').slideToggle('slow');
    })


    $('.partner img').hover(function () {
        $(this).css('filter', 'none');
    }, function () {
        $(this).css('filter', 'grayscale(100%)');
    })


});




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
var images = ["assets/img/a72.jpg", "assets/img/proba.jpg", "assets/img/servis.jpg"];


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


// JQuery





var centarikone = document.getElementById("centarikone");

var centarslike = ["assets/img/prodaja.png", "assets/img/dodatno.png",
    "assets/img/servis.png", "assets/img/pomoc.png", "assets/img/tehnicki.png", "assets/img/pranje.png"];

var centaralt = ["prodaja-automobila", "dodatne-usluge", "servis-automobila", "pomoc-na-putu",
    "tehnicki-pregled", "pranje-automobila"];

var centarnaslov = ["PRODAJA AUTOMOBILA", "POSTPRODAJNE USLUGE", "SERVIS AUTOMOBILA", "POMOĆ NA PUTU",
    "TEHNIČKI PREGLED", "PRANJE AUTOMOBILA"];

var centartext = ["Pregledajte ponudu najkvalitetnijih korišćenih vozila sa našeg placa.",
    "Nudimo vam sve usluge nakon kupovine našeg vozila.",
    "Možete obaviti detaljan pregled i servis vozila bilo kada.",
    "Dostupni smo 24/7 da Vam pružimo pomoć na putu.",
    "Od sada kod nas možete obaviti kompletan tehnički pregled vozila.",
    "Samouslužne perionice na našim placevima su dostupne u svako doba dana."];

var centarbtn = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6"];

var centartx = ["tx1", "tx2", "tx3", "tx4", "tx5", "tx6"];

var centarsve = ["Ako tražite dobar, kvalitetan, pouzdan i automobil sa dobrim odnosom cene i kvaliteta, onda ste na pravom mestu. U našoj ponudi imamo automobile po svačijem ukusu. Sve vrste karoserija kao što su limuzine, karavani, hečbek i SUV vozila. Posetite nas i nađite sebi ono što vam treba.",
    "Kada izaberete i kupite neki od naših automobila ponudićemo vam dodatne usluge kao zahvalnost što verujete u nas. Kao što su detaljno čišćenje određenih spoljašnjih i unutrašnjih delova, kao i promena dotrajalih delova na automobilu.",
    "Prilikom kupovine bilo kog našeg vozila, dobijate garanciju na dve godine tokom kojih možete servisirati automobil bilo kada. Vršimo mali i veliki servis i to potpuno besplatno u toku trajanja garancije.",
    "Ukoliko sarađujete sa nama ili ste kupili naše vozilo, mi smo tu za vas u svakom trenutku na putu. Ukoliko imate nekih problema na putu, pozovite našu šlep službu i mi ćemo odraditi sve za vašu sigurnost.",
    "Naši članovi, takođe, stiču pravo da kod nas redovno obavljaju tehnički pregled vozila, kao i registraciju za sve vrste vozila. Za naše kupce smo spremili i dodatne pogodnosti u vidu prekorendog obavljanja pregleda kao i dodatni popust.",
    "Na svim našim placevima i auto salonima postoje samouslužne perionice gde u svako doba dana možete oprati vaše vozilo. Povoljna cene, dobra usluga i vaše zadovoljstvo su na prvom mestu. Perionice rade 24/7."];


for (q = 0; q < centarslike.length; q++) {

    centarikone.innerHTML += '<div class="col-12 col-md-6 col-xl-4 centar py-4"><img src=' + centarslike[q] + ' alt=' + centaralt[q] + '><h5 class="my-4 font-weight-bold">' + centarnaslov[q] + '</h5><p class="tekstusluge">' + centartext[q] + '</p><i class="fa fa-chevron-down ' + centarbtn[q] + ' btn0"></i><p class=' + centartx[q] + '>' + centarsve[q] + '</p></div>'
}









var taster = document.getElementById("procitajvise");

taster.addEventListener("mouseover", function () {

    taster.classList.add("tasterhover");

})

taster.addEventListener("mouseout", function () {
    taster.classList.remove("tasterhover");
})


var part = document.getElementById("partnerip");

var nizpart = ["assets/img/ams.png",
    "assets/img/cat.png",
    "assets/img/polovni.png",
    "assets/img/raiff.png",
    "assets/img/mojauto.png",
    "assets/img/srb.png"];


var nizalt = ["ams", "cat", "polovni", "raif", "mojauto", "srb"];

for (let i = 0; i < nizpart.length; i++) {

    part.innerHTML += '<div class="col-12 col-md-6 col-xl-2 partner text-center"><img src="' + nizpart[i] + '" alt="' + nizalt[i] + '"></div>'

}



var ikone = document.getElementById("ikone");

var nizikone = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter", "fa fa-youtube"];

var nizlink = ["https://www.facebook.com",
    "https://www.instagram.com",
    "https://twitter.com",
    "https://www.youtube.com/user"];

for (j = 0; j < nizikone.length; j++) {
    ikone.innerHTML += '<a href="' + nizlink[j] + '" target="_blank"><span class="' + nizikone[j] + '"></span></a>'
}


