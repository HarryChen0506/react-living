// 商品详情 
import React, {Component} from 'react';
import Loading from 'components/Loading';
import httpService from 'httpService/service.js'
import './info.scss'

export default class Info extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {            
            info: null
        }  
    }
    render(){
         return (
            <div>
                {
                    this.state.info
                    ? <div data={this.state.info}> detail content </div>
                    : <Loading />
                }
            </div>
        )
    }
    componentDidMount(){
        this.getInfo()
    }
    getInfo(){
        const id = this.props.id;
        let params = {
        }
        httpService.detail.getInfoData(id,params).then(function(data){
            console.log(data)
        },function(err){
            console.log(err)
        })
    }
}



