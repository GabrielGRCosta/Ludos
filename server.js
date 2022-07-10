var express = require("express");
var path = require("path");
var app = express();



app.get("/",function(req,res){
    res.render("login.ejs");
});

app.get("/",function(req,res){
  res.render("login.ejs");
});

app.get("/index2.html",function(req,res){
  res.render("home.ejs");
});

app.get("/index3.html",function(req,res){
  res.render("catalogo.ejs");
});

app.get("/index4.html",function(req,res){
  res.render("jogo.ejs");
});

app.get("/cadastro.html",function(req,res){
  res.render("cadastro.ejs");
});

app.use('/static', express.static('images'));

app.engine("html", require("ejs").renderFile);
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/todos/:id', function (req, res) {
  console.log('Request Id:', req.params.id);
});



app.listen(app.get("port"),function(){
    console.log("Server Rodando" + app.get("port"));
});
