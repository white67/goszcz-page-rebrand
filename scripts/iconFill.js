$(function() {
    $('.logoSectionYoutube').hover(function() {
      $('.logoSectionYoutube svg path').css('fill', '#FF0000');
    }, function() {
      // on mouseout, reset the background colour
      $('.logoSectionYoutube svg path').css('fill', '');
    });
  });

  $(function() {
    $('.logoSectionFacebook').hover(function() {
      $('.logoSectionFacebook svg path').css('fill', '#4267B2');
    }, function() {
      // on mouseout, reset the background colour
      $('.logoSectionFacebook svg path').css('fill', '');
    });
  });

  $(function() {
    $('.logoSectionInstagram').hover(function() {
      $('.logoSectionInstagram svg path').css('fill', '#8a3ab9');
    }, function() {
      // on mouseout, reset the background colour
      $('.logoSectionInstagram svg path').css('fill', '');
    });
  });