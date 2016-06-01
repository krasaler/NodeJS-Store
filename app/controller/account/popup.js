exports.index = function(req,res,next)
{
  var data = {};
  if(req.session.customer_id != undefined){
    data['logged'] = true;
  }
  else {
    data['logged'] = false;
  }
  res.render('popup', data);
};
