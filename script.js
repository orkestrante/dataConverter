
function byteConverter(){
    document.converter.kb.value = document.converter.byte.value / 1024;
    document.converter.mb.value = document.converter.byte.value / (1024*1024);
}

function kbConverter(){
    document.converter.byte.value = document.converter.kb.value * 1024;
    document.converter.mb.value = document.converter.kb.value / 1024;
}

function mbConverter(){
    document.converter.byte.value = document.converter.mb.value * 1024 * 1024;
    document.converter.kb.value = document.converter.mb.value * 1024;
}

var convertForm = document.getElementsByClassName("js-convertForm");

convertForm[0].addEventListener("submit", function(event) {
    event.preventDefault();
    byteConverter();
   
});

document.converter.kb.onchange = kbConverter;
document.converter.mb.onchange = mbConverter;

//gets the element by its id
var myFile = document.getElementById('myFile');


//binds to onchange event of the input field
myFile.addEventListener('change', function() {
    var fileByte = document.getElementById("byte");
    fileByte.value = this.files[0].size;
    move();
});







//function move(fileByte) {
//    var elem = document.getElementById("myBar"); 
//    var width = 1;
//    var id = setInterval(frame, 10);
//    var maxByteValue = 1000000;
//    function frame() {
//        if (width >= 100) {
//            clearInterval(id);
//        } else {
//            width = fileByte; 
//            elem.style.width = width + '%'; 
//        }
//    }
//}













