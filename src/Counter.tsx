import * as React from 'react';

export default class Counter extends React.Component {

    // please note that in the approach would be like
    // const [values, setValues] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    // });
    //
    // whereby the fat arrow function is building a new values object
    // and implicitly returning the result to `setValues()`
    // due to being a single line fat arrow function in ES6
    // however, the parenthesis were necesssary to avoid it being treated like a function body 
    // setValues(oldValues => ({ ...oldValues, [name]: value}));

    state = {
        count: 0
    };

    increment = () => {
        this.setState({
                count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}