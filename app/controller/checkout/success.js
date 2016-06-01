exports.index = function(req,res,next)
{
  var model_category = require(dir_model+'catalog/category.js');
  var model_product = require(dir_model+'catalog/product.js');
  var data = {};
  var products = req.session.product;
  var product_quantity = req.session.productq;
  model_category.getCategoriesForMenu(0,function(top_categories){
    data['categories'] = top_categories;
    data['breadcrumb'] = [];
    data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});
    data['breadcrumb'].push({'href':'','name':'Success','class':'active'});
      res.render('success', data);
  });
};
