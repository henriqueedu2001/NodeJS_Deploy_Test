const {User} = require("./User");
const path = require("path");

const user = new User("Felipe");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "html"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "html")));


// exibição da página inicial
app.get("/", function(req, res){
    res.render("index");
});

// conexão com banco de dados
app.get("/", function(req, res){
    var sql = requeire('mysql');
    var config = {
        user: 'root',
        password: '#Minecraft123',
        server: '119.8.153.15',
        database: 'Scili_DB',
    }
    sql.connect(config, function(err){
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('SELECT * FROM UsersLoginInfo', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
});

app.listen(8081, function(){
    console.log("O app está rodando!");
});

console.log(user.saymyname());

