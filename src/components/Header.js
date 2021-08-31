import React from 'react'
import './Header.css'
import Links from './Links.js'
import backgroundVideo from "../media/header-video.mp4"

function Header() {
    return (
        <div className='header-container'>
            <video src={backgroundVideo} autoPlay loop muted/>
            <p>Hi, I'm</p>
            <h1>ELAINE TRAN</h1>
            <Links/>
        </div>
    )
}

export default Header