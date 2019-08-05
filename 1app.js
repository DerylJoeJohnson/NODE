
//var a=sayhello();
//console.log(a)
//function sayhello(){
//return "hello Welcome";
//}
//x();
//var x=function(){
  //  console.log("Hello WOrld");
//}
//function readfile(){

//}
var greet=require("./greetings")
greet.sayhello();
greet.saybye();
console.log(greet.language);
for(i=0;i<greet.language.length;i++)
{
    console.log(greet.language[i]);
}
greet.lang();