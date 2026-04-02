const express = require('express')
const app = express()

app.get('/',(req,res)=>{
 res.send("siva B Running backend Successfully")
})

app.listen(5000)
