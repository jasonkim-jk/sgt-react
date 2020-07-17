import React from 'react';

export default function Header(props) {
  return (
    <div className='header-container col'>
      <h3>{props.title}</h3>
      <h4> {props.averageTitle} <span className="badge badge-secondary">{props.averageGrade}</span></h4>
    </div>
  );
}
