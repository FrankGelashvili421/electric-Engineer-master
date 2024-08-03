import './style.css'
import Glogo from '../../assests/G logo.png'
import { useState } from 'react'

export const HeaderSection =()=>{

    const [burgerDropdown, setBurgerDropdown]= useState(false);

    const dropDown = () =>{
        setBurgerDropdown(!burgerDropdown)
    }

    return(
        <header  data-aos="fade-down" data-aos-anchor-placement="center-bottom"data-aos-duration="1500">
            <div className='image'>
                <img src={Glogo} alt='logo'/>
            </div>
            <div className='burger' onClick={dropDown}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path><path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path><path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path></g></svg>
            </div>
            <ul className={burgerDropdown? 'active' : 'inactive nav'}>
                <li><a href="#aboutme">ჩემს შესახებ</a></li>
                <li><a href="#services">სერვისები</a></li>
                <li><a href="#contact">კონტაქტი</a></li>
            </ul>
        </header>
    )
}