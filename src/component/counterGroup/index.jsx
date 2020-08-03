import React from 'react';
import Counter from '../Counter';
import { Component } from 'react';

class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            size:0,
            totalValue:0
        };
    }

    //使用handle表示处理什么事情
    handleResize= (event)=>{
        this.setState({
            size:event.target.value ? parseInt(event.target.value) :0,
            totalValue:0
        })
    }

    handleOnIncrease= ()=>{
        this.setState((prevState)=>({totalValue:prevState.totalValue+1}));
    }

    handleOnDecrease= ()=>{
        this.setState((prevState)=>({totalValue:prevState.totalValue-1}));
    }

    render(){
        const initArray=[...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    Group Size:
                    <input defaultValue={0} onChange={this.handleResize}/>
                </label>
                <label>
                    Total Value:<span>{this.state.totalValue}</span>
                </label>
                {
                    initArray.map(key=><Counter totalSize={this.state.size} onIncrease={this.handleOnIncrease} onDecrease={this.handleOnDecrease} key={key} />)
                }
            </div>
        )
    }
}

export default CounterGroup;