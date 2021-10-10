let contrastValue = 1

function changeContrast() { 
    if (contrastValue == 1) {
        $("<style id='contrastFunction'>* { color: #ffff00 !important; background-color: black !important; fill: #ffff00 !important; }</style>").appendTo("head");
        contrastValue = 2;
    } else if (contrastValue == 2){
        $("<style id='contrastFunction'>* { color: #ffffff !important; background-color: black !important; fill: #ffffff !important; }</style>").appendTo("head");
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem)
        contrastValue = 3;
    } else {
        (elem=document.getElementById("contrastFunction")).parentNode.removeChild(elem)
        contrastValue = 1;
    }
} 