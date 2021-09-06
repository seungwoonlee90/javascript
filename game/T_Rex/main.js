let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
dino.draw()

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let timer = 0;
let jump_timer = 0;
let cactuss = [];
let jump = false ;

function frame(){
    requestAnimationFrame(frame);
    timer ++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 100 === 0){
        let cactus = new Cactus();
        cactuss.push(cactus);
    }
    cactuss.forEach((a, i, o)=>{
        
        if(a.x < 0) {
            o.splice(i, 1)
        }
        a.x--;
        a.draw();
    })


    if (jump) {
        dino.y--;
        jump_timer++;
    }
    if (!jump) {
        if (dino.y < 200) {
            dino.y++;
        }
    }

    if (jump_timer > 100) {
        jump = false;
        jump_timer = 0;
    }


    dino.draw();
}

frame();

document.addEventListener('keydown', function(e) {
    if(e.code === "Space") {
       jump = true;
    }
})