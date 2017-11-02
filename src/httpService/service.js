import 'es6-promise';
import 'whatwg-fetch';
import * as http from './fetch/fetch.js'  //{ httpGet, httpPost(表单格式), httpPostJson（Json格式）}

function formatParams(data) {
    var arr = [];
    for (var key in data) {
         if(!!data[key] || data[key]===0||data[key]===false){
            if(Array.isArray(data[key])){
                for(var i=0; i<data[key].length; i++){
                    arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key][i]))
                }
            }else{
               arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            }
        }       
    }
    arr.push("time=" + new Date().getTime());
    return arr.join("&");
}

function getUrl(url, params){   
    var prefix = "";
    if(url.indexOf("?")>0){
        prefix = "&";
    }else{
        prefix = "?";
    }
    url = url+ prefix + formatParams(params);
    return url;
}   


const demo = {
    getData: function(params){
        let api = '/api/home/ad';
        let url = getUrl(api, params);
        return http.httpGet(url)
    },
    postData: function(data){
        let api = '/api/userInfo.json';
        let url = getUrl(api);
        return http.httpPost(url, data)
    }
}


const httpService = {
    demo
}
export default httpService