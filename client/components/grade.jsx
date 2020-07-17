import React from 'react';

export default function Grade(props) {
  return (
    <tr>
      <td>{ props.grade.name }</td>
      <td>{ props.grade.course }</td>
      <td>{ props.grade.grade ? props.grade.grade : 'No grades recorded' }</td>
    </tr>
  );
}
