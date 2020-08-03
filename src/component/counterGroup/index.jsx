import React from 'react';
import Counter from '../counter';
import { Component } from 'react';

class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.state={size:0};
    }

    //使用handle表示处理什么事情
    handleResize= (event)=>{this.setState({size:event.target.value ? parseInt(event.target.value) :0})}

    render(){
        const initArray=[...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    Group Size:
                    <input defaultValue={0} onChange={this.handleResize}/>
                </label>
                {
                    initArray.map(key=><Counter key={key} />)
                }
            </div>
        )
    }
}

export default CounterGroup;