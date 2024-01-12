const express=require('express')
const app=express();
const cors = require('cors')

app.use(express.json());
const candidateRoute=require('./routes/candidateRoute')
app.use(cors())

app.get('/api/v1',(req,res)=>{
    res.send("<h1>This is home page </h1>")
})

app.use('/api/v1/candidate',candidateRoute)

app.listen(3000,(req,res)=>{
    console.log("App is running in port number 3000")
})