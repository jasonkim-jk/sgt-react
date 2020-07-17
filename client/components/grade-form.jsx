import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // eslint-disable-next-line no-console
    console.log('id: ', event.target.id, ' value: ', event.target.value);
  }

  render() {
    const iconName = (<i className="fas fa-user pt-2"></i>);
    const iconCourse = (<i className="fas fa-book pt-2"></i>);
    const iconGrade = (<i className="fas fa-graduation-cap pt-2"></i>);

    return (
      <div className="grade-form-container col col-md-4">
        <form action="" method="post">
          <div className="form-group row flex-nowrap">
            <label htmlFor="name" className="col-2">{iconName}</label>
            <div className="col-10 pl-0">
              <input type="text" className="form-control-sm" id="name" name="name" placeholder="Name" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group row flex-nowrap">
            <label htmlFor="course" className="col-2">{iconCourse}</label>
            <div className="col-10 pl-0">
              <input type="text" className="form-control-sm" id="course" name="course" placeholder="Course" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group row flex-nowrap">
            <label htmlFor="grade" className="col-2">{iconGrade}</label>
            <div className="col-10 pl-0">
              <input type="text" className="form-control-sm" id="grade" name="grade" placeholder="Grade" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-btn-container float-right">
            <button type="submit" className="btn btn-secondary mr-2" id="form-submit">Add</button>
            <button type="reset" className="btn btn-outline-dark" id="form-reset">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
