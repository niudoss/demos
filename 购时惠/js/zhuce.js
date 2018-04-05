$(function(){
	var reg={
		reguser:/^[a-zA-z][a-zA-Z0-9_]{2,9}$/,
		regupwd:/^[a-zA-Z]\w{5,17}$/,
		regphone:/^1(3|4|5|7|8)\d{9}$/
	}
	function acnt(obje){
		if($(obje).val()==''){
			$(obje).next("span").text("账号为空")
			$(obje).focus();
		}else if(!reg.reguser.test($(obje).val())){
			$(obje).next("span").text("不合法");
			$(obje).focus();
		}else if(reg.reguser.test($(obje).val())){
			$(obje).next("span").text("");
		}  //判断用户名的函数
	}
	function inpwd(obje){
		if($(obje).val()==""){
			$(obje).next("span").text("密码为空")
			$(obje).focus();
		}else if(!reg.regupwd.test($(obje).val())){
			$(obje).next("span").text("不合法")
			$(obje).focus();
		}else if(reg.regupwd.test($(obje).val())){
			$(obje).next("span").text("");
		}
	}//判断密码
	
	function inphon(obje){
		if($(obje).val()==""){
			$(obje).next("span").text("不能为空")
			$(obje).focus();
		}else if(!reg.regphone.test($(obje).val())){
			$(obje).next("span").text("不合法")
			$(obje).focus();
		}else if(reg.regphone.test($(obje).val())){
			$(obje).next("span").text("")
		}
		
	}
	
	$("#inp1").focusout(function(){
		acnt("#inp1")
	})
	$("#inp2").focusout(function(){
		inpwd("#inp2")
	})
	$("#inp3").focusout(function(){
		inphon("#inp3")
	})
	$("button").on("click",function(){
		inphon("#inp3")
		inpwd("#inp2")
		acnt("#inp1")
		var name=$("#inp1").val();
		var pwd=$("#inp2").val();
		var jsonp={
			"name":name,
			"pwd":pwd
		}
		var jsost=JSON.stringify(jsonp)
		console.log($(".bue span").text())
		if(!$(".bue span").text()){
			 localStorage.setItem(name,jsost)
			 window.open("index.html")
		}else{
			alert("注册失败")
		}
		
	   
		
		
	})
	
})