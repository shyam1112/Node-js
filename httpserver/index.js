const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const jsonData=fs.readFileSync("api.json","utf-8");
    const data=JSON.parse(jsonData);


    if(req.url == "/"){
        res.end("Hello from home.");
    }else if(req.url == "/about"){
        res.end("Hello from about.");
    }else if(req.url =="/api"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(data[0].age);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 page not found.</h1>");
    }

    // res.end("Hello from the other side.");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening...")
});
