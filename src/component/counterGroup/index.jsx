import React from 'react';
import Counter from '../counter';
import { Component } from 'react';

class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.state={size:6};
    }

    render(){
        const initArray=[...Array(this.state.size).keys()];
        return(
            <div>
                {
                    initArray.map(key=><Counter key={key} />)
                }
            </div>
        )
    }
}

export default CounterGroup;