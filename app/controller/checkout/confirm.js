exports.index = function(req,res,next)
{
  var model_category = require(dir_model+'catalog/category.js');
  var model_product = require(dir_model+'catalog/product.js');
  var model_order = require(dir_model+'checkout/order.js');
  var data = {};
  var json={};
  var products = req.session.product;
  var product_quantity = req.session.productq;
  var order_data = req.query.order;
  if(order_data['payment_first_name'] == '')
  {
      json['error'] = 'The field Payment First Name is a required';
  }
  if(order_data['payment_last_name'] == '')
  {
    json['error'] = 'The field Payment Last Name is a required';
  }
  if(order_data['payment_telefone'] == '')
  {
      json['error'] = 'The field Payment Phone is a required';
  }
  if(order_data['payment_adress'] == '')
  {
      json['error'] = 'The field Payment Address is a required';
  }
  if(order_data['payment_city'] == '')
  {
      json['error'] = 'The field Payment City is a required';
  }
  if(order_data['payment_country'] == '')
  {
      json['error'] = 'The field Payment Country is a required';
  }

  if(order_data['shipping_first_name'] == '')
  {
      json['error'] = 'The field Shipping First Name is a required';
  }
  if(order_data['shipping_last_name'] == '')
  {
    json['error'] = 'The field Shipping Last Name is a required';
  }
  if(order_data['shipping_telefone'] == '')
  {
      json['error'] = 'The field Shipping Phone is a required';
  }
  if(order_data['shipping_address'] == '')
  {
      json['error'] = 'The field Shipping Address is a required';
  }
  if(order_data['shipping_city'] == '')
  {
      json['error'] = 'The field Shipping City is a required';
  }
  if(order_data['shipping_country'] == '')
  {
      json['error'] = 'The field Shipping Country is a required';
  }
  if(json['error'] == undefined)
  {
    if(req.session.customer_id!= undefined){
      order_data['customer_id'] = req.session.customer_id;
      order_data['date_added'] = new Date();
    }
    model_order.addOrder(order_data,function(order_id){
      var product_data = [];
      for(var i=0;i<products.length;i++){

        product_data.push({'order_id':order_id,'product_id':products[i],'quantity':product_quantity[products[i]]});
      }
      model_order.addProductToOrder(product_data);
    });
    delete req.session.product;
    delete req.session.product;
    json['success'] = 'success';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
  }
  else {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
  }
};
