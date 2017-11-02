import 'es6-promise';
import 'whatwg-fetch';
import * as http from './fetch/fetch.js'  //{ httpGet, httpPostJson}

const demo = {
    getData: function(params){
        return http.httpGet('/api/userInfo.json',params)
    },
    postData: function(data){
        return http.httpPost('/api/userInfo.json',data)
    }
}


const httpService = {
    demo
}
export default httpService