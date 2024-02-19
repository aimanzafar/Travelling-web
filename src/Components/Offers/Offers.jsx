import React ,{useEffect} from 'react';
import './offers.css';
import { MdKingBed } from 'react-icons/md';
import { MdBathtub } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';

import img2 from '../../Assets/images (3).jpeg';
import img3 from '../../Assets/nature-photography.webp';
import img4 from '../../Assets/images (1).jpeg';


import Aos from 'aos'
import 'aos/dist/aos.css'


const offers = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'NewYork',
    location: 'Mexico',
    price: '$2,452'
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: 'NewYork',
    location: 'Mexico',
    price: '$2,452'
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: 'NewYork',
    location: 'Mexico',
    price: '$2,452'
  }
];

const Offers = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="offer section container">
      <div className="secContainer">
        <div data-aos="fade-up"  data-aos-duration="2500"   className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloremque aut ducimus harum.
          </p>
        </div>
        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div data-aos="fade-up"  data-aos-duration="3000"  className="singleoffer" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt="image" />
                  <span className="discount">30% OFF</span>
                </div>
                <div className="offerbody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="anemities flex">
                    <div className="singleanemity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleanemity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleanemity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleanemity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>abc villas, {location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <IoIosArrowRoundForward className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
