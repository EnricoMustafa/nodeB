let http = require('http');

http.createServer((req, res) => {
    res.write('Aprendendo nodejs com o Ralf');
    res.end();
}).listen(3001);