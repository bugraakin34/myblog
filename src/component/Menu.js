import React from 'react'
import './menu.css';

export default function Menu() {
  return (
    <div className='Container'>

      <div className='menu'>
        <h1>BUGRAHAN AKIN</h1>

        <img src="myPhoto.jpg" className='img'/>

        <h3>Front-End Developer</h3>

        <ul className='social'>
          <li>        
            <h5><a href="https://www.instagram.com/akinbugra25/" target="_blank"><i className="fa-brands fa-instagram"></i> akinbugra25</a></h5>
          </li>

          <li>
            <h5> <a href="https://www.linkedin.com/in/bugraakin/" target="_blank"><i className="fa-brands fa-linkedin"></i> bugraakin</a></h5>
          </li>

          <li>
            <h5><a href="https://github.com/bugraakin34" target="_blank"><i className="fa-brands fa-github"></i> bugraakin34</a></h5>
          </li>

          <li>
            <h5><a href="https://vsco.co/akinbugra/gallery" target="_blank"><i><img src="vsco.png" style={{width:'14px'}}/></i> bugraakin34</a></h5>
          </li>
        </ul>
        
      </div>
      
    </div>
  )
}
