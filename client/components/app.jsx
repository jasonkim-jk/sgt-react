import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.error(error.message));
  }

  render() {
    return (
      <Header title='Student Grade Table'/>
    );
  }
}

export default App;
