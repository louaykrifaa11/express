const express=require('express')
const app=express()
const authmiddleware=(req,res,next)=>{
    const auth=false
    const currentDay=new Date().getDay()
    const currentHour=new Date().getHours()
console.log(currentDay,currentHour)
    if(currentDay>=1 && currentDay<=5 && currentHour>=9 && currentHour<=15){
        next()
    }
    else{
        res.send("you are not autorized")
    }
}
app.use(authmiddleware)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/view/home.html')
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/view/contact.html')
})
app.get("/ourService",(req,res)=>{
    res.sendFile(__dirname+'/view/ourService.html')
})
app.listen(8081,(err)=>{
    err? console.log("err:",err):console.log("server is running in port 8081")
})