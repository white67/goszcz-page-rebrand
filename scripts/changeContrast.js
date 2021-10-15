let contrastValue = 1   // ustaw wartość dla podstawowego kontrastu strony

function changeContrast() { 
        // zmień kontrast na czarno-żółty
    if (contrastValue == 1) {
        $("<style id='contrastFunction'>* { color: #ffff00 !important; background-color: black !important; fill: #ffff00 !important; border-color: #ffff00 !important; }    .menu-btn__burger { background-color: #ffff00 !important; } .menu-btn__burger::before { background-color: #ffff00 !important; } .menu-btn__burger::after { background-color: #ffff00 !important; }</style>").appendTo("head");   // dodaj odpowiednie dla tego kontrastu style do head
        $('section').css("background-image", 'none');   // usuń grafikę z diva section
        contrastValue = 2;  // zmień wartość kontrastu na drugą

        // zmień kontrast na czarno-biały
    } else if (contrastValue == 2){ 
        $("<style id='contrastFunction'>* { color: #ffffff !important; background-color: black !important; fill: #ffffff !important; border-color: #ffffff !important;}    .menu-btn__burger { background-color: #ffffff !important; } .menu-btn__burger::before { background-color: #ffffff !important; } .menu-btn__burger::after { background-color: #ffffff !important; }</style>").appendTo("head");   // dodaj odpowiednie dla tego kontrastu style do head
        $('section').css("background-image", 'none');   // usuń grafikę z diva section
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem);
        contrastValue = 3; // zmień wartość kontrastu na trzecią

        // zmień kontrast na podstawowy
    } else {
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem);
        $('section').css("background-image", '');   // przywróć grafikę z diva section
        contrastValue = 1; // zmień wartość kontrastu na podstawową
    }
} 
