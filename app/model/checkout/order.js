var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;

exports.addOrder = function(order_data, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('order').insert(order_data, function(err){
      callback(order_data['_id']);
    });
  });
};
exports.addProductToOrder = function(product_data)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('order_product').insert(product_data);
  });
};
exports.getOrderByCurrentCustomer = function(customer_id,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('order').find({'customer_id':customer_id.toString()}).toArray(function(err,results){
      callback(results);
    });
  });
};
exports.getTotalOrder = function(order_id,callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('order_product').find({'order_id':order_id}).toArray(function(err,results){
      var total = 0;
      var total_product = 0;
      var model_product = require(dir_model+'catalog/product.js');
      async.eachSeries(results, function(item,callback_inner){
          model_product.getProduct(item.product_id,function(product_info){
            total = total + product_info['price']*item.quantity;
            total_product = total_product + item.quantity;
            callback_inner(null);
          });
      },function Done(){
        callback(total,total_product);
      });
    });
  });
};
