//트윈맥스
//https://greensock.com/

window.onload = function() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let _cards = document.querySelectorAll(".card");
    let startButton = document.querySelectorAll("button")[0];
    let randomButton = document.querySelectorAll("button")[1];

    startButton.addEventListener('click', function(event) {
        cardSetting();
    })

    randomButton.addEventListener('click', function(event) {
        randomSetting();
    })

    function cardSetting() {
        _cards.forEach(function(item, i){

            TweenMax.to(item, 1, {
                top : windowHeight / 4 - (i * 60),
                left : windowWidth / 2 + (i * 60 -200),
                rotation : 0,
                ease : Power3.easeInOut,
                delay : i * .2,
            })
        })
    };

    function randomSetting() {
        _cards.forEach(function(item, i){

            TweenMax.to(item, 1, {
                top : Math.random() * windowHeight,
                left : Math.random() * windowWidth,
                rotation : Math.random() * 180,
                ease : Power3.easeInOut,
                delay : i * .2,
            })
        })
    }
    cardSetting();
};