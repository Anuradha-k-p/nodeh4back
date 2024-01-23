const express=require('express')
const app=express()
const route=require('./Routes')
const cors=require('cors')

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/pages',route)
app.listen(5000,()=>{
    console.log("Server is Running fine..");
})