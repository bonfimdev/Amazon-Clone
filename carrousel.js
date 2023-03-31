var containerImgs = document.querySelector(".vitrine-galeria");
var imgs = document.querySelectorAll('.vitrine-galeria img');
let initialScroll = 0;
let targetWidth = (containerImgs.clientWidth * imgs.length) - containerImgs.clientWidth;
let scrollSpd = 10;
let vitrineGaleriaWraper = document.querySelector('.vitrine-galeria-wraper');

vitrineGaleriaWraper.style.width = (imgs.length * 100) + '%';

for(let i=0; i < imgs.length; i++) {
    imgs[i].style.width = (100/imgs.length) + '%'
}


let starTime=3;
var curSlider = 1;

startCarrousel();

function startCarrousel(){
    setTimeout(function(){
        runCarrousel();
    }, starTime*1000);
}

function runCarrousel() {
    var interval = setInterval(function() {
        initialScroll -= scrollSpd;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.left = initialScroll + "px";
        }

        if (initialScroll <= -containerImgs.clientWidth * curSlider) {
            curSlider++;
            if (curSlider == imgs.length) {
                clearInterval(interval);
                //alert("Finalizou o carrossel");
            } else {
                clearInterval(interval);
                startCarrousel();
            }
        }
    }, 5);
}
