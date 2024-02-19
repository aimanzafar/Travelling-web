import React,{useEffect} from 'react'
import './popular.css'

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";

import img2 from '../../Assets/images (1).jpeg'
import img4 from '../../Assets/images (2).jpeg'

import img3 from '../../Assets/images (3).jpeg'

import img5 from '../../Assets/images (4).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [

  {
    id: 1,
    imgSrc: img2,
    destTtile: 'washington',
    location: 'peru',
    grade: 'CULTURAL RELAX',

  },

  {
    id: 2,
    imgSrc: img4,
    destTtile: 'washington',
    location: 'peru',
    grade: 'CULTURAL RELAX',

  },

  {
    id: 3,
    imgSrc: img3,
    destTtile: 'New York',
    location: 'peru',
    grade: 'CULTURAL RELAX',

  },

  {
    id: 4,
    imgSrc: img5,
    destTtile: 'Taj Mahal',
    location: 'india',
    grade: 'CULTURAL RELAX',

  },

]

const Popular = () => {



  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className="popular container section">
      <div className="setContainer">
        <div className="secheader flex">
          <div data-aos="fade-right"  data-aos-duration="2500" className="textdiv">
            <h2 className="sectitle">
              Popular Destinations
            </h2>

            <p>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Esse omnis dolorum ratione
              molestias reprehenderit.
            </p>


          </div>

          <div data-aos="fade-left"  data-aos-duration="3000" className="icondiv flex">
            <IoIosArrowRoundBack className='icon lefticon' />
            <IoIosArrowRoundForward className='icon' />


          </div>


        </div>


        <div className="mainContent grid">

          {
            Data.map(({id,imgSrc,destTtile,location,grade}) => {
              return (
                <div  data-aos="fade-up"   className="singledestination">
                  <div className="destimage">
                    <img src={imgSrc} alt="some img" />
                    <div className="overlayinfo">
                      <h3>{destTtile}</h3>
                      <p>{location}</p>


                      <IoIosArrowRoundForward className='icon' />
                    </div>
                  </div>
                  <div className="destfooter">
                    <div className="number">
                      0{id}

                    </div>
                    <div className="desttext flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon' />

                        </span>
                        Dot
                      </span>

                    </div>
                  </div>
                </div>

              )
            })
          }


        </div>



      </div>
    </section>
  )
}

export default Popular
