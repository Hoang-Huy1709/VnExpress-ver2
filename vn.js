//Get  current time and date 
const date = document.querySelector(".date");
date.innerText = new Date().toLocaleString('vi');

// menu bar fixer when user scroll
const all = document.querySelector(".all");
const menu_header = document.querySelector(".menu-header");
const more_menu_space = document.querySelector(".more-menu");
window.addEventListener("scroll",function(){
    if(window.scrollY >= 46){
        menu_header.style.position = "fixed";
        menu_header.style.top = "0px";
        menu_header.style.boxShadow = "0px 0px 20px rgb(0,0,0,0.5)";
        menu_header.style.zIndex = "1";
        // more menu
        more_menu_space.style.top = "35px";
        more_menu_space.style.height = "100vh";
    }else{
        menu_header.style.position = "relative";
        menu_header.style.boxShadow = "none";
        // more menu
        more_menu_space.style.top = "85px";
        more_menu_space.style.height = "95vh";
    }
})

//hide of show more menu 
const main_menu = document.querySelector(".more-menu");
const all_icon_bt = document.querySelector(".menu-bt");
const all_icon = document.querySelector(".menu-icon");
const close_menu_bt = document.querySelector(".close-menu-bt");


all_icon_bt.addEventListener("click",function(){
    main_menu.style.display = "flex";
})

all_icon.addEventListener("click",function(){
    main_menu.style.display = "flex";
})

close_menu_bt.addEventListener("click",function(){
    main_menu.style.display = "none";
})

//process scheduse board
const scheduse_left_chevron = document.querySelector(".left-chevron-icon");
const scheduse_right_chevron = document.querySelector(".right-chevron-icon");
const scheduse_ul = document.querySelector(".right-scheduse");
const scheduse_li = document.querySelectorAll(".right-scheduse li");
var count_click_right_chevron = 0;
var count_click_left_chevron = 0;

//hide left chevron when not scrolling
const hide_left_icon_scheduse = () =>{
    if(scheduse_ul.scrollLeft <= 10){
        scheduse_left_chevron.style.display = "none";
    }else{
        scheduse_left_chevron.style.display = "block";
    }
}

//hide the right chevron on end scroll
const hide_right_icon_scheduse = () =>{
    if(count_click_right_chevron >= 5){
        scheduse_right_chevron.style.display = "none";
    }else{
        scheduse_right_chevron.style.display = "block";
    }
}

//Move right 200
scheduse_right_chevron.addEventListener("click",function(){
    scheduse_ul.scrollLeft += 200;
    count_click_right_chevron++;
    hide_left_icon_scheduse();
    hide_right_icon_scheduse();
})  

//Move left 200
scheduse_left_chevron.addEventListener("click",function(){
    scheduse_ul.scrollLeft -= 200;
    count_click_right_chevron--;
    hide_left_icon_scheduse();
    hide_right_icon_scheduse();
}) 


