const increaseTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '20px';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.fontSize = '90px';
    }
    document.getElementById("maincontent").style.fontSize = '36px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '20px';
    }
}
const decreaseTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '10px';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.fontSize = '70px';
    }
    document.getElementById("maincontent").style.fontSize = '24px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '10px';
    }
}
const defaultTxt = () => {
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '15px';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.fontSize = '80px';
    }
    document.getElementById("maincontent").style.fontSize = '30px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '15px';
    }
}
const dark = () =>{
    document.querySelector('body').style.backgroundColor="black";
    document.getElementById('social').style.backgroundColor="black";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
} 
const grey = () => {
    document.querySelector('body').style.backgroundColor="#4c4c4c";
    document.getElementById('social').style.backgroundColor="#4c4c4c";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
}
const light = () => {
    document.querySelector('body').style.backgroundColor="white";
    document.getElementById('social').style.backgroundColor="white";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = 'black';
    }
    var h1_arr = document.querySelectorAll("h1");
    var h1_length = h1_arr.length;
    for(var i=0;i<h1_length;i++)
    {
        h1_arr[i].style.color = 'white';
    }
    document.getElementById("maincontent").style.color = "black";
}