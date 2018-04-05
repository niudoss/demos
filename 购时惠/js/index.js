  var mySwiper = new Swiper ('.swiper-container', {
    /*direction: 'vertical',*/
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction : false,
    paginationClickable:"bullets",
    keyboardControl : true,
	paginationHide:true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })
$(function(){
	$.getJSON('json/nav.json',function(res){//json 导航获取数据
		var str ='';
		$.each(res, function(i) {
		str += '<a href="list.html?'+res[i].id+'">'+'<i><img src="'+res[i].src+'"/></i>'+res[i].name+'</a>'     
		});
		$('.nave').html(str)
	})
	

	$.getJSON('http://www.goushihui168.com/mobile/index.php?',function(res){//json 导航获取数据                                  
		        var str ='';
		       // console.log(res.datas)
      $.each(res.datas, function(i) {
           	if(res.datas[i].home1){
            //console.log(res.datas[i].home1.image)
               str +=  '<div class="seaca_1">'+
     	             '<img src="'+res.datas[i].home1.image+'" />'+
                   '</div>'
            }
           if(res.datas[i].goods){
           //	console.log(res.datas[i].goods.title)
           	 str += '<div class="tite">'+
           	       '<h2>'+res.datas[i].goods.title+'</h2>'+
                     '</div>'          
               $.each(res.datas[i].goods.item, function(e) {
               	     //console.log(res.datas[i].goods.item[e]) 
               	     str +='<a href="shangpin.html?goods_id='+res.datas[i].goods.item[e].goods_id+'"><div class="mm">'+
			                       '<img src="'+res.datas[i].goods.item[e].goods_image+'" />'+
		                            '<p>'+res.datas[i].goods.item[e].goods_name+'</p>'+
		                            '<span>'+res.datas[i].goods.item[e].goods_price+'</span>'+
     		                    ' </div> </a>'
               });
           }
	
          });
		$("#box").html(str)
		
		
	})
	
})
