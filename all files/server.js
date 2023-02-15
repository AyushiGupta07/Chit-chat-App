const express=require('express');
const path=require('path');


const app=express();
const http=require('http').createServer(app);

const PORT= process.env.PORT|| 8000;
http.listen(PORT,()=>{
console.log(`listening on port number ${PORT}`);   
})
console.log(path.join(__dirname,"./public"))
const staticPath=path.join(__dirname,'./public');
app.use(express
    .static(staticPath));


app.get('/',(req,res)=>{
res.send("Hello"); 
})

//Socket 
const io=require('socket.io')(http);
io.on('connection',(socket)=>{
    console.log("Connected");
    socket.on('message',(msg)=>{
    socket.broadcast.emit('message',msg) 
    })

})

