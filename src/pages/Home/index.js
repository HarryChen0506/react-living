
import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            count: 0
        }
        this.handlerIncrease = this.handlerIncrease.bind(this);
    }
    handlerIncrease(){
        this.setState({
            count: ++this.state.count
        })
    }
    render(){
        return (
            <div>
                <div>this is Home...!!!. </div>
                <div>
                    计数器：{this.state.count}
                    <p><button onClick={this.handlerIncrease}>自增</button></p>                
                </div> 
            </div>
            
        )
    }
}