import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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
      .then(data => this.setState({ grades: this.state.grades.concat(data) }))
      .catch(error => console.error(error.message));
  }

  deleteGrade(id) {
    fetch(`/api/grades/${id}`, {
      method: 'DELETE'
    }).then(response => {
      const newGrades = [...this.state.grades];
      const index = newGrades.findIndex(grade => id === grade.id);
      newGrades.splice(index, 1);
      this.setState({ grades: newGrades });
    });
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
          <GradeForm onAddNewGrade={this.addNewGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
