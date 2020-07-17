import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const gradeList = (
    props.grades.map(student => <Grade grade={student} key={student.id} />)
  );

  return (
    <div className='col col-md-8'>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Course</th>
            <th scope='col'>Grade</th>
          </tr>
        </thead>
        <tbody>
          { gradeList }
        </tbody>
      </table>
    </div>
  );
}
