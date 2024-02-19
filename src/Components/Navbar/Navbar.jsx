import React, {useState } from 'react';
import './navbar.css';
//  import './Navbar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {


const[active,setActive] =useState('navBar')

//code to show navbar onclicking menu option in small screen
const showNav = () =>{
  setActive('navBar activeNavbar')
}

//code to close navbar onclicking cross button


const closeNav= ()=>{
  setActive('navBar')
}


//code to add background color to header
const[transparent,setTransparent] =useState('header')
const addBg= ()=>{
    if(window.scrollY >= 10){
        setTransparent('header activeHeader')
    }
    else{
        setTransparent('header')
    }
}
window.addEventListener('scroll',addBg)

    return (
        <section className='navBarSection'>
            <div className={transparent}>
                <div className='logoDiv'>
                    <a href='#' className='logo'>
                        <h1 className='flex'>
                            <MdOutlineTravelExplore className='icon' />
                            Dot
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href='#' className='navLink'>
                                Home
                            </a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>
                                Products
                            </a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>
                                Resources
                            </a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>
                                Contact
                            </a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navLink'>
                                Blog
                            </a>
                        </li>
                        <div className='headerBtns flex'>
                            <button className='btn loginBtn'>
                                <a href='#'>Login</a>
                            </button>
                            <button className='btn'>
                                <a href='#'>Sign Up</a>
                            </button>
                        </div>
                    </ul>
                    <div onClick={closeNav} className='closeNavbar'>
                        <IoIosCloseCircle className='icon' />
                    </div>
                </div>
                <div onClick={showNav} className='toggleNavbar'>
                    <CiMenuFries className='icon' />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
