import React, {Component} from 'react';
import './loadMore.scss'

export default class LoadMore extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="load-more">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.loadMoreFn();
    }
}