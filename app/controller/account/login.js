exports.index = function(req,res,next)
{
  var data = {};
  if(req.session.customer_id == undefined){
  var model_category = require(dir_model+'catalog/category.js');
  model_category.getCategoriesForMenu(0,function(top_categories){
    data['categories'] = top_categories;
    res.render('login', data);
  });
  }
  else {
    res.redirect('/index.js?r=account/order')
  }
};

exports.login = function(req,res,next)
{
  var json = {};
  if(req.query.login != undefined)
  {
    var login_data = req.query.login;
  }
  var model_customer = require(dir_model+'account/customer.js');
  model_customer.login(login_data['email'],login_data['password'],function(result){
    if(!result){
      json['error'] = 'An incorrect email or password';
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
    }
    if(json['error'] == undefined)
    {
      model_customer.getCustomer(login_data['email'],function(customer_id){
        req.session.customer_id = customer_id;
        json['success'] = 'success';
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(json));
      });
    }
  });
}
