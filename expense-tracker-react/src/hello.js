import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>
    }
}

// ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
ReactDOM.render(<HelloMessage name="Jane" />, document.getElementById('root'));

export default HelloMessage;