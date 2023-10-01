let menuMobile = document.querySelector('.mobile_menu')
function menuShow(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./images/icon_menu/menu_white_36dp.svg"

    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./images/icon_menu/close_white_36dp.svg"
    }
}
window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    var largura = window.innerWidth;

    if (largura > 768) 
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./images/icon_menu/menu_white_36dp.svg"

    }
});

let input_board = document.querySelector('.input_board');
let input_board_change = document.querySelector('.input_board_change')

input_board.addEventListener('keyup',function(){
    input_board_change.value = input_board.value
})