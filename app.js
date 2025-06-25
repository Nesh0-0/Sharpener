const http = require('http');
const { buffer } = require('stream/consumers');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.end(`<form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Enter your username" required>
            <button type="submit" >Submit</button>
            </form>`)
    }
    else if (url === '/submit') {
        const dataChunks = [];;
        req.on('data',(chunk) => {
            console.log(chunk.toString().split('=')[1]);
            const name = chunk.toString().split('=')[1];
            const buffer = Buffer.from(name);
            dataChunks.push(buffer);
        })

        req.on('end', () => {
            const combinedBuffer = Buffer.concat(dataChunks);
            const username = combinedBuffer.toString();
            console.log('Username received:', username);
            fs.writeFile('username.txt', username, (err) => {
                res.statusCode = '302';
                res.setHeader('Location', '/');

                res.end();
            });
        });
    }
    else if (url === '/read') {
        fs.readFile('username.txt', 'utf-8', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>${data}</h1>`);
        });
    }
});
        


         
     


        


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});