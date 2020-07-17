import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteGrade = this.handleDeleteGrade.bind(this);
  }

  handleDeleteGrade(event) {
    this.props.deleteGrade(parseInt(event.target.id));
  }

  render() {
    return (
      <tr>
        <td>{ this.props.grade.name }</td>
        <td>{ this.props.grade.course }</td>
        <td>{ this.props.grade.grade ? this.props.grade.grade : 'No grades recorded' }</td>
        <td><button type="button" className="btn btn-danger btn-sm" id={this.props.grade.id}
          onClick={this.handleDeleteGrade}>Delete</button></td>
      </tr>
    );
  }
}
