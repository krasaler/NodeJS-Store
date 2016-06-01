exports.index = function(req,res,next)
{

  if(req.query.search != undefined)
  {
    var search = req.query.search;
  }
  else {
    var search = undefined;
  }
  if(search!=undefined)
  {

    var model_category = require(dir_model+'catalog/category.js');

    var model_product = require(dir_model+'catalog/product.js');

    model_category.getCategoriesForMenu(0,function(top_categories){
      var data = {};
      data['products'] = [];
      data['categories'] = top_categories;
      model_product.getProductsForName(search, function(results){
        async.eachSeries(results, function(item,callback){
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
          data['breadcrumb'] = [];
          data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});
          data['breadcrumb'].push({'href':'','name':'Search','class':'active'});
          data['search'] = search;
          res.render('search', data);
        });
      });
    });
  }
  else {
    res.redirect('/index.js?r=error/not_found');
  }
};
