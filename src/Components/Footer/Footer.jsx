import React,{useEffect} from 'react'
import './footer.css'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div data-aos="fade-up"  data-aos-duration="2500" className="logoDiv">
          <div data-aos="fade-up"  data-aos-duration="2500" className="footerlogo">
            <a href="#" className="logo  flex">
              
        <h1 className="flex">
        <SiYourtraveldottv className='icon' />
Dot
        </h1>
            </a>
          </div>
          <div data-aos="fade-up"  data-aos-duration="3000" className="socials flex">
<FaFacebookF  className='icon'/>
<FaTwitter  className='icon'/>
<FaInstagram  className='icon'/>

</div>
        </div>

<div data-aos="fade-up"  data-aos-duration="3000" className="footerlinks">
  <span className="linktitle">
   Information
  </span>
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Explore</a>
  </li>
  <li>
    <a href="#">Travel</a>
  </li>
  <li>
    <a href="#">Blog</a>
  </li>
</div>
<div data-aos="fade-up"  data-aos-duration="4000" className="footerlinks">
  <span className="linktitle">
    Helpful Links
  </span>
  <li>
    <a href="#">Destinations</a>
  </li>
  <li>
    <a href="#">Support</a>
  </li>
  <li>
    <a href="#">Travel & Conditions</a>
  </li>
  <li>
    <a href="#">Privacy</a>
  </li>
</div>

<div data-aos="fade-up"  data-aos-duration="5000" className="footerlinks">
  <span className="linktitle">
  Contact us
  </span>
<span className="phone">+44 454 757453 3</span>
<span className="email">dottravel@gmail.com</span>
</div>

      </div>
      
    </div>
  )
}

export default Footer
