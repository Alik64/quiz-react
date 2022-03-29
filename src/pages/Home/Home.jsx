import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/reactlogo.png'
export default function Home() {
    return (
        <div className='home'>
            <img src={logo} alt="react logo" className='home_logo' />
            <h1 className='home_title'>Welcome to the ultimate React quiz!</h1>
            <p>Let's discover how good your are !</p>
            <Link to="/quiz"><button className='home_btn'>Let's go!</button></Link>
            <p>Created by <a style={{color:'var(--darkBlue)'}}href="https://www.linkedin.com/in/albert-64/">Albert</a></p>
        </div>
    )
}
