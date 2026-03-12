        document.querySelectorAll('.nav-links a').forEach(link=>{
            link.addEventListener("click",()=>{
                nav.classList.remove("active");
            });
        });
        const menuBtn=document.querySelector('.menu-btn');
        const nav=document.querySelector('.nav-links');
        const overlay=document.querySelector('.nav-overlay');

        menuBtn.onclick=()=>{
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        overlay.onclick=()=>{
            nav.classList.remove('active');
            overlay.classList.remove('active');
        }

        const toggle=document.querySelector('.theme-toggle');
        toggle.onclick=()=>{
            document.body.classList.toggle('dark');
            if(document.body.classList.contains('dark')){
            toggle.classList.remove('fa-moon');
            toggle.classList.add('fa-sun');
            }else{
            toggle.classList.remove('fa-sun');
            toggle.classList.add('fa-moon');
            }
        }

        window.addEventListener("load", function(){
            setTimeout(function(){
                document.querySelector(".page-loader").style.opacity="0";
                setTimeout(function(){
                document.querySelector(".page-loader").style.display="none";
                },1500);
            },3500);
        });

        window.addEventListener("scroll",()=>{
            let scrollTop=document.documentElement.scrollTop;
            let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

            let scrolled=(scrollTop/height)*100;

            document.querySelector(".scroll-progress").style.width=scrolled+"%";
        });
        const mobileContactBtn=document.querySelector(".mobile-contact-btn");
        const mobileContactMenu=document.querySelector(".mobile-contact-menu");

        mobileContactBtn.onclick=()=>{
            mobileContactMenu.classList.toggle("active");
        };