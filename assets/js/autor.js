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
var images = ["assets/img/autor.jpg", "assets/img/autor1.jpg"];

function changeImg() {
  x.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", 3000);
}
window.onload = changeImg;

var tr = document.getElementById("trautor");

var ikone = [
  "fa fa-instagram",
  "fa fa-facebook-f",
  "fa fa-linkedin",
  "fa fa-twitter",
];

var ikonehref = [
  "https://www.instagram.com/_mix_98/",
  "https://www.facebook.com/mihajlo.neymar",
  "https://www.linkedin.com/in/mihajlo-vujsi%C4%87-45276915b/",
  "https://twitter.com/MihajloVujsic",
];

for (let p = 0; p < ikone.length; p++) {
  tr.innerHTML +=
    '<td><a href="' +
    ikonehref[p] +
    '" target="_blank"><i class="' +
    ikone[p] +
    '"></i></a></td>';
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


  $("#tabaut table tr:even").css("background-color", "#f4f4f4");

  $("#tabiko td:even").css("background-color", "#f4f4f4");

  $("#tabiko").hide();

  $("#procitajvise").click(function () {
    $("#tabiko").toggle();

    if ($("#tabiko").is(":visible")) {
      $("#procitajvise").removeClass("fa fa-chevron-down");
      $("#procitajvise").addClass("fa fa-chevron-up");
    } else {
      $("#procitajvise").removeClass("fa fa-chevron-up");
      $("#procitajvise").addClass("fa fa-chevron-down");
    }
  });
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
