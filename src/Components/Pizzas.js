import React from 'react'
import './CSS/Pizzas.css';
import PizzasData from './DATA/PizzasData';

const Pizzas = () => {
  return (
   <>
<div className="Pizza_container">
<div className="infoContainer">
<div className="card" >
<div className="card-body">
    <h4 className="card-title ">TASTY & CRUNCHY</h4>
    <h2><p className='text-dark'>Choose & enjoy</p></h2>
    <p className="card-text text-dark">Inspired by recipes and creations of world’s best chefs</p>
  </div>
</div>
</div>
    <div class="row">
       
        {PizzasData.map((props)=>
            <div className="col-sm-4">
            <div className="card" >
            <img src={props.src} className="card-img-top" alt="..."/>         
                <div className="card-body">
                    <h4 className="card-title text-dark">{props.title}</h4>
                    <p className="card-text text-muted">{props.text}</p>
                </div>

            </div>
            </div>
        )}
       
           </div> 
           <button type="button" id ="button"><span>VIEW OUR FULL MENU</span></button>
           </div>
   </>
  )
}

export default Pizzas;