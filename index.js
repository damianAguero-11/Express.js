const express=require('express');

const app=express();

const port=process.env.Puerto || 3002//prueba 3002;
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

const taskRouters=require("./TasksRouter")
app.use("/tasks",taskRouters);

app.get('/',
    (req,res)=>res.send('buenassss'));

app.listen(port,
    ()=>{
        mongoose.connect(process.env.MONGOCONEXION)
    console.log("funcionando");}
)