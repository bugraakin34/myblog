import React from 'react'
import Menu from './Menu'
import './project.css'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <div className='Container'>

      <Menu/>

      <div className='main'>
            
        <h1>MY REACT PROJECTS</h1>

        <div className='projects'>
          <ul className='pro'>

            <li className='pr'><Link to='https://github.com/bugraakin34/Pokemon-Pokedex' target='_blank'>Pokemon Pokedex</Link></li>
            <li className='pr'><Link to='https://github.com/bugraakin34/CmcWoodArt' target='_blank'>CMC Wood Art</Link></li>
            <li className='pr'><Link to='https://github.com/bugraakin34/hacker-news' target='_blank'>Hacker News</Link></li>
            <li className='pr'><Link to='https://github.com/bugraakin34/cocktails' target='_blank'>Cocktails</Link></li>

          </ul>
        </div>



        <div className='projects'>
          <h1>MY REACT-NATİVE PROJECTS</h1>

          <ul className='pro'>

            <li className='pr'><Link to='https://github.com/bugraakin34/Sinav-Uygulmasi' target='_blank'>Quiz</Link></li>
            <li className='pr'><Link to='https://github.com/bugraakin34/zamanlayici' target='_blank'>Timer</Link></li>
          </ul>
        </div>


        <div className='projects'>
          <h1>MY .NET APİ PROJECTS</h1>

          <ul className='pro'>
            
            <li className='pr'><Link to='https://github.com/bugraakin34/Asp.NetCoreApp-JWT' target='_blank'>JWT Api</Link></li>
          
          </ul>
        </div>

        
      </div>
    
  </div>
  )
}
