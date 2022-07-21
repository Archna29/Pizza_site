
import React from 'react'
import './CSS/Footer.css';
const Footer = () => {
  return (
	<>
	
<footer>
 <div className="card ">

  <div className="card-body">
  <span id ="new">CALL US</span>
    <h3 class="card-title">+1-202-555-016</h3></div>
	
   <ul class="list">
  <li class="list-item">mon-thu: 11.00 – 23.00</li>
  <li class="list-item">sat: 12.00 – 23.00</li>
  <li class="list-item">sun: 12.00 – 21.00</li>
  
</ul>
   <ul class="list mt-3">
  <li class="list-item">60 East 65th Street</li>
  <li class="list-item">New York City</li>
  
</ul>


 


  </div>




  <div class="text-center text-white p-4 bg-danger" >
    © 2021 Copyright :
    <a className="text-reset fw-bold m-3" href="https://mdbootstrap.com/">TASTYPIZZA.COM</a>
  </div>

</footer>

</>
  )
}

export default Footer