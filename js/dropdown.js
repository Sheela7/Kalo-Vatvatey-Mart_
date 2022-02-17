
window.onload =  function (){
var x = window.matchMedia('(max-width: 769px)');
if(x.matches){
document.getElementById('birthday-arrangement').style.height = '500px'
}else{
document.getElementById('birthday-arrangement').style.height = '300px';
}
}

function showDiv(event){
var x = window.matchMedia('(max-width: 769px)');
if(x.matches){
console.log('yes');
event.style.height != '500px' ? event.style.height = '500px' : event.style.height = '40px';
}else{
console.log('no')
event.style.height != '40px' ? event.style.height = '40px' : event.style.height = '300px';
}

var k = document.getElementById(event.id);
var l = k.getElementsByClassName('fa-angle-down');
var x = k.getElementsByClassName('fa-angle-up');

if(l.length != 0){
l[0].classList.replace('fa-angle-down', 'fa-angle-up');
}else{
x[0].classList.replace('fa-angle-up', 'fa-angle-down');
}

}