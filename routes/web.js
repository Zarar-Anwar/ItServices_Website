const express=require("express")

const router=express.Router()

router.get("/",(req,res)=> res.render('home'))
router.get("/service",(req,res)=> res.render('service'))
router.get("/contact",(req,res)=> res.render('contact'))
router.get("*",(req,res)=> res.render('404'))


module.exports=router