$(function(){
	function show(){
	var leng=localStorage.length;
    var arr=[];
    var aee=[];
    for(var i=0;i<leng;i++){
    	var jes=localStorage.key(i)   
    arr[i]=JSON.parse(localStorage.getItem(jes))
    }
     var str='';
     var bug=0;
	$.each(arr, function(i) {
	if(arr[i].numbe){
			var uie=parseFloat(arr[i].mayn)*parseInt(arr[i].numbe)
			bug +=uie
			str +='<li>'+
			'<h2 class="naei">店铺名称：<span>'+arr[i].nub+'</span></h2>'+
			'<img src="'+arr[i].img+'" />'+
			'<div class="fae">'+
			'<p class="p1">'+arr[i].namer+'</p>'+
			'<p class="p2">商品单价：￥<span>'+arr[i].mayn+'</span></p>'+
			'<p class="p3">商品总价：￥<span>'+uie+'</span></p>'+
			'<p class="p4">'+
			'<span class="rig">-</span>'+
			'<input readonly="readonly" class="cent" type="text"  value="'+arr[i].numbe+'"/>'+
			'<span class="lef">+</span>'+
			'</p>'+
			'<p class="p5"><i class="iconfont">&#xe6b4;</i></p>'+
			'</div>'+
			'</li>'
    
    }	
	});
	  $(".box").html(str)
	  $(".zon span").text(bug.toFixed(2))
	}
	show()
	 $("body").on("tap",".rig",function(){
	 	//alert()
		var numbe=parseInt($(this).parent().find("input").val())
		var mayn=$(this).parents(".fae").find(".p2 span").text()//商品单价
		var namer=$(this).parents(".fae").find(".p1").text()//商品名称
		var img=$(this).parents("li").find("img").attr("src")//商品图片
		var nub=$(this).parents("li").find("h2 span").text()//店铺名称
		//console.log(img)
		if(numbe==1){
			return false;
		}
		$(this).parent().find("input").val(--numbe)
		var jso={
				"numbe":numbe,
				"namer":namer,
				"mayn":mayn,
				"img":img,
				"nub":nub
			}
		//console.log(jso)
		var jsostr=JSON.stringify(jso)
			localStorage.setItem(namer,jsostr)
		 show()
	 })   
	$("body").on("tap",".lef",function(){
	var numbe=parseInt($(this).parent().find("input").val()) //商品数量
	var namer=$(this).parents(".fae").find(".p1").text() //商品名称
	var mayn=$(this).parents(".fae").find(".p2 span").text()//商品单价
    var img=$(this).parents("li").find("img").attr("src");//商品图片
    var nub=$(this).parents("li").find("h2 span").text()//店铺名称
	$(this).parent().find("input").val(++numbe)	
		var jso={
			"numbe":numbe,
			"namer":namer,
			"mayn":mayn,
			"img":img,
			"nub":nub
		}
		//console.log(jso)
		var jsostr=JSON.stringify(jso)
		localStorage.setItem(namer,jsostr)
        show()
	})
	
	$("body").on("tap",".p5",function(){
		 var namer=$(this).parent(".fae").find(".p1").text()
		 if(confirm("确定要删除吗？")){
		 localStorage.removeItem(namer)
		 show()
		 }
		 
		 
	})
	

		
	
	
	
	
	
	
	
	
	
	
	
})