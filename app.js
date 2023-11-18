const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('heloow Gagan')
})

app.get('/person',(req,res)=>{
    res.send("<h1>Login Page</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})