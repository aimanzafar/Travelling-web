import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
  


      <section className='home'>
<div className="setContainer container">
  <div className="hometext">
    <h1  data-aos="fade-up" className="title">
      Plan your Trip with Travel Dot.
    </h1>
    <p   data-aos="fade-up"  data-aos-duration="2500"  className="subtitle">
      Travel your favourite city and explore much more!
    </p>
    <button data-aos="fade-up"  data-aos-duration="3000"  className="btn">
      <a href="#">Explore Now!</a>
    </button>
  </div>
  


  <div className="homeCard grid">

<div data-aos="fade-right"  data-aos-duration="2000"  className="locationdiv">
  <label htmlFor="location">Location</label>
  <input type="text" placeholder='Dream Destination' />
</div>

<div data-aos="fade-right"  data-aos-duration="2500"  className="distdiv">
  <label htmlFor="distance">Location</label>
  <input type="text" placeholder='11 meters' />
</div>

<div   data-aos="fade-right"  data-aos-duration="3000" className="pricediv">
  <label htmlFor="price">Location</label>
  <input type="text" placeholder='$100 - $400' />
</div>

<button data-aos="fade-left"  data-aos-duration="2000" className="btn">Search</button>


  </div>
</div>
      </section>
   
  )
}

export default Home
