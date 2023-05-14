const express=require("express")

const router=express.Router()

router.get("/",(req,res)=> res.render('home',{title:"SamTech | Home"}))
router.get("/contact",(req,res)=> res.render('contact',{title:"SamTech | Contact"}))
router.get("*",(req,res)=> res.render('404',{title:"404 Error"}))


module.exports=router