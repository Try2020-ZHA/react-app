import React from 'react';
import Counter from '../counter';
import { Component } from 'react';
import { createStore } from 'redux'
import myCounter from '../../reducer'

const store = createStore(myCounter)
class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.states = store.getState();
        store.subscribe(this.render.bind(this));
        this.state={
            size:0,
            totalValue:0
        };
    }

    handleResize= (event)=>{
        if(parseInt(event.target.value)!==this.state.size){
            this.setState({
                size:event.target.value ? parseInt(event.target.value) :0,
                totalValue:0
            })
        }
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
                    <input defaultValue={0} onBlur={this.handleResize}/>
                </label>
                <label>
                    Total Value:<span>{this.state.totalValue}</span>
                </label>
                {
                    initArray.map(key=><Counter 
                        value={store.getState()}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                        key={key}
                        />
                        )
                }
            </div>
        )
    }
}

export default CounterGroup;