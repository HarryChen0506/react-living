import 'es6-promise';
import 'whatwg-fetch';

function obj2Form(data){
    var formData = new FormData();
     for(var key in data){
         formData.append(key, data[key]);
     }
     return formData
}

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
    url = url+ prefix+ formatParams(params);
    return url;
}   

export function httpGet(url,params){
    url = getUrl(url, params);
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    });     
    return promise
}

export function httpPost(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: obj2Form(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}

export function httpPostJson(url, data){
    let promise = new Promise(function(resolve, reject){
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
        }).then(resp =>{
            return resp.json()
        }).then(data =>{
            resolve(data)

        }).catch(error=>{
            reject(error)
        })
    })
    return promise
}