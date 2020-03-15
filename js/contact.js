const increaseTxt = () => {
    var arr = document.querySelectorAll("h1");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '70px';
    }
    document.getElementById("maincontent").style.fontSize = '40px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '20px';
    }

}
const decreaseTxt = () => {
    var arr = document.querySelectorAll("h1");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '50px';
    }
    document.getElementById("maincontent").style.fontSize = '32px';
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '10px';
    }
}
const defaultTxt = () => {
    var arr = document.querySelectorAll("h1");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '60px';
    }
    document.getElementById("maincontent").style.fontSize = '36px';
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
    var arr = document.querySelectorAll("h1");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
    var label_arr = document.querySelectorAll("label");
    var label_length = label_arr.length;
    for(var i=0;i<label_length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
} 
const grey = () => {
    document.querySelector('body').style.backgroundColor="#4c4c4c";
    document.getElementById('social').style.backgroundColor="#4c4c4c";
    var arr = document.querySelectorAll("h1");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    document.getElementById("maincontent").style.color = '#FFFF33';
    var label_arr = document.querySelectorAll("label");
    var label_length = label_arr.length;
    for(var i=0;i<label_length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
}
const light = () => {
    document.querySelector('body').style.backgroundColor="white";
    document.getElementById('social').style.backgroundColor="white";
    var arr = document.querySelectorAll("h1");
    arr[0].style.color = 'white';
    var h2_arr = document.querySelectorAll('h2');
    h2_arr[0].style.color = 'black';
    document.getElementById("maincontent").style.color = 'black';
    var label_arr = document.querySelectorAll("label");
    var label_length = label_arr.length;
    for(var i=0;i<label_length;i++)
    {
        arr[i].style.color = 'black';
    }
}