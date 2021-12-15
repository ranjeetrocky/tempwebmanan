const express = require('express')
const port = process.env.port || 4200

const app = express()

app.use('',express.static('public'))

// app.get('/',(req,res)=>{
//     res.send("home")
// })
// app.get('/about',(req,res)=>{
//     res.send("about")
// })
app.get('*',(req,res)=>{
    res.send("Any Other PAGE")
})
app.listen(port,()=>{
    console.log("Listning at port "+port)
})