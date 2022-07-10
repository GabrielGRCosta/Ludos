var express = require("express");
var path = require("path");
var app = express();


app.get("/",function(req,res){
    res.render("index");
});

app.get("/index2.html",function(req,res){
  res.render("index2");
});

app.get("/index3",function(req,res){
  res.render("index3");
});

app.get("/index4",function(req,res){
  res.render("index4");
});

app.get("/cadastro",function(req,res){
  res.render("cadastro");
});

app.engine("html", require("ejs").renderFile);
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");



app.listen(app.get("port"),function(){
    console.log("Server Rodando" + app.get("port"));
});
