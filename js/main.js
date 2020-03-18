const increaseTxt = () => {
    document.getElementById("maincontent").style.fontSize = `45px`;
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '20px';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
    {
        h3_arr[j].style.fontSize = '30px';
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.fontSize = '90px';
    var img_arr = document.querySelectorAll("img");
    var img_len = img_arr.length;
    for(var i=0;i<img_len;i++)
    {
        img_arr[i].style.width = '100px';
        img_arr[i].style.length = '120px';
    }
    
}

const decreaseTxt = () => {
    document.getElementById("maincontent").style.fontSize = `15px`;
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '12px';
    }
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '10px';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
    {
        h3_arr[j].style.fontSize = '18px';
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.fontSize = '40px';
    var img_arr = document.querySelectorAll("img");
    var img_len = img_arr.length;
    for(var i=0;i<img_len;i++)
    {
        img_arr[i].style.width = '80px';
        img_arr[i].style.length = '90px';
    }  
}
const defaultTxt = () => {
    document.getElementById("maincontent").style.fontSize = `30px`;
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.fontSize = '16px';
    }
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.fontSize = '15px';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
    {
        h3_arr[j].style.fontSize = '24px';
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.fontSize = '60px';
    var img_arr = document.querySelectorAll("img");
    var img_len = img_arr.length;
    for(var i=0;i<img_len;i++)
    {
        img_arr[i].style.width = '90px';
        img_arr[i].style.length = '105px';
    }
}
const dark = () =>{
    document.querySelector('body').style.backgroundColor="black";
    document.getElementById('social').style.backgroundColor="black";
    document.getElementById("maincontent").style.color = "#FFFF33";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.color = '#FFFF33';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
    {
        h3_arr[j].style.color = "#FFFF33";
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.color = '#FFFF33';
} 
const grey = () => {
    document.querySelector('body').style.backgroundColor="#4c4c4c";
    document.getElementById('social').style.backgroundColor="#4c4c4c";
    document.getElementById("maincontent").style.color = "#FFFF33";
    var arr = document.querySelectorAll("p");
    var length = arr.length;
    for(var i=0;i<length;i++)
    {
        arr[i].style.color = '#FFFF33';
    }
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.color = '#FFFF33';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
    {
        h3_arr[j].style.color = "#FFFF33";
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.color = '#FFFF33';
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
    document.getElementById("maincontent").style.color = "black";
    var listarr = document.querySelectorAll("li");
    var l_length = listarr.length;
    for(var j=0;j<l_length;j++)
    {
        listarr[j].style.color = 'black';
    }
    var h3_arr = document.querySelectorAll("h3");
    var h3_len = h3_arr.length;
    for(var j=0;j<h3_len;j++)
{
        h3_arr[j].style.color = "black";
    }
    var h1_arr = document.querySelectorAll("h1");
    h1_arr[0].style.color = 'white';
}