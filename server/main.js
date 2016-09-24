import { Meteor } from 'meteor/meteor';
//var Meteor = require('meteor/meteor')
var mysqlpool = require('./mysql-pool');
console.log(mysqlpool)
// var obj = require('./obj');
 Meteor.startup(() => {
 	console.log("lml");
	mysqlpool.getConnection(function(err,connection){
		if (err ){
			console.log("connect err");
			throw err;
		}
		connection.query('select * from me' ,function(err,result){
			if (err){
				console.log("my err")
				console.log(err)
			} else {
				console.log(result)
				// res.send("hello lml")
				// res.end()
				connection.release();
			}
		})
		})
 });
// Router.route('/kkkkk',function(){
// 		mysqlpool.getConnection(function(err,connection){
// 			if (err){
// 				console.log(err)
// 			} else {
// 				console.log("err mysql")
// 				res.send("hello lml")
// 				res.end()
// 			}
// 		})
// })

