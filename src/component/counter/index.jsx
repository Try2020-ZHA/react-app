import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={value:0};
    }

    onIncrease= () =>{
        // this.setState({
        //     value:this.state.value+1
        // });
        this.setState((prevState)=>({value:prevState.value+1}))
    }
    
    onDecrease= () =>{
        // this.setState({
        //     value:this.state.value+1
        // });
        this.setState((prevState)=>({value:prevState.value-1}))
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