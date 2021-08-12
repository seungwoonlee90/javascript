const http = require('http');

const server = http.createServer((res, req) => {
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Ethan !</p>')
})
    .listen(8080);
    
server.on('listening', ()=>{
    console.log('8080포트에서 서버 대기중 !');
});

server.on('error', (error)=>{
    console.log(error);
});