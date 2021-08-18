let scrollTop = 0;
let bar;

window.onload = function() {
    bar = document.getElementsByClassName("percentage")[0];
}

window.addEventListener("scroll" , function(event) {

    scrollTop = document.documentElement.scrollTop;
    let percent = Math.ceil((scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100);

    bar.style.height = percent + "%"
});