const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const toDoList = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    const day = date.getDate();
    //  marker for EJS to add in .ejs file: <%=variable%> 
    res.render("list", {listTitle : day, newToDo: toDoList});
})

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newToDo: workItems});

});

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    const item = req.body.newToDo;
    if(req.body.addToDo == "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        toDoList.push(item);
        res.redirect("/");
    }
})

app.listen(3000,function(){
    console.log("Server Running on Port 3000");
})