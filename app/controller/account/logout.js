exports.index = function(req,res,next)
{
  req.session.customer_id = undefined;
  res.redirect('/index.js')
};
