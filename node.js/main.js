const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (res, req) => {
    try {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const data = await fs.readFile('./index.html');
        res.end(data);
    } catch(err) {
        console.log(err)
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end(err.message);
    }
})
    .listen(8080);
    
server.on('listening', ()=>{
    console.log('8080포트에서 서버 대기중 !');
});

server.on('error', (error)=>{
    console.log(error);
});