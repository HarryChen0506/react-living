import 'es6-promise';
import 'whatwg-fetch';

export function httpGet(url){
    return fetch(url,{
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: 'include'
    })
}
export function httpPostJson(url, data){
    return fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default',
        credentials: 'include'
    })
}