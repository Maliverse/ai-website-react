import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'; 
const Footer = () => {
  return (
    <div className='gpt3__footer-container'>
      <div className='gpt3__footer-top'>

     
      <div className='gpt3__footer-heading gradient__text'>
        <h1>
        Do you want to step in to the  <br /> future before others
        </h1>
      </div>
      <div className='gpt3__footer-button'>
      <button>Request early access</button>
      </div>

      </div>
      
      <div className='gpt3__footer-base-content'>

      
      <div className='gpt3__footer-logo'>
        <img src={logo} alt="" />
        <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
      </div>

      <div className='gpt3__footer-links'>
      <ul>
     <strong><li>Links</li></strong> 
     <li>Overons</li>
     <li>Social Media</li>
     <li>Counters</li>
     <li>Contact</li>
      </ul>
      </div>

      <div className='gpt3__footer-links 2'>
      <ul>
     <strong><li>Company</li></strong> 
     <li>Terms and Conditions</li>
     <li>Privacy Policy</li>
     <li>Contact</li>
     <li>item</li>
      </ul>
      </div>

      <div className='gpt3__footer-links 3'>
      <ul>
     <strong><li>Get in touch</li></strong> 
     <li>Crechterwoord K12 182 DK Alknjkcb</li>
     <li>085-132567</li>
     <li>info@payme.net</li>
     
      </ul>
      </div>

      </div>
      <div className='gpt3__footer-watermark'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer