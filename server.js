require('dotenv').config();
const express = require('express');
const app = express();
const Port = process.env.app_Port;

app.get('/',function(req, res){
    res.send('default Route');
});

app.listen(Port,function(){
console.log('server is running on port' + Port);
});
