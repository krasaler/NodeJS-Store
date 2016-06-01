exports.index = function(req,res,next)
{
  var data = {};
  var model_product = require(dir_model+'catalog/product.js');
  var model_category = require(dir_model+'catalog/category.js');
  model_category.getCategoriesForMenu(0,function(top_categories){
      data['categories'] = top_categories;
      model_product.getLatestProducts(function(products){
        data['products'] = [];
        async.eachSeries(products, function(item,callback){
          model_product.getProduct(item._id,function(product_info){
            var description = entities.decode(product_info.desccription).replace(/<\/?[^>]+>/gi, '').substr(0,200);
            data['products'].push({
              'image': product_info.image,
              '_id': product_info._id,
              'name': product_info.name,
              'description': description,
              'price': product_info.price
            });
            callback(null);
          });
        },function Done(){
          res.render('home', data);
        });
    });

  });
};
