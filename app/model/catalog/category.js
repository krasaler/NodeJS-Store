var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var async = require('async');
var promise = require('promise');

exports.getCategory = function(category_id,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('category').find({_id:Number(category_id)}).toArray(function(err,result){
      callback(result.pop());
    });
});
};
exports.getCategories = function(parent_id,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('category').find({parent_id:Number(parent_id)}).toArray(function(err,result){
      callback(result);
    });
});
};
exports.getCategoriesForMenu = function(parent_id,callback)
{
  var category_data=[];
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('category').find({parent_id:Number(parent_id)}).toArray(function(err,top_categories){
      async.eachSeries(top_categories, function(item,callback){
      MongoClient.connect(db_host+db_name, function(err, db) {
        db.collection('category').find({parent_id:Number(item['_id'])}).toArray(function(err,result){
          category_data.push({'_id':item['_id'],'name':item['name'],'description':item['description'],'childrens':result});
          callback(null);
        });

      });
    },function Done(){
      callback(category_data);
    });



    });
  });
};
