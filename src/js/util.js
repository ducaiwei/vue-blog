const Util = {};
Util.Ajax = function(paramSetting){
	var setting = {
		url:window.location.pathname,//请求路径
		data:{},//入参
		type:'POST',//请求方式，默认post
		dataType:'json',
		async:true,//是否异步
		success:function(){},
		error:function(){}
	};
	//特殊字符转义
	var strFilter = function(str){
		str = str + '';//字符串转换
		str = str.replace(/%/g, '%25');
        str = str.replace(/\+/g, '%2B');
        str = str.replace(/ /g, '%20');
        str = str.replace(/\//g, '%2F');
        str = str.replace(/\?/g, '%3F');
        str = str.replace(/&/g, '%26');
        str = str.replace(/\=/g, '%3D');
        str = str.replace(/#/g, '%23');
		return str;
	};
	//重置配置属性
	for(let attr in paramSetting){
		setting[attr] = paramSetting[attr];
	}
    
    //入参数据组装
    var dataArr = [],inputData = '';
    for(var a in setting.data){
    	dataArr.push(a+'='+strFilter(setting.data[a]));
    }

	var xhr = new XMLHttpRequest();
	var sendData = dataArr.join('&');
	setting.type = setting.type.toUpperCase();
	try{
		if(setting.type == 'GET'){//get方式请求
			xhr.open(setting.type,setting.url+"?"+sendData+"&date="+new Date().getTime(),setting.async);
			xhr.send();
		}else{//post方式请求
			xhr.open(setting.type,setting.url,setting.async);
			xhr.setRequestHeader("Conten-type","application/x-www-form-urlencoded");
			xhr.send(sendData);
		}
	}catch(e){
		return xhrEnd();
	}
	if (setting.async) {
        xhr.addEventListener('readystatechange', xhrEnd, false);
    } else {
        xhrEnd();
    }
	function xhrEnd(){
		if(xhr.readyState == 4){
			var head = xhr.getAllResponseHeaders();
            var response = xhr.responseText;
			if(/application\/json/.test(head) || setting.dataType === 'json' || /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)){
				response = JSON.parse(response);
			}
			if (xhr.status == 200) {
				setting.success(response,setting,xhr);
			} else {
				setting.error(setting,xhr);
			}
		}
	}
	xhr.end = function(){
		xhr.removeEventListener('readystatechange',xhrEnd,false);
	}
}
//post请求
Util.post = function(pathname, data, success, error){
	let setting = {
		url:pathname,
		data:data,
		type:'POST',
		dataType:'json',
		success:success || function() {},
		error:error || function() {}
	};
	return Util.Ajax(setting);
}
//get请求
Util.get = function(pathname, data, success, error){
	let setting = {
		url:pathname,
		data:data,
		type:'GET',
		dataType:'json',
		success: success || function () {},
		error:error || function () {}
	};
	return Util.Ajax(setting);
}
//本地保存
Util.localStorage = function(key,value){

}
export{ Util }