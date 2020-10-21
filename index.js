const express = require('express');
const fs = require('fs')
const  bodyParser = require('body-parser')


const bookRoutes = require(`${__dirname}/routes/bookRoutes`)



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', bookRoutes);
app.listen(3000, ()=>{
    console.log("Server listening on port 3000")
})