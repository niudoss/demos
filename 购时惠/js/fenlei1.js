$(function(){
	var str=location.search;
    //console.log(url)
    //console.log(url)
    var arr=str.split("?")
    var aee=arr[1]
    console.log(aee)
    
    $.ajax({
    	type:"get",
    	url:"http://www.goushihui168.com/mobile/index.php?c=goods_class&gc_id="+aee,
    	dataType:"json",
    	async:true,
    	success:function(data){
    		console.log(data.datas.class_list)
    		var are=data.datas.class_list
    		var stt=''
    		$.each(are, function(i) {
    			stt +='<div class="item">'+
					'<span>'+are[i].gc_name+'</span>'+
				'</div>'
			$.each(are[i].child_list, function(e) {
				stt +='<a href="list.html?'+are[i].child_list[e].gc_id+'">'+
					'<div class="bue">'+are[i].child_list[e].gc_name+'</div>'+
				'</a>'
			});
    		});
    	$(".bude").html(stt)
    	}
    });
     
    
    
})