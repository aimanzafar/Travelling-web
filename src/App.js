import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'



const App = () => {
  return (
   <>
<Navbar/>
 <Home/>
<Popular/>
<Offers/>
<About/>
<Blog/>
<Footer/> 

   </>
  )
}

export default App
