$(function(){
	$("button").on("click",function(){
	 var leng=localStorage.length
	 var arr=[]
	 var nam=$("#inp1").val()
	 var pwd=$("#inp2").val()
	 for(var i=0;i<leng;i++){
	 	var keyr=localStorage.key(i)
	 	
	 	arr[i]=JSON.parse(localStorage.getItem(keyr))
	 	
	 }
	$.each(arr, function(i) {
		if(arr[i].name){
	     //console.log(arr[i])
	     
	     if(arr[i].name==nam&&arr[i].pwd){
	           alert("登录成功")
	     	window.open("gerenzhongx.html?"+arr[i].name)
	     }
	     
	     
	     
		}
	});
	 
	 
	 
	})
})