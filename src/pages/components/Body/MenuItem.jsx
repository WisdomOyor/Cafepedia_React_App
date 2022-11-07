import React from 'react';

export default function MenuItem(props) {
  return (
    <div className="col col-div">
        <img src={props.src} alt={props.name} className="imgs"></img>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <span>{props.amount}</span>
    </div>
  );
}
