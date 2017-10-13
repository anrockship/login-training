import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Components/Demo/Demo';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>

        <Login />
      </div>
    );
  }
}
ReactDOM.render(
    <Hello name="An" />,
    document.getElementById('root')
);
export default Hello;
