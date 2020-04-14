const increaseTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.fontSize = '20px';
    }
    document.getElementById("maincontent").style.fontSize = '35px';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.fontSize = '20px';
    }
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
        arr[i].style.fontSize = '10px';
    }
    document.getElementById("maincontent").style.fontSize = '25px';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.fontSize = '12px';
    }
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
        arr[i].style.fontSize = '15px';
    }
    document.getElementById("maincontent").style.fontSize = '30px';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.fontSize = '16px';
    }
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for (var j = 0; j < l_length; j++) {
        listarr[j].style.fontSize = '15px';
    }
}
const dark = () => {
    document.querySelector('body').style.backgroundColor = "#121212";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.color = '#FFFF33';
    }
    var th_arr = document.querySelectorAll("th");
    var th_length = th_arr.length;
    for (var j = 0; j < th_length; j++) {
        th_arr[j].style.color = '#FFFF33';
    }
    document.querySelector('hr').style.backgroundColor = "#FFFF33";
}
const grey = () => {
    document.querySelector('body').style.backgroundColor = "#4c4c4c";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.color = '#FFFF33';
    }
    var th_arr = document.querySelectorAll("th");
    var th_length = th_arr.length;
    for (var j = 0; j < th_length; j++) {
        th_arr[j].style.color = '#FFFF33';
    }
    document.querySelector('hr').style.backgroundColor = "#FFFF33";
}
const light = () => {
    document.querySelector('body').style.backgroundColor = "white";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        arr[i].style.color = 'black';
    }
    document.getElementById("maincontent").style.color = 'black';
    var td_arr = document.querySelectorAll("td");
    var td_length = td_arr.length;
    for (var j = 0; j < td_length; j++) {
        td_arr[j].style.color = 'black';
    }
    var th_arr = document.querySelectorAll("th");
    var th_length = th_arr.length;
    for (var j = 0; j < th_length; j++) {
        th_arr[j].style.color = 'black';
    }
    document.querySelector('hr').style.backgroundColor = "black";
}