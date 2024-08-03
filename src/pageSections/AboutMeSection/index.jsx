import './style.css'
import Typewriter from 'typewriter-effect'
import guystandin2 from '../../assests/guy standin (2).jpg'

export const AboutMeSection= () =>{
    return(
        <section id='aboutme' data-aos="fade-out-up">
          <img  
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          src={guystandin2} alt='electric'/>
          <div  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1100" className='Discription'>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter)=>{
            typewriter
              .pauseFor(4000)
              .typeString('გამარჯობა! ')
              .pauseFor(900)
              .typeString(' მე ვარ თენგიზ გელაშვილი')
              .pauseFor(1100)
              .typeString(' პროფესიონალი ელექტრიკოსი')
              .pauseFor(5000)
              .start()
          }}
        />
          </div>
        </section>
    )
}