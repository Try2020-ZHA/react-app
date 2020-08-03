import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, propsSize: 0 };
    }


    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                <button onClick={onDecrement}>-</button>
                <mark>{value}</mark>
                <button onClick={onIncrement}>+</button>
            </p>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

export default Counter;