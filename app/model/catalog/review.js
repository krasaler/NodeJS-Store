var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;


exports.addReview = function(review_data)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('review').insert(review_data);
  });
};
exports.getReviewsByProduct_id = function(product_id, callback)
{
  MongoClient.connect(db_host+db_name, function(err, db) {
    db.collection('review').find({'product_id':product_id.toString()}).toArray(function(err,result){
      callback(result);
    });
});
};
