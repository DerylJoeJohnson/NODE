var exp=require("express");
const app=exp();
app.listen(8000,function(req,res){
    console.log("Server is all set to go")
})
app.get("/",function(req,res){
    console.log("Welcome to xyz Company")
    //res.send("Welcome to the XyZ Company.")
    res.sendFile(__dirname+"/src/views/home.html")
})
app.get("/emp",function(req,res){
   // res.send("Employee Details : NIL")
    res.sendFile(__dirname+"/emp.html")
})
app.get("/emp/pemp",function(req,res){
    res.sendFile(__dirname+"/src/pemp.html")
})
app.get("/emp/pemp/:eid",function(req,res){
    res.send("The Employee is : "+req.params.eid)
})
app.get("/emp/demp",function(req,res){
    res.sendFile(__dirname+"/src/views/demp.html")
})


app.get("/prd",function(req,res){
   // res.send("Product Details : NiL")
   res.sendFile(__dirname+"/prd.html")
})
app.get("/prd/wprd",function(req,res){
    res.sendFile(__dirname+"/src/views/wprd.html")
})
app.get("/prd/rprd",function(req,res){
    res.sendFile(__dirname+"/src/views/rprd.html")
})


app.get("/prd/wprd/:wpid",function(req,res){
    res.send("The Wholesale Product is : "+req.params.wpid)
})
app.get("/prd/rprd/:rpid",function(req,res){
    res.send("The Retail Product is : "+req.params.rpid)
})


//app.get("/ab?cd",function(req,res){ you can aslo use + and * 
  //  res.send("ABCD AANo Atho acd")
//})
app.get(/.*fly*/,function(req,res){                  //no need quotes /a/ will give us if there is  a
    res.send("Amarendra Bahubali")
})