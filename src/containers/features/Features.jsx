import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
  title: 'Improving end distrusts instantly',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
      }
]

const Features = () => {
  return (
    <div className='gpt3__features-too section-margin'>
      <div className='gpt3__features-too-title '>
      <h1 className='gradient__text'>The Future is Now and <br /> You Just Need To Realize <br /> It. Step into Future Today <br /> and Make it Happen.</h1>
      <p>
      Request Early Access to Get Started
      </p>
      </div>
      <div className='gpt3__features-too-solutions'>
      {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}></Feature>
      ))}
      </div>
    </div>
  )
}

export default Features