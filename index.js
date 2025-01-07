const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.end(`
            <h4>Email yuboring</h4>
            <form method='post' action='/'>
                <input name="email" type='email' placeholder="Emailingizni kiriting" />
                <button type="submit">Email yuborish</button>
            </form>
        `);
    } else if (req.method === 'POST') {
        const email=[];
        res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
        req.on('data',data =>{
            email.push(Buffer.from(data))
        })
        req.on("end", ()=>{
           const m=email.toString().split('=')[1];
           console.log(m);
           res.end(`email added:${m}`);
        })
       
    }
});

server.listen(3000, () => {
    console.log("Server 3000-portda ishga tushdi");
});
