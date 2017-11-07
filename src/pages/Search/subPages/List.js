import React, {Component} from 'react';
import HomeListComponent from 'components/HomeListComponent';
import LoadMore from 'components/LoadMore';
import Loading from 'components/Loading';
import httpService from 'httpService/service.js'
import './list.scss'

export default class List extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            data: [],
            hasMore: false,    // 数据是否还有更多
            isLoadingMore: false,  //是否正在加载状态

        }
    }
    render(){
        return (
            <div className="home-list">
                <h2 className="home-list-title">{this.props.title}</h2>
                {
                    this.state.data.length
                    ? <HomeListComponent data={this.state.data}/>
                    : <Loading/>
                } 
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMore.bind(this)} toBottom="100" />
                    :<div></div>
                }               
            </div>
        )
    }
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        httpService.home.getListData({cityName:'shenzhen'}).then((data)=>{
            let res = data.result.data;
            this.setState({
                data: res.data,
                hasMore: res.hasMore
            })
        },function(err){
            console.log(err)
        })
    }
    loadMore(){
        // console.log('加载更多');
        this.setState({
            isLoadingMore: true
        })
        httpService.home.getListData({cityName:'shenzhen'}).then((data)=>{
            let res = data.result.data;
            this.setState({
                data: this.state.data.concat(res.data),
                hasMore: res.hasMore,
                isLoadingMore: false
            })
        },function(err){
            this.setState({
                isLoadingMore: true
            })
            console.log(err)
        })
    }
}