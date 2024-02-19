import React,{useEffect} from 'react'
import './about.css'


import img from '../../Assets/mountain.png'
import img2 from '../../Assets/hiking.png'
import img3 from '../../Assets/rating.png'

import Aos from 'aos'
import 'aos/dist/aos.css'



const About = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?

        </h2>
        <div className="mainContent container grid">
          <div data-aos="fade-up"  data-aos-duration="2000"  className="singleItem">
            <img src={img} alt="fdfd" />
            <h3>100+ Mountains</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui eligendi quae nobis ut mollitia, expedita, dolore iure neque illum iste ipsam.</p>

          </div>

          <div data-aos="fade-up"  data-aos-duration="2500" className="singleItem">
            <img src={img2} alt="fdfd" />
            <h3>10000+ Hikings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui eligendi quae nobis ut mollitia, expedita, dolore iure neque illum iste ipsam.</p>

          </div>

          <div data-aos="fade-up"  data-aos-duration="3000" className="singleItem">
            <img src={img3} alt="fdfd" />
            <h3>30000+ customers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui eligendi quae nobis ut mollitia, expedita, dolore iure neque illum iste ipsam.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
