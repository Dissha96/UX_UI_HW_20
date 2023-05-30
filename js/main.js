$(function(){
    $(".btn_header").hover(function() {
        $(this).addClass("hovered");
    },
    function() {
        $(this).removeClass("hovered");
    });


});

let burger = document.querySelector('.burger');
let navbarCase = document.querySelector('.navbar_case');
burger.addEventListener('click', () => {
    navbarCase.classList.toggle('translate');
    burger.querySelectorAll('.line').forEach(line => {
        line.classList.toggle('blackline');
    });
    

});