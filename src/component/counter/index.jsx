import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={value:0};
    }

    onIncrease= () =>{
        this.setState((prevState)=>({value:prevState.value+1}));
        this.props.onIncrease();
    }
    
    onDecrease= () =>{
        this.setState((prevState)=>({value:prevState.value-1}));
        this.props.onDecrease();
    }

    render() {
        return (
            <p>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </p>
        );
    }
}

export default Counter;