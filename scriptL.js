let cont = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

cont.onscroll = function(){
    let X = cont.scrollTop;

    layer[0].computedStyleMap.left = X/4 + 'px';

}