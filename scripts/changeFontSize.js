let fontSizeRn = 1

$(document).on('click', '#btnFontSizeNormal', function(){
    $('body').css("font-size", "1rem");
    fontSizeRn = 1;
});

$(document).on('click', '#btnFontSizeDown', function(){
    if((fontSizeRn > 0.6) && (fontSizeRn < 1.7)) {
        fontSizeRn = fontSizeRn - 0.1;
        $('body').css("font-size", `${fontSizeRn}rem`);
    } else if(fontSizeRn < 0.6) {
        pass;
    } 
});

$(document).on('click', '#btnFontSizeUp', function(){
    if((fontSizeRn > 0.4) && (fontSizeRn < 1.6)) {
        fontSizeRn = fontSizeRn + 0.1;
        $('body').css("font-size", `${fontSizeRn}rem`);
    } else if(fontSizeRn > 1.5) {
        pass;
    } 
});