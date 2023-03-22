import React from 'react'
import './picture.css';
import Menu from './Menu';

export default function Picture() {
  return (
    <div className='Container'>

      <Menu/>

      <div className='main'>
            
        <h1>MY PICS</h1>

        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/63ef79f0d1ae2e7f66991631/vsco_021723.jpg?w=343.5&dpr=1.25" alt="Yeni 1"/>
                <div class="desc">
                  AUTUMN
                </div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/6081b4ac70a3a277f3000001/vsco6081b4b261529.jpg?w=343.5&dpr=1.25" alt="Yeni 2" width="600" height="400"/>
                <div class="desc">
                    MARMARA SEA
                </div>
            </div>
        </div>
        
        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/604df76a70a3a23935000002/vsco604df7738ecda.jpg?w=343.5&dpr=1.25" alt="Yeni 3" width="600" height="400"/>
                <div class="desc">
                  CLOCK TOWER
                </div>
            </div>
        </div>
        
        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/604df7ec70a3a23935000005/vsco604df7fbd91f4.jpg?w=343.5&dpr=1.25" alt="Yeni 4" width="600" height="400"/>
                <div class="desc">
                  LİON STATUE
                </div>
            </div>
        </div>



        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/6130de4170a3a24889000003/vsco6130de57518f2.jpg?w=343.5&dpr=1.25"alt="Yeni 1"/>
                <div class="desc">
                  WATERFALL
                </div>
            </div>
        </div>


        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/609ff38170a3a20603000001/vsco609ff3857810b.jpg?w=343.5&dpr=1.25" alt="Yeni 2" width="600" height="400"/>
               <div class="desc">
                    RED FLOWER
                </div>
            </div>
        </div>
        
        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/60f8483170a3a213e7000002/vsco60f8485c90d08.jpg?w=343.5&dpr=1.25" alt="Yeni 3" width="600" height="400"/>
                <div class="desc">
                  BEACH
                </div>
            </div>
        </div>
        
        <div class="responsive">
            <div class="gallery">
                    <img src="//im.vsco.co/aws-us-west-2/b2a5f4/118801978/5f25b0cc70a3a2355a000001/vsco5f25b0dfe962f.jpg?w=343.5&dpr=1.25" alt="Yeni 4" width="600" height="400"/>
                <div class="desc">
                    ASOS
                </div>
            </div>
        </div>
        
      </div>
      
    </div>  
  )
}
