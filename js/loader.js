window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".page-loader").style.opacity="0";
        setTimeout(function(){
        document.querySelector(".page-loader").style.display="none";
        },500);
    },2000);
});