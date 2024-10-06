const http=require('http')
const port=3234

var server=http.createServer((req,res)=>
{
  res.setHeader("Content-Type","file.txt")
  res.setstatuscode=200
  res.end("<h1>hi</h1>")
})

server.listen(port,()=>
{
  console.log(`Server Fired Succesfully on port ${port}`);
  
})