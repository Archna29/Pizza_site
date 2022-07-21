import React from 'react'
import './CSS/Cards.css';
import CardsData from './DATA/CardsData';

const Cards = () => {
  return (
   <>
<div className="Card_container">
    <div class="row">
       
        {CardsData.map((props)=>
            <div className="col-sm-3">
            <div className="card" >
            <img src={props.src} className="card-img-top" alt="..."/>         
                <div className="card-body">
                    <h4 className="card-title text-white">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                </div>

            </div>
            </div>
        )}
       
           </div> 
           </div>
   </>
  )
}

export default Cards;