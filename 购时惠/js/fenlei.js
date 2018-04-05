$(function(){
  $.ajax({
  	type:"get",
  	url:"http://www.goushihui168.com/mobile/index.php?c=goods_class",
  	async:true,
  	dataType:"jsonp",
  	success:function(res){
  		//console.log(res.datas.class_list)
  		var arr=res.datas.class_list;
  		var str='';
  		$.each(arr, function(i) {
  			str += '<a href="fenlei1.html?'+arr[i].gc_id+'">'+
				'<li class="item">'+
					'<p class="p1">'+arr[i].gc_name+'</p>'+
					'<p class="p2">'+arr[i].text+'</p>'+
					'<i class="iconfont ice">&#xe6a3;</i>'+
				'</li>'+
				'</a>'
  		});
  		
  		$(".box").html(str)
  		
  		
  	}
  });
})