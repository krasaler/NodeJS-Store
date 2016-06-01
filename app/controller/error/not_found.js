exports.index = function(req,res,next)
{
  var data = {};
  var model_category = require(dir_model+'catalog/category.js');
  model_category.getCategoriesForMenu(0,function(top_categories){
    data['categories'] = top_categories;
    data['breadcrumb'] = [];
    data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});
    data['breadcrumb'].push({'href':'','name':'Not Found','class':'active'});
    res.render('not_found', data);
  });
};
