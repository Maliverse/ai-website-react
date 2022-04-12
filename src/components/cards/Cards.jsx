import React from 'react'
import './cards.css'

const Cards = ({ frame, text }) => {
    return (
            
            <div className='gpt3__cards-container'>
              <div className='gpt3__cards'>
            
              <div className='gpt3__cards-texts'>
                <img src={frame} alt="image" />
              <div>
              <p className='p1'> Sep 26, 2021 </p>
              <h1>{text}</h1>
              </div>
            
              <div className='gpt3__read-more'>
              <p className='p2'>Read Full Article</p>
              </div>
        
              </div>
              
              </div>
              
            </div>
          )
    
}

export default Cards