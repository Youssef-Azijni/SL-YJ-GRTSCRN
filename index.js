const express = require('express');
const mysql = require('mysql');

// Create Database Connection
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'securitylog'
//  insecureAuth : true
});

var users;

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
	console.log("DATABASE INITIALIZED")
});


        let sql = 'SELECT * FROM users;'
        db.query(sql, (err, result) => {
        if(err) throw err;
	users = result
        result.forEach(element => {
       
	setTimeout(callback,1000);
	console.table(element);
        });
   });

function callback(){
console.log("Users:");
console.log(users);

}

const app = express();
var expressport = 3000;

//requests
app.get('/getusers', function (req, res) {
	res.send(users)
})



app.listen("3000", () => {
    console.log('Server started on port ' + expressport);
});
