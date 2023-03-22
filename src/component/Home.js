import React from 'react'
import Menu from './Menu'

export default function hello() {
  return (
    <div className='picture'>

      <Menu/>

      <div className='main'>

        <h1>Hi I'm Buğrahan Akın</h1>

        <h3>Welcome my web site</h3>

        <div className='projects'>
            <h3 className='lowerHeader'>Programming Languages I Know</h3>
          <ul className='pro'>

            <li className='pr'>HTML</li>
            <li className='pr'>CSS</li>
            <li className='pr'>JAVASCRİPT</li>
            <li className='pr'>C</li>
            <li className='pr'>C#</li>
            <li className='pr'>JAVA</li>
            <li className='pr'>MySQL</li>
            <li className='pr'>R</li>


          </ul>
        </div>

        <div className='projects'>
            <h3 className='lowerHeader'>JavaScript Libraries I Know</h3>
          <ul className='pro'>

            <li className='pr'>React.js</li>
            <li className='pr'>React-Native</li>
            <li className='pr'>Redux</li>

          </ul>
        </div>
        
        
      </div>
    </div>  
  )
}
