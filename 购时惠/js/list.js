$(function(){
	 var str=location.search;
    //console.log(url)
    //console.log(url)
    var arr=str.split("?")
    $.ajax({
    	type:"get",
    	url:"http://www.goushihui168.com/mobile/index.php?c=goods&a=goods_list&key=4&page=10&curpage=1&gc_id="+arr[1],
    	async:true,
    	dataType:"json",
    	success:function(data){
    		console.log(data.datas.goods_list)
    		var arz=data.datas.goods_list
    		var ste=''
    		$.each(arz, function(i) {
    			ste+='<li class="list">'+
			  	'<a href="shangpin.html?goods_id='+arz[i].goods_id+'">'+
			  	'<dl>'+
			  		'<dt><img src="'+arz[i].goods_image_url+'" /></dt>'+
			  		'<dd class="dd1">'+arz[i].goods_name+'</dd>'+
			  		'<dd class="dd2">￥'+arz[i].goods_price+'</dd>'+
					  '<dd class="dd3">'+
					  '<span></span>'+
					  '<span></span>'+
					  '<span></span>'+
					  '<span></span>'+
					  '<span></span>'+
					 ' </dd>'+
			  	'</dl>'+
			  	'</a>'+
			 ' </li>'
    		});
    		$(".butt").html(ste)
    	}
    });
})
