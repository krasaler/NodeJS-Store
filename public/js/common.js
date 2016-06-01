$('#cart').hover(function(){
  $('.cart-popup').removeAttr('style');
}, function(){
  $('.cart-popup').attr('style','display:none;');
});
var cart = {
  add:function(product_id){
    $.ajax({
      url: 'http://localhost:3000/index.js?r=checkout/cart/add',
      dateType:'json',
      type:'get',
      data:'product_id='+product_id,
      success:function(json){
        $('.alert').remove();
        html = '<div class="alert alert-success" role="alert">Product <a href="/index.js?r=product/product&product_id='+product_id+'">'+json['product_name']+'</a> was successfully added to the cart</div>';
        $('.container  .breadcrumb').after(html);
        $('td.total').html('$'+json['all_total']);
      }
    });
  },
  update:function(product_id,quantity){
    $.ajax({
      url: 'http://localhost:3000/index.js?r=checkout/cart/update',
      dateType:'json',
      type:'get',
      data:'product_id='+product_id+'&quantity='+quantity,
      success:function(json){
        $('span[product_id='+product_id+']').html('$'+json['total']);
        $('td.total').html('$'+json['all_total']);
      }
    });
  },
  remove: function(product_id){
    $.ajax({
      url: 'http://localhost:3000/index.js?r=checkout/cart/delete',
      dateType:'json',
      type:'get',
      data:'product_id='+product_id,
      success:function(json){
        $('tr#product_'+product_id).remove();
        $('td.total').html('$'+json['all_total']);
      }
    });
  }
};
$(function(){
  $(document).on('click','#cart > a >  img',function(){
    if($('#cart_popup').css('display') == 'none')
    {
    $.ajax({
      url: '/index.js?r=common/cart',
      dateType:'html',
      type:'get',
      success:function(html){
        $('#cart_popup').html($(html).find('.table_cart_popup').clone());
        $('#cart_popup').css('display','block');
      }
    });
  }
  else {
      $('#cart_popup').css('display','none');
  }
  });
  $(document).on('click','.account_menu',function(){
    if($('.account_popup_target').css('display') == 'none')
    {
    $.ajax({
      url: '/index.js?r=account/popup',
      dateType:'html',
      type:'get',
      success:function(html){
        $('.account_popup_target').html($(html).find('.account_popup').clone());
        $('.account_popup_target').css('display','block');
      }
    });
  }
  else {
      $(".account_popup_target").css('display','none');
  }
  });
  $(".owl-carousel").owlCarousel({
    items:2,
    autoPlay:3000,
    singleItem:true,
    navigation: true,
    navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>','<i class="fa fa-chevron-right fa-5x"></i>']
  });
  $(document).on('click','span#update_product',function(){
    var product_id = $(this).data('id');
    var quantity = $('input[name=\'cart['+product_id+']\']').val();
    cart.update(product_id, quantity);
  });
  $(document).on('click','#form-search span',function(){
    var search = $('#form-search input').val();
    window.location = "/index.js?r=product/search&search="+search;

  });
  $(document).on('click','#btn-order',function(){
    var first_name = $('#checkout').find('input[name=\'shipping_address[first_name]\']').val();
    var last_name = $('#checkout').find('input[name=\'shipping_address[last_name]\']').val();
    var address = $('#checkout').find('input[name=\'shipping_address[address]\']').val();
    var email = $('#checkout').find('input[name=\'shipping_address[email]\']').val();
    var city = $('#checkout').find('input[name=\'shipping_address[city]\']').val();
    var country = $('#checkout').find('input[name=\'shipping_address[country]\']').val();
    $.ajax({
      url: 'http://localhost:3000/index.js?r=checkout/confirm',
      dateType:'json',
      type:'get',
      data:$('#checkout input').serialize(),
      success:function(json){
        $('#checkout .alert').remove();
        if(json['error']){
          $('#checkout').prepend('<div class="alert alert-danger"><i class="fa fa-exclemation-circle"></i>'+json['error']+'<div>');
        }
        if(json['success']){
          window.location = '/index.js?r=checkout/success';
        }
      }
    });
  });
  $(document).on('click','#btn-register',function(){
    $.ajax({
      url: '/index.js?r=account/register/register',
      dateType:'json',
      type:'get',
      data:$('#form-register').serialize(),
      success:function(json){
        $('#form-register .alert').remove();
        if(json['success']){
          window.location = '/index.js?r=account/order';
        }
        if(json['error']){
          $('#form-register').prepend('<div class="alert alert-danger"><i class="fa fa-exclemation-circle"></i>'+json['error']+'<div>');
        }
      }
    });
  });
  $(document).on('click','#btn-login',function(){
      $.ajax({
        url: '/index.js?r=account/login/login',
        dateType:'json',
        type:'get',
        data:$('#form-login').serialize(),
        success:function(json){
          $('#form-login .alert').remove();
          if(json['success']){
            window.location = '/index.js?r=account/order';
          }
          if(json['error']){
            $('#form-login').prepend('<div class="alert alert-danger"><i class="fa fa-exclemation-circle"></i>'+json['error']+'<div>');
          }
        }
      });
    });
  $(document).on('click','#btn-review',function(){
    var product_id = $(this).data('id');
    $.ajax({
      url: '/index.js?r=product/product/write&product_id='+product_id,
      dateType:'json',
      type:'get',
      data:$('#form-review').serialize(),
      success:function(json){
        $('#form-review .alert').remove();
        if(json['success']){
          $('#form-review').prepend('<div class="alert alert-success"><i class="fa fa-exclemation-circle"></i>'+json['success']+'<div>');
        }
        if(json['error']){
          $('#form-review').prepend('<div class="alert alert-danger"><i class="fa fa-exclemation-circle"></i>'+json['error']+'<div>');
        }
      }
    });
  });
});
