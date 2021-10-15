let fontSizeRn = 1  // ustaw wartość podstawową dla rozmiaru fontu (1 rem)

    // przywrócenie rozmiaru do podstawowego
$(document).on('click', '#btnFontSizeNormal', function(){
    $('body').css("font-size", "1rem");
    fontSizeRn = 1;

    // jeśli rozmiar fontu jest większy lub równy 1.4, usuń border dla diva o klasie .footerMainLeft
    if(fontSizeRn >= 1.4){
        $('.footerMainLeft').css("border-right", "none");
    } else if(fontSizeRn < 1.4){
        $('.footerMainLeft').css("border-right", "");
    }
});

    // zmniejszanie rozmiaru fontu -0.1rem
$(document).on('click', '#btnFontSizeDown', function(){
    if((fontSizeRn > 0.6) && (fontSizeRn < 1.7)) {
        fontSizeRn = fontSizeRn - 0.1;  // zaktualizuj wartość dla obecnego rozmiaru
        $('body').css("font-size", `${fontSizeRn}rem`);

        // jeśli rozmiar fontu jest większy lub równy 1.4, usuń border dla diva o klasie .footerMainLeft
        if(fontSizeRn >= 1.4){
            $('.footerMainLeft').css("border-right", "none");
        } else if(fontSizeRn < 1.4){
            $('.footerMainLeft').css("border-right", "");
        }
    } else if(fontSizeRn < 0.6) {
        pass;
    }   // ustawienie limitu pomniejszenia rozmiaru fontu
});

    // zwięszkanie rozmiaru fontu +0.1rem
$(document).on('click', '#btnFontSizeUp', function(){
    if((fontSizeRn > 0.4) && (fontSizeRn < 1.6)) {
        fontSizeRn = fontSizeRn + 0.1;  // zaktualizuj wartość dla obecnego rozmiaru
        $('body').css("font-size", `${fontSizeRn}rem`);

        // jeśli rozmiar fontu jest większy lub równy 1.4, usuń border dla diva o klasie .footerMainLeft
        if(fontSizeRn >= 1.4){
            $('.footerMainLeft').css("border-right", "none");
        } else if(fontSizeRn < 1.4){
            $('.footerMainLeft').css("border-right", "");
        }
    } else if(fontSizeRn > 1.6) {
        pass;
    }   // ustawienie limitu powiększenia rozmiaru fontu
});