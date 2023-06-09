const express = require('express');
const fast2sms = require('fast-two-sms')
const app = express();

require('dotenv').config();


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.post('/sendMessage',async (req,res)=>{
    const response = await fast2sms.sendMessage({authorization : process.env.API_KEY, message : req.body.message , numbers :[req.body.number]})   
    res.send(response)
       
console.log(res.body);
})

app.get('/',(req, res)=>{
    res.render('index.ejs')
})

app.listen(3000,() => {
    console.log("Server is listening at port 3000")
})
