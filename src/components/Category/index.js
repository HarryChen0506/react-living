import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './category.scss'

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
            auto: 3000,
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
        return (
            <div className="carousel">
                <ReactSwipe ref={(reactSwipe)=>{ this.reactSwipe = reactSwipe}} className="carousel-box" swipeOptions={options} >
                    <div className="carousel-container">
                        <div className="carousel-one">PANE1</div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-one">PANE2</div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-one">PANE3</div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-one">PANE4</div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-one">PANE5</div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-one">PANE6</div>
                    </div>
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