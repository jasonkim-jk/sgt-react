import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  getAverageGrade(grades) {
    const sum = grades.reduce((total, num) => {
      total += num.grade;
      return total;
    }, 0);
    return Math.round(sum / grades.length);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.error(error.message));

  }

  render() {
    const average = this.getAverageGrade(this.state.grades);
    return (
      <div className='container'>
        <div className='row'>
          <Header title='Student Grade Table' averageTitle='Average Grade'
            averageGrade={isNaN(average) ? 0 : average}/>
        </div>
        <div className='row'>
          <GradeTable grades={ this.state.grades } />
        </div>
      </div>
    );
  }
}

export default App;
