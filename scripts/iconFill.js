var red = '#9a3231';
var darkred = '#751312';
var lightred = '#e9706f';
var superwhite = '#f0f0f0';
var lightgrey = '#cfcfcf';
var darkblue = '#182546';
var darkblue2 = 'rgba(24, 37, 70, 0.75)';
var normalgrey = '#878787';
var blendblue = '#5b647c';
var logoYoutube = '#ff0000';
var logoFacebook = '#4267b2';
var logoInstagram = '#8a3ab9';
var bgWhite = 'white';
var fontWhite = 'white';
var iconWhite = 'white';


$(function() {
  $('.logoSectionYoutube').hover(function() {
    $('.logoSectionYoutube svg path').css('fill', logoYoutube);
  }, function() {
    // on mouseout, reset the background colour
    $('.logoSectionYoutube svg path').css('fill', '');
  });
});

$(function() {
  $('.logoSectionFacebook').hover(function() {
    $('.logoSectionFacebook svg path').css('fill', logoFacebook);
  }, function() {
    // on mouseout, reset the background colour
    $('.logoSectionFacebook svg path').css('fill', '');
  });
});

$(function() {
  $('.logoSectionInstagram').hover(function() {
    $('.logoSectionInstagram svg path').css('fill', logoInstagram);
  }, function() {
    // on mouseout, reset the background colour
    $('.logoSectionInstagram svg path').css('fill', '');
  });
});

$(function() {
  $('.ftrLeftElement1').hover(function() {
    $('.ftrLeftElement1Logo svg').css('fill', red);
    $('.ftrLeftElement1Text').css('color', red);
  }, function() {
    // on mouseout, reset the background colour
    $('.ftrLeftElement1Logo svg').css('fill', '');
    $('.ftrLeftElement1Text').css('color', '');
  });
});

$(function() {
  $('.ftrLeftElement2').hover(function() {
    $('.ftrLeftElement2Logo svg').css('fill', red);
    $('.ftrLeftElement2Text').css('color', red);
  }, function() {
    // on mouseout, reset the background colour
    $('.ftrLeftElement2Logo svg').css('fill', '');
    $('.ftrLeftElement2Text').css('color', '');
  });
});

$(function() {
  $('.ftrLeftElement3').hover(function() {
    $('.ftrLeftElement3Logo svg').css('fill', red);
    $('.ftrLeftElement3Text').css('color', red);
  }, function() {
    // on mouseout, reset the background colour
    $('.ftrLeftElement3Logo svg').css('fill', '');
    $('.ftrLeftElement3Text').css('color', '');
  });
});
