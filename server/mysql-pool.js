// import mysql from 'mysql';
var mysql = require('mysql')
var pool =  mysql.createPool({
    user : 'root',
    password : 'Lml,,..03111376',
    database: 'meteor'
});
module.exports = pool;
