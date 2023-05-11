const express=require("express")
const { join }= require("path")
const web =require('./routes/web.js')
const app=express()
const port =4000

app.set("view engine","ejs")
app.use(express.static(join(process.cwd(),"public")))
app.use(express.urlencoded({extended:true}))

app.use("/",web)

app.listen(port,()=>{
    console.log(`The Server is Running at http://localhost:${port}`)
})