import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from '../../components/cards/imports'
import { Cards } from '../../components'



const Blog = () => {
  return (
    <div className='gpt3__blog-cards-container'>

 
    <div className='gpt3__blog01-container'>
      <div className='gpt3__blog01'>
      <img src={blog01} alt="blog01" />
      <div className='gpt3__blog-texts'>

      <div>
      <p className='p1'> Sep 26, 2021 </p>
      <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
      </div>
    
      <div className='gpt3__read-more'>
      <p className='p2'>Read Full Article</p>
      </div>

      </div>
      
      </div>
    </div>
    
    <div className='gpt3__blog-cards-data'>
    <Cards frame={blog02} text='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
     <Cards frame={blog03} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
    </div>
     <div>
     <Cards frame={blog04} text='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
     <Cards frame={blog05} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>

     </div>
    
  </div>
  )
}

export default Blog