exports.index = function(req,res,next)
{
  var data = {};
  if(req.session.customer_id != undefined){
  var model_category = require(dir_model+'catalog/category.js');
  var model_order = require(dir_model+'checkout/order.js');
  model_category.getCategoriesForMenu(0,function(top_categories){
    data['categories'] = top_categories;
    model_order.getOrderByCurrentCustomer(req.session.customer_id,function(orders){
      data['orders'] = [];
      async.eachSeries(orders, function(item,callback_inner){
          model_order.getTotalOrder(item['_id'],function(total,quantity){
            var day = item.date_added.getDate();
            var monthIndex = item.date_added.getMonth();
            var year = item.date_added.getFullYear();
            data['orders'].push({'date_added':day+'-'+monthIndex+'-'+year,'total':total,'quantity':quantity});
            callback_inner(null);
          });
      },function done(){
          res.render('order', data);
      });
    });
  });
  }
  else {
    res.redirect('/index.js?r=account/login');
  }
};
