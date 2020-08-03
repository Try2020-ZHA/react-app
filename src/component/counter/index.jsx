import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, propsSize: 0 };
    }

    onIncrease = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
        this.props.onIncrease();
    }

    onDecrease = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
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

    //使用static无法使用this
    static getDerivedStateFromProps(props, state) {
        if (state.propsSize !== props.totalSize) {
            return { value: 0, propsSize: props.totalSize }
        }
        return null;
    }
}

export default Counter;