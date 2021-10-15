let contrastValue = 1

function changeContrast() { 
    if (contrastValue == 1) {
        $("<style id='contrastFunction'>* { color: #ffff00 !important; background-color: black !important; fill: #ffff00 !important; border-color: #ffff00 !important; }    .menu-btn__burger { background-color: #ffff00 !important; } .menu-btn__burger::before { background-color: #ffff00 !important; } .menu-btn__burger::after { background-color: #ffff00 !important; }</style>").appendTo("head");
        $('section').css("background-image", 'none');
        contrastValue = 2;

        //document.documentElement.style.setProperty('--burger', '#ffff00');
    } else if (contrastValue == 2){
        $("<style id='contrastFunction'>* { color: #ffffff !important; background-color: black !important; fill: #ffffff !important; border-color: #ffffff !important;}    .menu-btn__burger { background-color: #ffffff !important; } .menu-btn__burger::before { background-color: #ffffff !important; } .menu-btn__burger::after { background-color: #ffffff !important; }</style>").appendTo("head");
        $('section').css("background-image", 'none');
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem);
        contrastValue = 3;

        //document.documentElement.style.setProperty('--burger', '#ffffff');
    } else {
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem);
        $('section').css("background-image", '');
        contrastValue = 1;

        //document.documentElement.style.setProperty('--burger', '#9a3231');
    }
} 
