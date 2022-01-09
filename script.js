$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle nav bar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //  type animation script 
    var typed = new Typed(".typing",{
        strings: ["FrontEnd Developer","Backend Developer","FullStack Developer","Student"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
});