const http = require('http');
const pid = process.pid;

http
    .createServer((req, res) => {
        for (let i = 0; i < 10e7; i++) {}
        res.end('Hello');
    })
    .listen(3000, () => {
        console.log(`Server started. Pid: ${pid} `)
    });