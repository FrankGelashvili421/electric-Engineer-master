import './style.css'
import guyStanding3 from '../../assests/guy standin (3).jpg'

export const WelcomeSection = () =>{
    return(
        <section className='WelcomeSection' data-aos="fade-zoom-in"
        data-aos-offset="0">
            <img src={guyStanding3} alt='electric'/>
            <div className='Welcome'>
                <h1>იცხოვრე მშვიდად!</h1>
                <h4>როდესაც იცი რომ ელექტროობა სანდო ხელშია</h4>
                <h5>ჩემთან ელექტროობა უმაღლესი ხარისხია</h5>
            </div>
        </section>
    )
}