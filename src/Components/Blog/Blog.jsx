import React,{useEffect} from 'react'
import './blog.css'
import { IoIosArrowRoundForward } from "react-icons/io";

import img2 from '../../Assets/images (1).jpeg'
import img4 from '../../Assets/images (2).jpeg'

import img3 from '../../Assets/images (3).jpeg'

import img5 from '../../Assets/images (4).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Post = [
  {
    id: 1,
    postImage: img2,
    title: 'Beautiful Pakistan, let us travel',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam!',
  },
  {
    id: 2,
    postImage: img3,
    title: 'Beautiful Pakistan, let us travel',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam!',
  },
  {
    id: 3,
    postImage: img4,
    title: 'Beautiful Pakistan, let us travel',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam!',
  },
  {
    id: 4,
    postImage: img5,
    title: 'Beautiful Pakistan, let us travel',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam!',
  },
]
const Blog = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="blog container section">
    <div className="secContainer">


      <div className="secIntro">
        <h2  data-aos="fade-up"  data-aos-duration="2500" className="secTitle">
          Our Best Blog?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam!
        </p>

      </div>
<div className="mainContainer grid">
{
  Post.map(({id,postImage,title,desc})=>{
    return(<div  data-aos="fade-up"  data-aos-duration="2500" className="singlePost grid">
    <div className="imgDiv">
      <img src={postImage} alt={title} />
    </div>
  
    <div className="postDetails">
      <h3 data-aos="fade-up"  data-aos-duration="3000">{title}</h3>
      <p data-aos="fade-up"  data-aos-duration="3500">{desc}</p>
  
    </div>
  
  <a href="#" className="flex" data-aos="fade-up"  data-aos-duration="4500">
  
  
      Read More
      <IoIosArrowRoundForward  className='icon'/>
  
  </a>
  </div>)
  })
}
</div>

    </div>
   </section>
  )
}

export default Blog
