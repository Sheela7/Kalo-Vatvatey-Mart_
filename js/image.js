
var any = document.getElementById('imageModal'); 

document.onclick = function(event){

if(event.target == imageModal){
imageModal.style.display = 'none';
}
if(event.target == modalImageContent){ 
  any.style.display = 'none';
}
}

function tableImage1(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('table-image1').setAttribute('src', e.target.result);
document.getElementById('table-image1').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function tableImage2(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('table-image2').setAttribute('src', e.target.result);
document.getElementById('table-image2').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function tableImage3(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('table-image3').setAttribute('src', e.target.result);
document.getElementById('table-image3').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function propsImage(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('props-image').setAttribute('src', e.target.result);
document.getElementById('props-image').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function menuImage(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('menu-image').setAttribute('src', e.target.result);
document.getElementById('menu-image').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function propsImage(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('props-image').setAttribute('src', e.target.result);
document.getElementById('props-image').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function propsImage1(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('props-image1').setAttribute('src', e.target.result);
document.getElementById('props-image1').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function propsImage2(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('props-image2').setAttribute('src', e.target.result);
document.getElementById('props-image2').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function displayPicture(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('profile-image-show').setAttribute('src', e.target.result);
};
reader.readAsDataURL(input.files[0]);
}
}

function closeImageModal(){
document.getElementById('imageModal').style.display = 'none';
}

function openImage(input){
document.getElementById('selectedImageModal').setAttribute('src', input.src);
document.getElementById('imageModal').style.display = 'block';
}


