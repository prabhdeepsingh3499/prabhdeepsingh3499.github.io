
const increaseTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.fontSize = '20px';
    }
    document.getElementById("maincontent").style.fontSize = '35px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for (var j = 0; j < l_length; j++) {
        listarr[j].style.fontSize = '20px';
    }
}
const decreaseTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.fontSize = '12px';
    }
    document.getElementById("maincontent").style.fontSize = '25px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for (var j = 0; j < l_length; j++) {
        listarr[j].style.fontSize = '10px';
    }
}
const defaultTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.fontSize = '16px';
    }
    document.getElementById("maincontent").style.fontSize = '30px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for (var j = 0; j < l_length; j++) {
        listarr[j].style.fontSize = '15px';
    }
}
const dark = () => {
    document.querySelector('body').style.backgroundColor = "#121212";
    document.getElementById('social').style.backgroundColor = "#121212";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = "#FFFF33";
    }
    document.getElementById("maincontent").style.color = "#FFFF33";
}
const grey = () => {
    document.querySelector('body').style.backgroundColor = "#4c4c4c";
    document.getElementById('social').style.backgroundColor = "#4c4c4c";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = "#FFFF33";
    }
    document.getElementById("maincontent").style.color = "#FFFF33";
}
const light = () => {
    document.querySelector('body').style.backgroundColor = "white";
    document.getElementById('social').style.backgroundColor = "white";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = "black";
    }
    document.getElementById("maincontent").style.color = "black";
}