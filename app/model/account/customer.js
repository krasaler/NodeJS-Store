var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;

exports.login = function(email,password,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('customer').find({'email':email.toString(),'password':password.toString()}).toArray(function(err,result){
      if(result.length>0)
      {
        callback(true);
      }
      else {
        callback(false);
      }
    });
  });
}
exports.register = function(register_data, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('customer').insert(register_data, function(err){
      callback(register_data['_id']);
    });
  });
}
exports.checkExist = function(email,callback){
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('customer').find({'email':email.toString()}).toArray(function(err,result){
      if(result.length>0)
      {
        callback(true);
      }
      else {
        callback(false);
      }
    });
  });
}
exports.getCustomer = function(email,callback){
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('customer').find({'email':email.toString()}).toArray(function(err,result){
      callback(result.pop()['_id']);
    });
  });
}
