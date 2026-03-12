function initNavbar(){

const closeBtn=document.querySelector('.menu-close');
closeBtn.onclick=()=>{
    nav.classList.remove('active');
    overlay.classList.remove('active');
}
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
const overlay=document.querySelector('.nav-overlay');
const toggle=document.querySelector('.theme-toggle');

if(!menuBtn) return;

// Mobile Menu
menuBtn.onclick=()=>{
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}

overlay.onclick=()=>{
    nav.classList.remove('active');
    overlay.classList.remove('active');
}

// Close menu when clicking link
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// Dark Mode
toggle.onclick=()=>{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        toggle.classList.replace('fa-moon','fa-sun');
    }else{
        toggle.classList.replace('fa-sun','fa-moon');
    }
}

}


// Scroll Progress
window.addEventListener("scroll",()=>{
let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(scrollTop/height)*100;

const progress=document.querySelector(".scroll-progress");
if(progress){
progress.style.width=scrolled+"%";
}
});


// Component Loader
function loadComponent(id,file){

fetch(file)
.then(res=>res.text())
.then(data=>{
document.getElementById(id).innerHTML=data;

if(id==="header"){
initNavbar();
}

});

}


// Page Ready
document.addEventListener("DOMContentLoaded",()=>{

loadComponent("header","header.html");
loadComponent("footer","footer.html");

});

