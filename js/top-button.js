
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    var k = document.getElementById('landing-header');
    if(k){
      var l =k.getElementsByClassName('user-header-sublinks');
    }
  
  var x = document.getElementById('parent-bouncing-arrow');
  if(x){
x.style.display = 'none';
  }
if(l){
  for(i=0; i<l.length; i++){
    l[i].classList.add('nav1');
    }
}
 
if(k){
  k.classList.add('nav');
}

if(document.getElementById('landing-logo')){
  document.getElementById('landing-logo').classList.add('logo-image');
}

  } else {
    if(document.getElementById('landing-logo')){
      document.getElementById('landing-logo').classList.remove('logo-image');

    }
    var x = document.getElementById('parent-bouncing-arrow');
    if(x){
      x.style.display = 'flex';
    }
  
    var k = document.getElementById('landing-header');
    if(k){
      var l =k.getElementsByClassName('user-header-sublinks');
    }
    
    document.getElementById('myBtn').style.display = "none";
    if(  document.getElementById('landing-header')){
      document.getElementById('landing-header').classList.remove('nav');
    }
  
    if(l){
      for(i=0; i<l.length; i++){
        l[i].classList.remove('nav1');
        }
      }
    }
 

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('myBtn').style.display = "block";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
