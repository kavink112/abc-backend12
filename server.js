const express = require('express')
const app = express()

app.get('/',(req,res)=>{
 res.send("siva Running backend Successfully")
})

app.listen(5000)
