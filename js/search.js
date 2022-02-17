function tableSearch(){
var value = document.getElementById('table-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('table-single-card');

for(i=0; i<cardValue.length; i++){
acc = cardValue[i].querySelector("h4").innerText;

if (acc.toUpperCase().indexOf(value) > -1) {
cardValue[i].style.display = "block";

}else{
cardValue[i].style.display = "none";
}
}
}

function bookingSearch(){
var value = document.getElementById('booking-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('booking-details');

for(i=0; i<cardValue.length; i++){
var k =cardValue[i].querySelector('h4').innerText.toUpperCase();
if(k.indexOf(value)>-1){
cardValue[i].style.display = 'block';
}else{
cardValue[i].style.display = 'none';
}
}
}

function menuSearch(){
var value = document.getElementById('menu-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('single-menu');

for(i=0; i<cardValue.length; i++){
var k =cardValue[i].querySelector('h4').innerText.toUpperCase();
if(k.indexOf(value)>-1){
cardValue[i].style.display = 'block';
}else{
cardValue[i].style.display = 'none';
}
}
}

function customerSearch(){
var value = document.getElementById('customer-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('customer-detail-container');
for(i=0; i<cardValue.length; i++){
var k =cardValue[i].querySelector('h4').innerText.toUpperCase();
if(k.indexOf(value)>-1){
cardValue[i].style.display = 'block';
}else{
cardValue[i].style.display = 'none';
}
}

}

function salesSearch(){
var value = document.getElementById('sales-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('sales-page-details');

for(i=0; i<cardValue.length; i++){
var k =cardValue[i].querySelector('h4').innerText.toUpperCase();
if(k.indexOf(value)>-1){
cardValue[i].style.display = 'block';
}else{
cardValue[i].style.display = 'none';
}
}
}

function propsSearch(){
var value = document.getElementById('props-search-wrapper-input').value.toUpperCase();
var cardValue = document.getElementsByClassName('single-props');

for(i=0; i<cardValue.length; i++){
var k =cardValue[i].querySelector('h4').innerText.toUpperCase();
if(k.indexOf(value)>-1){
cardValue[i].style.display = 'block';
}else{
cardValue[i].style.display = 'none';
}
}
}



