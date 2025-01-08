const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'modules', 'templates', 'index.html'), 'utf-8', (err, content) => {
                if (err) throw err;
                res.end(content);
            });
        } else if (req.url === "/about") {
            fs.readFile(path.join(__dirname, 'modules', 'templates', 'about.html'), 'utf-8', (err, content) => {
                if (err) throw err;
                res.end(content);
            });
        }else if(req.url ==='/contact'){
            fs.readFile(path.join(__dirname,'modules','templates','contact.html'),'utf-8',(err,content)=>{
                if(err) throw err;
                res.end(content)
            });
        }
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
        req.on('data', data => {
            body.push(Buffer.from(data));
        });
        req.on('end', () => {
            const m = body.toString().split('=')[1];
            console.log(m);
            res.end(`Email muvaffaqiyatli qo'shildi: ${m}`);
        });
    }
});

server.listen(3000, () => {
    console.log("Server 3000-portda ishga tushdi");
});
