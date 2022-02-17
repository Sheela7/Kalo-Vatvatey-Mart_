function closeNav(){
document.getElementById('dashboard-close-icon').style.display = 'none';
document.getElementById('dashboard-open-icon').style.display = 'block';
document.getElementById('sidebar').style.width = 0;
document.getElementById('main-content').style.marginLeft = 0;

}

function openNav(){
document.getElementById('dashboard-close-icon').style.display = 'block';
document.getElementById('dashboard-open-icon').style.display = 'none';
document.getElementById('sidebar').style.width = '200px';
document.getElementById('main-content').style.marginLeft = '210px';
}

function openMobileNav(){
document.getElementById('sidebar').style.width = '100%';
}

function closeMobileNav(){
document.getElementById('sidebar').style.width = '0';
}

