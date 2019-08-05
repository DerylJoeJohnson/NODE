var express=require('express')
const app=express();
app.get("/",function(req,res){
    //res.send("welcome to node  server")
    res.sendFile(__dirname+"/src/views/home.html")
});
app.get("/books",function(req,res){
    res.send("No books are here.....")
});
app.get("/books/poems",function(req,res){
    res.send("No Poems are here.....");
    res.send("No malayalam Poems are here.....")
});
app.get("/author",function(req,res){
    res.send("whene there are no books how will there be any authors")
});
app.listen(8080,function(req,res){

    console.log("SERVER IS READY TO LISTEN......")
})