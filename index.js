const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("app is running successfully");
})

app.get("/",(req,res)=>{
    res.send(`<h2>This is homepage</h2>`)
})