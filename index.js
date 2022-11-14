const {User} = require("./User");

const user = new User("Felipe");

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8081, function(){
    console.log("O app está rodando!");
});

console.log(user.saymyname());

