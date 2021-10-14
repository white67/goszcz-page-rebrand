let fontSizeRn = 1

$(document).on('click', '#btnFontSizeNormal', function(){
    $('body').css("font-size", "1rem");
    fontSizeRn = 1
});

$(document).on('click', '#btnFontSizeDown', function(){
    $('body').css("font-size", `${fontSizeRn = fontSizeRn - 0.1}rem`);
    fontSizeRn = fontSizeRn - 0.1
});

$(document).on('click', '#btnFontSizeUp', function(){
    $('body').css("font-size", `${fontSizeRn = fontSizeRn + 0.1}rem`);
    fontSizeRn = fontSizeRn + 0.1
});