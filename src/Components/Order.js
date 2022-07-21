import React from 'react'
import OrderData from './DATA/OrderData';
import './CSS/Order.css'
const Order = () => {
  return (
   <>
<div className="Order_container">
    <div class="row">
       
        {OrderData.map((props)=>
            <div className="col-sm-6">
            <div className="card" id ="card" style={{backgroundImage:`url(${props.src})`}} >
            {/* <img src={props.src} className="card-img-top" alt="..."/>          */}

                <div className="card-body">
                <span id ="new">NEW</span>
                    <h3 className="card-title ">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                    <h3 className='card-title' id="rate">{props.rate}</h3>
                    <button type="button" id ="button"><span>ORDER NOW</span></button>
                </div>
   
            </div>
            </div>
        )}
       
           </div> 
           </div>
   </>
  )
}

export default Order;