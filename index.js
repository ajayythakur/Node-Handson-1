const http=require("http")

const httpServer=http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.write("<h1>What is Node ?</h1>");
        res.write("Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!<br> Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.<br> When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.")
        res.end();
    }
    if(req.url==='/json'){
        res.write(JSON.stringify(["What is Node ?"]));
        res.write(JSON.stringify(["Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!<br> Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.<br> When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back."]))
        res.end();
    }
})
httpServer.listen(8080);