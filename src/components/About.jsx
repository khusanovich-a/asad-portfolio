import React, { useEffect } from 'react'
import '/src/styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Snowfall from 'react-snowfall'




const Section = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='main'>
      <div className="texts" 
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration="800">
    <h1 className='main-text'>I’m Asad, creative web <br /> developer and designer.</h1>
    <p className='second-text'>I specialize in rapidly developing and desinging web and mobile <br /> applications. I commit code to <a href="https://github.com/khusanovich-a?tab=repositories">Github</a>.</p>
    </div>
    <Snowfall 
    style={{ wind: 0 }}
    snowflakeCount={100}
        />
    </div>
    
  )
}   

export default Section