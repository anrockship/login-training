import * as React from 'react';

class Form extends React.Component {

    interval;

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            count: 0,
        }
        this.count = this.count.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);    }

    count() {
        this.interval = setInterval(() => {
            const count = this.state.count + 1;
            // Change old count for new count 
            this.setState({
                count: count
            });
        }, 1000)
    }

    onChangeStart(e) {
        const value = e.target.value;
        this.setState({
            start: value,
            count: Number(value),
        });

    }

    stop(){
        clearInterval(this.interval);
    }

    reset(){
        this.setState({
            start : 0,
            count : 0,
        })
    }
 

    render() {
        return (
            <div>
                <div>
                    <input type="number" value={this.state.start} onChange={this.onChangeStart} />
                    <button onClick={this.count}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                {this.state.count}
            </div>
        )
    }
}

export default Form;
