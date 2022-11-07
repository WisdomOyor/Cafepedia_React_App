import React from "react";
import {Link} from "react-router-dom";

export default function HotSalesItem(props){
    return(
        <div className="col col-div">
        <Link to="/menu">
          <div className="hotsale-item-div">
            <img src={props.src} alt={props.name} className='imgs'></img>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <span>{props.amount}</span>
          </div>
          </Link>
        </div>
    )
}