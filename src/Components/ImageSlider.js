import React from 'react';
import './CSS/ImageSlider.css';
import ImageSliderData from './DATA/ImageSliderData';
const ImageSlider = () => {
  return (
  <>


<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  {ImageSliderData.map((props)=>
    <div className={props.className} data-bs-interval="3000">
   
   <div class="card   ">

<div class="row g-0">
 <div class="col-md-4">
   <img src={props.src} className="img-fluid rounded-start" alt="..."/>
 </div>
 <div class="col-md-8">
   <div class="card-body">
   <span id ="new">{props.span}</span>
     <h3 class="card-title">{props.title}
</h3>
     <p class="card-text w-50 text-dark">{props.text}</p>
     <button type="button" id ="button"><span>ORDER NOW</span></button>
   </div>
   
 
 </div>
</div>

</div>
 </div> 
    )}

    


{/*    
    <div className="carousel-item" >
    <div class="card  ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://buddhapizza.com/storage/products/cwVWcsBQBMnpRICIxPzCsfXyT85SlwPSi0ZoAAih.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body mt-5">
     
        <h3 class="card-title">QUINOA & BLACK BEAN BURGER
</h3>
        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    
    </div>
    <div className="carousel-item">
    <div class="card  ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_4-640x640.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body mt-5">
        <h3 class="card-title">QUINOA & BLACK BEAN BURGER
</h3>
        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div> */}
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 
</div>

 

  </>
  )
}

export default ImageSlider;