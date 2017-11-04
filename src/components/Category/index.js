import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './category.scss';

// import img1 from 'static/images/category/138012-20161022224121920-424129491.png'

import categoryList from 'constants/category/categoryList.js'

import img2 from 'static/images/category/138012-20161022224121920-424129491.png'

let img3 = require('static/images/category/138012-20161022224033873-290248113.png');

export default class Category extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            index: 0
        }
    }
    render(){
        let options = {
            startSlide: 0,
            speed: 400,
            // auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: (index, elem)=> {
                console.log(index);
                this.setState({
                    index: index
                })
            },
            transitionEnd: function(index, elem) {}
        }
        let bg = {
            backgroundImage: "url("+img2+")"
        }
        return (
            <div className="carousel">
                <ReactSwipe ref={(reactSwipe)=>{ this.reactSwipe = reactSwipe}} className="carousel-box" swipeOptions={options} >

                    { categoryList.length >0 && categoryList.map((item, index)=>{
                        return  <ul className="carousel-container clear-fix" key={'box_'+index}>                                    
                                    { item.map((one, num)=>{
                                            return  <li key={one.code} className="carousel-one f-left" style={{backgroundImage: 'url(/api/images/category/'+one.img_url+')'}}>
                                                        {one.name}
                                                    </li>
                                    }) }                                   
                                </ul>
                    }) }
                </ReactSwipe> 
                <div className="dot-box">
                    <div className={this.state.index === 0 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,0,1000)}>1</div>
                    <div className={this.state.index === 1 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,1,1000)}>2</div>
                    <div className={this.state.index === 2 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,2,1000)}>3</div>
                    <div className={this.state.index === 3 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,3,1000)}>4</div>
                    <div className={this.state.index === 4 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,4,1000)}>5</div>
                    <div className={this.state.index === 5 ? 'selected dot' : 'dot'} onClick={this.handleSlide.bind(this,5,1000)}>6</div>
                </div>
            </div>     
                    
        )
    }
    componentDidMount(){
        // console.log('Category组件挂载');
        // console.log(this.reactSwipe)
    }
    handleSlide(index, duration){
       this.reactSwipe.swipe.slide(index,duration)
    }
}