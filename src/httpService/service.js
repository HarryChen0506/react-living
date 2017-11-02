import 'es6-promise';
import 'whatwg-fetch';
import * as http from './fetch/fetch.js'  //{ httpGet, httpPostJson}

const demo = {
    getData: function(data){
        return http.httpGet('/api/userInfo.json')
    },
    postData: function(data){
        return http.httpPostJson('/api/userInfo.json',data)
    }
}


const httpService = {
    demo
}
export default httpService