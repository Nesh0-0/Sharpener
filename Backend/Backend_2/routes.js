const http = require('http');
const fs = require('fs');

const handleRoutes = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {

        fs.readFile('username.txt', 'utf-8', (err, data) => {
            console.log('Data from file:', data);
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h3>${data}</h3>`);
            res.write(`<form action="/submit" method="POST">
                <input type="text" name="username" placeholder="Enter your username" required>
                <button type="submit" >Submit</button>
                </form>`)
            res.end();
        });

    }
    else if (url === '/submit') {
        const dataChunks = [];;
        req.on('data', (chunk) => {
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
                console.log('File written successfully');
                res.statusCode = '302';
                res.setHeader('Location', '/');
                res.end();

            });
        })
    }
    else if (url === '/read') {
        fs.readFile('username.txt', 'utf-8', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>${data}</h1>`);
        });
    }
}

module.exports = {
    handleRoutes
};
