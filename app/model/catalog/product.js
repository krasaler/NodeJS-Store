var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;


exports.getProduct = function(product_id, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product').find({_id:product_id.toString()}).toArray(function(err,result){
      var product = result.pop();

      db.collection('manufacturer').find({_id:product.manufacturer_id.toString()}).toArray(function(err,manufacturer_info){
        if( manufacturer_info.length>0)
        {
          product['manufacturer'] = manufacturer_info['0']['name'];
        }
        else {
          product['manufacturer'] = '';
        }

        callback(product);
        });
    });
});
};
exports.getProducts = function(callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product').find().toArray(function(err,result){
      callback(result);
    });
});
};
exports.getProductsForCategory = function(category_id,skip,limit, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product_to_category').find({'category_id':category_id.toString()}).skip(skip).limit(limit).toArray(function(err,result){
      callback(result);
    });
});
};
exports.getLatestProducts = function(callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product').find({}).sort({'date_added':-1}).limit(4).toArray(function(err,result){
      callback(result);
    });
});
};
exports.getProductsForName = function(search, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product').find({'name': new RegExp(search, 'i')}).toArray(function(err,result){
      callback(result);
    });
});
};
exports.getTotalProducts = function(category_id,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('product_to_category').find({'category_id':category_id.toString()}).count(function(err,result){
      callback(result);
    });
});
};
