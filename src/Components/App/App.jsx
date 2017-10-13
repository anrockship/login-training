import * as React from 'react';
import Demo from '../Demo/Demo';

class App extends Component {
  render() {
    return (
      <Route exact={true} path="/" component={Demo} />
    );
  }
}

export default App;
