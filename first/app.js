const { log } = require('console');
var express= require('express');
var app=express();
var port = 3000

app.get('/',(req,res)=>{
    res.send("Welcome to root route");
})

app.get('/animal/:id',(req,res)=>{
    res.send("animal is route");
})

app.listen(port,()=>{
    console.log(`litening to port ${port}`);
})