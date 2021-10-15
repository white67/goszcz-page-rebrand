let fontSizeRn = 1

$(document).on('click', '#btnFontSizeNormal', function(){
    $('body').css("font-size", "1rem");
    fontSizeRn = 1;
    if(fontSizeRn >= 1.4){
        $('.footerMainLeft').css("border-right", "none");
    } else if(fontSizeRn < 1.4){
        $('.footerMainLeft').css("border-right", "");
    }
});

$(document).on('click', '#btnFontSizeDown', function(){
    if((fontSizeRn > 0.6) && (fontSizeRn < 1.7)) {
        fontSizeRn = fontSizeRn - 0.1;
        $('body').css("font-size", `${fontSizeRn}rem`);
        if(fontSizeRn >= 1.4){
            $('.footerMainLeft').css("border-right", "none");
        } else if(fontSizeRn < 1.4){
            $('.footerMainLeft').css("border-right", "");
        }
    } else if(fontSizeRn < 0.6) {
        pass;
    } 
});

$(document).on('click', '#btnFontSizeUp', function(){
    if((fontSizeRn > 0.4) && (fontSizeRn < 1.6)) {
        fontSizeRn = fontSizeRn + 0.1;
        $('body').css("font-size", `${fontSizeRn}rem`);
        if(fontSizeRn >= 1.4){
            $('.footerMainLeft').css("border-right", "none");
        } else if(fontSizeRn < 1.4){
            $('.footerMainLeft').css("border-right", "");
        }
    } else if(fontSizeRn > 1.5) {
        pass;
    } 
});