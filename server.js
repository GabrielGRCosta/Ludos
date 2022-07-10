var express = require("express");
var path = require("path");
var app = express();


app.get("/",function(req,res){
    res.render("login");
});

app.get("/index2.html",function(req,res){
  res.render("home");
});

app.get("/index3.html",function(req,res){
  res.render("catalogo");
});

app.get("/index4.html",function(req,res){
  res.render("jogo");
});

app.get("/cadastro.html",function(req,res){
  res.render("cadastro");
});

app.engine("html", require("ejs").renderFile);
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");



app.listen(app.get("port"),function(){
    console.log("Server Rodando" + app.get("port"));
});
