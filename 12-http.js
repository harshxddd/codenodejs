const http =require('http');

// req is incoming to server and response is response
const server=http.createServer((req,res)=>{
   
    
    
    if(req.url==='/')
    {
res.end('Welcome to our webPage') 
}

else if(req.url==='/about'){
res.end('Here is our Short history')
}

else{res.end(`
<h1>OOps</h1>
<p>We can't see the find the page you are looking for</p>
<a href="/"> backhome</a>
`)}
})

server.listen(3000) 