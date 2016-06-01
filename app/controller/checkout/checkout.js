exports.index = function(req,res,next)
{
  var model_category = require(dir_model+'catalog/category.js');
  var model_product = require(dir_model+'catalog/product.js');
  var data = {};
  var products = req.session.product;
  model_category.getCategoriesForMenu(0,function(top_categories){
    data['categories'] = top_categories;
    data['products'] = [];
    var total=0;
    if(products!=undefined && products.length > 0){
    async.eachSeries(products, function(item,callback){

      model_product.getProduct(item,function(product_info){
        var description = entities.decode(product_info.desccription).replace(/<\/?[^>]+>/gi, '').substr(0,200);
        data['products'].push({
          'image': product_info.image,
          '_id': product_info._id,
          'name': product_info.name,
          'model': product_info.model,
          'description': description,
          'price': product_info.price,
          'quantity': req.session.productq[product_info._id],
          'total': product_info.price * req.session.productq[product_info._id]
        });
          total = total + product_info.price * req.session.productq[product_info._id];
        callback(null);
      });
    },function Done(){
      data['total'] = total;
      data['breadcrumb'] = [];
      data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});
      data['breadcrumb'].push({'href':'','name':'Checkout','class':'active'});
      res.render('checkout', data);
    });
  }
  else {
    res.redirect('/index.js?r=checkout/cart');
  }
  });
};
