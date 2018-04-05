$(function(){
	/*var mySwiper = new Swiper ('.swiper-container', { 
    loop: true,
    })        
*/
    var str=location.search;
    //console.log(url)
    //console.log(url)
    var arr=str.split("=")
    var aee=arr[1]
      //  console.log(aee)
        
        //http://www.goushihui168.com/mobile/index.php?c=goods&a=goods_detail&goods_id=101684
 //http://www.goushihui168.com/mobile/index.php?c=goods&a=goods_detail&goods_id=101637       
     $.getJSON("http://www.goushihui168.com/mobile/index.php?c=goods&a=goods_detail&goods_id="+arr[1],function(data){
        	//console.log(data)
        	
        	var arr=data.datas.goods_image.split(',')
        	var are=data.datas.goods_commend_list
        	//console.log(arr)
        	var str=''
        	var ste=''
        	$.each(are, function(i) {
        		ste+='<a href="shangpin.html?goods_id='+are[i].goods_id+'"><li class="item">'+
   		                  '<img src="'+are[i].goods_image_url+'" />'+
   		                  '<p>'+are[i].goods_name+'</p>'+
   		                  '<span>'+are[i].goods_price+'</span>'+
   	                 '</li></a>'
        	});
        	
          $(".box1").html(ste)
          $.each(arr, function(i) { //获取轮播图的遍历
        		str +=' <div class="swiper-slide sild sild1">'+
        	 '<img src="'+arr[i]+'" />'+
                      '</div>'
        	});
        	$('#banner1').html(str)//获取轮播图插入domo结构
        	$(".nume").html(arr.length)
        	$(".jis").html(data.datas.goods_info.goods_name)
        	$(".myne").html(data.datas.store_info.store_name)
        	$(".pu1").html(data.datas.goods_info.goods_jingle)
        	$(".pu2 .value").html(data.datas.goods_info.goods_price)
        	$(".pu3 .value").html(data.datas.goods_info.goods_marketprice)
        	$(".pu4 .value").html(data.datas.goods_info.goods_salenum)
        	$(".pe1 .value").html(data.datas.goods_info.goods_storage)
        	var mySwiper = new Swiper ('.swiper-container', { 
                loop: true,
                autoplay:2000,
                autoplayDisableOnInteraction : false,
                 paginationClickable:"bullets",
                  pagination: '.swiper-pagination',
                keyboardControl : true,
             })                  //swiper 动画声明
        	      var num=parseInt( $(".cent").val())
        	      //console.log(num)
        	$(".rig").on("tap",function(){	 
        		//alert()
        		if(num==1){
        			return false;
        		} 
        		 $(".cent").val(--num)	
        	})
        	$(".lef").on('tap',function(){	   
        		if(num==data.datas.goods_info.goods_storage){
        			return false;
        		} 
        		 $(".cent").val(++num)	
        	})
        })
     $(".btn2").on("tap",function(){
     	var namer=$(".jis").text() //商品名称
     	var nub=$(".myne").text() //店铺名称
     	var mayn=parseFloat($(".pu2 .value").text()) //商品价格
     	var numbe=parseFloat($(".cent").val()) //商品数量
     	var img=$(".sild1").eq(2).find("img").attr("src")//图片地址
     	//console.log(img)
     	var jsonp={
     		"namer":namer,
     		"nub":nub,
     		"mayn":mayn,
     		"numbe":numbe,
     		"img":img
     	}
     	var jsostr=JSON.stringify(jsonp)
          //console.log(jsostr)
     	localStorage.setItem(namer,jsostr)
     })
   
   
   
   
   
   
   
   
   
   
   
})
