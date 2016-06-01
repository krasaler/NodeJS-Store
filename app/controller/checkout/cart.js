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
      data['breadcrumb'].push({'href':'','name':'Cart','class':'active'});
      res.render('cart', data);
    });
  });
};
exports.add = function(req,res,next)
{
  var json={};
  if(req.query.product_id!=undefined)
  {
    var product_id = req.query.product_id;
    if(req.session.product != undefined)
    {
      if(req.session.productq[product_id]!=undefined)
      {
        var count = req.session.productq[product_id];
        req.session.productq[product_id] = (count+1);
      }
      else {
        req.session.productq[product_id] = 1;
        req.session.product.push(product_id);
      }
    }
    else {
      req.session.product = [];
      req.session.productq = {};
      req.session.productq[product_id] = 1;
      req.session.product.push(product_id);
    }
    json['success'] = 'success';
  }
  else {
    json['error']='error';
  }

  var model_product = require(dir_model+'catalog/product.js');
  model_product.getProduct(product_id, function(product_info){
    json['product_name']  = product_info['name'];
    var total=0;
    async.eachSeries(req.session.product, function(item,callback){
      model_product.getProduct(item,function(product_info){
        total = total + product_info.price * req.session.productq[product_info._id];
        callback(null);
      });
    },function Done(){
      json['all_total'] = total;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
    });
  });
};

exports.update = function(req,res,next)
{
  var json={};
  if(req.query.product_id!=undefined)
  {
    var product_id = req.query.product_id;
    var quantity = req.query.quantity;
    req.session.productq[product_id] = quantity;

    json['success'] = 'success';
  }
  else {
    json['error']='error';
  }
  var model_product = require(dir_model+'catalog/product.js');
  model_product.getProduct(product_id,function(product_info){
    json['total'] = product_info.price * req.session.productq[product_info._id];
    var total=0;
    async.eachSeries(req.session.product, function(item,callback){
      model_product.getProduct(item,function(product_info){
        total = total + product_info.price * req.session.productq[product_info._id];
        callback(null);
      });
    },function Done(){
      json['all_total'] = total;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
    });
  });
};
exports.delete = function(req,res,next)
{
  var json={};
  if(req.query.product_id!=undefined)
  {
    var product_id = req.query.product_id;
    var index = req.session.product.indexOf(product_id);
    req.session.productq[product_id]=0;
    req.session.product.splice(index,1);

    json['success'] = 'success';
  }
  else {
    json['error']='error';
  }
    var model_product = require(dir_model+'catalog/product.js');
  var total=0;
  async.eachSeries(req.session.product, function(item,callback){
    model_product.getProduct(item,function(product_info){
      total = total + product_info.price * req.session.productq[product_info._id];
      callback(null);
    });
  },function Done(){
    json['all_total'] = total;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
  });
};
