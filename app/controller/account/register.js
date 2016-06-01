exports.index = function(req,res,next)
{
  var data = {};
  if(req.session.customer_id == undefined){
    var model_category = require(dir_model+'catalog/category.js');
    model_category.getCategoriesForMenu(0,function(top_categories){
      data['categories'] = top_categories;
      res.render('register', data);
    });
  }
  else {
    res.redirect('/index.js?r=account/order')
  }
};

exports.register = function(req,res,next)
{

  var json = {};
  if(req.query.register != undefined)
  {
    var register_data = req.query.register;
  }
    var model_customer = require(dir_model+'account/customer.js');
    model_customer.checkExist(register_data['email'],function(result){
      if(result){
        json['error'] = 'This email is already taken';
      }
      if(register_data['nickname'].length < 8 || register_data['nickname'].length >16 ){
        json['error'] = 'The name must be between 8 and 16 characters';
      }
      if(register_data['email'].length == 0){
        json['error'] = 'The email must be between 8 and 16 characters';
      }
      if(register_data['password'].length < 8 || register_data['password'].length >16 ){
        json['error'] = 'Email is required';
      }
      if(register_data['password'] != register_data['confirm_password']){
        json['error'] = 'Passwords do not match';
      }
      if(json['error'] == undefined)
      {
          delete register_data['confirm_password'];
          model_customer.register(register_data,function(customer_id){
            req.session.customer_id = customer_id;
            json['success'] = 'success';
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(json));
          });
      }
      else{
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(json));
      }
    });
}
