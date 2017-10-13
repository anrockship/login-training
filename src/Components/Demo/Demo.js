import * as React from 'react';
import Form from '../Form/Form';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        // Declare count
        this.count = this.count.bind(this);
       
    }

    // Call function count to 
    count(){
        setInterval(() => {
            const count = this.state.count + 1;
            // Change old count for new count 
            this.setState({
                count: count
            });
        }, 1000)
    }

    render () {
        return (
            <Form onCount={this.count} />
        )
    }
}

export default Timer;
