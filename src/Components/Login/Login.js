import * as React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            dataUs: "",
            dataPw: ""
        } 
        this.handleChangeUs = this.handleChangeUs.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeUs (e) {
        const valueUs = e.target.value;
        this.setState({
            username: valueUs,
          });
    }

    handleChangePw (e) {
        const valuePw = e.target.value;
        this.setState({
            password: valuePw,
          });
    }

    handleSubmit () {
        if (this.state.username === 'An' && this.state.password === '123') {
            this.setState({
                data:"Login succesful"
            })
        } else {
            this.setState({
                data:"Login fail"
            })
        }
    }
    
    render() {
        return (
            <div className="login-form">
                <label>Username:</label><br />
                <input type="text" value={this.state.username} onChange={this.handleChangeUs}/><br />
                <label>Password:</label><br />
                <input type="password" value={this.state.password} onChange={this.handleChangePw}/><br />
                <button onClick={this.handleSubmit}>Submit</button>
                {this.state.data}
            </div>
        )
    }

}

export default Login;