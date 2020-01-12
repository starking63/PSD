//Custom JS file
//--8/10/2019--//

//Set Variation
//Set Flag
var location_fg = false;
var clean_fg = false;
var home_fg = false;

//Get Elememt
const info_button = document.getElementById('info_button');
const items = document.getElementsByClassName('info_item');
const location_span = document.getElementById('location');
const clean_span = document.getElementById('clean');
const home_span = document.getElementById('home');
const location_div = document.getElementById('info_location');
const clean_div = document.getElementById('info_clean');
const home_div = document.getElementById('info_home');

//Define Click Event for sub Menu
for ( var i = 0; i < items.length; i++ ) {
  var itemes = items[i];
  itemes.addEventListener('click', insertInfo);
}
//Define Click Event for Button
info_button.addEventListener('click', sendInfo);

//Hidden Info DropDown Menu for mobile
if ( document.body.offsetWidth < 992){
  clean_div.classList.add('hide');
  home_div.classList.add('hide');
  location_span.innerHTML = 'Vad är ditt postnummer?';
  clean_span.innerHTML = 'Vilken städtyp?';
  home_span.innerHTML = 'Bostadens storlek?';
}

//Function for Change info and display OK image
function insertInfo() {
  var text = this.innerHTML;
  var parent = event.path[3];
  var parentID = $(parent)[0].id;
  switch(parentID) {
    case 'info_location':
      var okImage = $(parent).find('.info_ok');
      okImage.addClass('show');
      location_fg = true;
      location_span.innerHTML = text;
      $('#info_location').removeClass('show');
      $('#info_location').find('.dropdown-menu').removeClass('show');
      $('#info_location').find('.dropdown-menu').removeClass('shows');
      $('#info_clean').addClass('show');
      $('#info_clean').find('.dropdown-menu').addClass('show');
      $('#info_clean').find('.dropdown-menu').addClass('shows');
      if ( document.body.offsetWidth < 992){
        location_div.classList.add('hide');
        clean_div.classList.remove('hide');
      }
      break;
    case 'info_clean':
      var okImage = $(parent).find('.info_ok');
      okImage.addClass('show');
      clean_span.innerHTML = text;
      clean_fg = true;
      $('#info_clean').removeClass('show');
      $('#info_clean').find('.dropdown-menu').removeClass('show');
      $('#info_clean').find('.dropdown-menu').removeClass('shows');
      $('#info_home').addClass('show');
      $('#info_home').find('.dropdown-menu').addClass('show');
      $('#info_home').find('.dropdown-menu').addClass('shows');
      if ( document.body.offsetWidth < 992) {
        clean_div.classList.add('hide');
        home_div.classList.remove('hide');
      }
      break;
    case 'info_home':
      var okImage = $(parent).find('.info_ok');
      okImage.addClass('show');
      home_span.innerHTML = text;
      home_fg = true;
      // $('#info_home').removeClass('shows');
      $('#info_home').find('.dropdown-menu').removeClass('show');
      $('#info_home').find('.dropdown-menu').removeClass('shows');
      break;
  }
  if ( location_fg && clean_fg && home_fg ) {
    info_button.classList.add('info_click');
  }
}
// Function for Click info Button
function sendInfo() {
  // Function for Mobile
  if ( document.body.offsetWidth < 992){
    clean_div.classList.add('hide');
    home_div.classList.add('hide');
    location_div.classList.remove('hide');
  }
    formatInfo();
}
//Fomart Info Data
function formatInfo() {
  var images = document.getElementsByClassName('info_ok');
  for ( var i = 0; i < images.length; i++ ) {
    images[i].classList.remove('show');
  }
  location_fg = false;
  clean_fg = false;
  home_fg = false;
  info_button.classList.remove('info_click');
  location_span.innerHTML = 'Område';
  clean_span.innerHTML = 'Städtyp';
  home_span.innerHTML = 'Bostadens storlek';
  $('#info_location').find('.dropdown-menu').removeClass('shows');
  $('#info_clean').find('.dropdown-menu').removeClass('shows');
  $('#info_home').find('.dropdown-menu').removeClass('shows');
  $('#info_location').find('.dropdown-menu').removeClass('show');
  $('#info_clean').find('.dropdown-menu').removeClass('show');
  $('#info_home').find('.dropdown-menu').removeClass('show');
  if ( document.body.offsetWidth < 992){
    clean_div.classList.add('hide');
    home_div.classList.add('hide');
    location_span.innerHTML = 'Vad är ditt postnummer?';
    clean_span.innerHTML = 'Vilken städtyp?';
    home_span.innerHTML = 'Bostadens storlek?';
  }
}

$('#mobile_nav_hamgergerIcon').on('click', function () {
  $('#animated-icon').toggleClass('open');
  $('#navbarSupportedContent').toggleClass('open');
  $('#arrow').removeClass('open');
});
$('#toogle_subMenu').on('click', function () {
  $('#arrow').toggleClass('open');
});
var subMenu_array = $('#mobile_nav_subMenu').find('li');
for ( var i= 0; i < subMenu_array.length; i++ ) {
  $(subMenu_array[i]).on('click', function () {
    $('#arrow').removeClass('open');
  });
}