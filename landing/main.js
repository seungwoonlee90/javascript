let countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();
    let x = setInterval(function(){
        let now = new Date().getTime();
        let last = countDownDate - now;
    
        let days = Math.floor(last / (1000 * 60 * 60* 24));
        let hours = Math.floor((last % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((last % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((last % (1000 * 60)) / 1000);
    
        if(days < 10) {
            days = "0" + days;
        }
    
        if(hours < 10) {
            hours = "0" + hours;
        }
    
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
    
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
    
        if(last < 0 ) {
            clearInterval(x);
            $("#days").html("00");
            $("#hours").html("00");
            $("#minutes").html("00");
            $("#seconds").html("00");
        }


    }, 1000);