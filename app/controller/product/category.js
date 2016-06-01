exports.index = function(req,res,next)
{

  if(req.query.category_id != undefined)
  {
    var category_id = req.query.category_id;
  }
  else {
    var category = undefined;
  }
  if(req.query.page != undefined)
  {
    var page = req.query.page;
  }
  else {
    var page = 1;
  }
  if(category_id!=undefined)
  {

    var model_category = require(dir_model+'catalog/category.js');

    var model_product = require(dir_model+'catalog/product.js');

    model_category.getCategoriesForMenu(0,function(top_categories){

      model_category.getCategory(category_id,function(category_info){
        var data = {};
        data['breadcrumb'] = [];
        data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});


        if(category_info!=undefined)
        {
          data['breadcrumb'].push({'href':'','name':category_info.name,'class':'active'});
          data['id'] = category_info['_id'];
          data['text_title'] = category_info.name;
          data['description'] = category_info.description;
          data['image'] = category_info.image;
        }
        else {
            res.redirect('/index.js?r=error/not_found');
        }
        data['products'] = [];
        data['categories'] = top_categories;
        data['page'] = page;
        var skip = (page-1)*limit_products;
        var limit = limit_products;
        model_product.getProductsForCategory(category_id,skip,limit, function(results){
          async.eachSeries(results, function(item,callback){
            model_product.getProduct(item.product_id,function(product_info){
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
            model_product.getTotalProducts(category_id,function(total){
              data['total'] = total;

              data['pagination'] = [];
              if(skip>0)
              {
                var prev = Number(page)-1;
                data['pagination'].push({'page':prev,'_id':category_info['_id']});
              }
              if(total>limit)
              {
                data['pagination'].push({'page':page,'_id':category_info['_id'],'current':1});
              }
              if((skip+limit)<total)
              {
                var next = Number(page)+1;
                data['pagination'].push({'page':next,'_id':category_info['_id']})
              }
              res.render('category', data);
            });

          });
        });
      });
    });
  }
  else {
    res.redirect('/index.js?r=error/not_found');
  }
};
