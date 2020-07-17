import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

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

  addNewGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    }).then(response => response.json())
    // eslint-disable-next-line no-console
      .then(data => console.log(data))
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
          <GradeForm />
        </div>
      </div>
    );
  }
}

export default App;
