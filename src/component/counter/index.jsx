import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, propsSize: 0 };
    }

    //  onIncrease = () => {
    //     this.setState((prevState) => ({ value: prevState.value + 1 }));
    //     this.props.onIncrease();
    // }

    // onDecrease = () => {
    //     this.setState((prevState) => ({ value: prevState.value - 1 }));
    //     this.props.onDecrease();
    // }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                <button onClick={onDecrement}>-</button>
                {/* <mark>{this.state.value}</mark> */}
                <mark>{value}</mark>
                <button onClick={onIncrement}>+</button>
            </p>
        );
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (state.propsSize !== props.totalSize) {
    //         return { value: 0, propsSize: props.totalSize }
    //     }
    //     return null;
    // }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

export default Counter;