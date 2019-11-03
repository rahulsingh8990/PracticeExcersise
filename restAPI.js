const express = require('express');

const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
res.end("Hello World");
})


app.get('/add/:first/:second',(req,res)=>{
    let first = Number(req.params['first']);
    var second = Number(req.params['second']);
    res.send((first+second).toString())

})
app.get('/sub/:first/:second',(req,res)=>{
    let first = Number(req.params['first']);
    var second = Number(req.params['second']);
        res.send((first-second).toString())
})
app.get('/mul/:first/:second',(req,res)=>{
        let first = Number(req.params['first']);
    var second = Number(req.params['second']);
        res.send((first*second).toString())
})
app.get('/div/:first/:second',(req,res)=>{
        let first = Number(req.params['first']);
    var second = Number(req.params['second']);
        res.send((first/second).toString());
})

app.listen(PORT,()=>{
    
})

module.exports = app;