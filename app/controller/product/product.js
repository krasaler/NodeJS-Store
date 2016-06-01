exports.index = function(req,res,next)
{
  if(req.query.product_id != undefined)
  {
    var product_id = req.query.product_id;
  }
  else {
    var product_id = undefined;
  }

  if(product_id!=undefined)
  {
    var data = {};
    var model_category = require(dir_model+'catalog/category.js');
    var model_product = require(dir_model+'catalog/product.js');
    var model_review = require(dir_model+'catalog/review.js');
    model_category.getCategoriesForMenu(0, function(top_categories){
      model_product.getProduct(product_id,function(results){
        data=results;
        data['breadcrumb'] = [];
        data['breadcrumb'].push({'href':'href="/index.js?r=common/home"','name':'<i class="fa fa-home" aria-hidden="true"></i>','class':''});
        data['breadcrumb'].push({'href':'','name':results.name,'class':'active'});
        data['desccription'] = entities.decode(data['desccription']);
        data['categories'] = top_categories;
        model_review.getReviewsByProduct_id(product_id,function(results){
          data['reviews'] = results;
          for(var i=0;i<data['reviews'].length;i++)
          {
            var date = data['reviews'][i]['date'];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            data['reviews'][i]['date'] = day+'-'+monthIndex+'-'+year;

          }
          res.render('product', data);
        });

      });
    });
  }
  else {
    res.redirect('/index.js?r=error/not_found');
  }
};
exports.write = function(req,res,next)
{
  var name = req.query.name;
  var review = req.query.review;
  var rating = req.query.rating;
  var product_id = req.query.product_id;
  var json = {};

  if(name == '')
  {
    json['error'] = 'The field name is a required';
  }
  if(review == '')
  {
    json['error'] = 'The field text is a required';
  }
  if(rating==undefined)
  {
    json['error'] = 'The field rating is a required';
  }
  if(json['error'] == undefined){
    var model_review = require(dir_model+'catalog/review.js');
    var review_data = {};
    review_data['product_id'] =product_id;
    review_data['author'] =name;
    review_data['text'] =review;
    review_data['rating'] =rating;
    review_data['date'] = new Date();
    model_review.addReview(review_data);
    json['success'] = 'Review sent successfully';

  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(json));
}
