import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                    <p>Rustumbadha</p>
                    <p>Narsapur</p>
                </div>
                </div>
                
                <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    9963924189
                </h4>
            </div>
            <div className='email'>
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    sainagabalakanchi717@gmail.com
                </h4>
                
            </div>
            </div>
           
            <div className='right'>
                <h4>About me</h4>
                <p>A working profession talented in building web applications, I enjoy discussing new tasks and developing them</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer