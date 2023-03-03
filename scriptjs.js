
function myfunction(){
    var a=1024
    var b=9999
    var degree = Math.floor(Math.random()*(a-b))+b;
    document.getElementById('box').style.transform = "rotate("+degree+"deg)";
var element =document.getElementById('mainbox')
element.classList.remove('animate')

setTimeout(function(){
    element.classList.add('animate')
}, 5000) 
}



   



