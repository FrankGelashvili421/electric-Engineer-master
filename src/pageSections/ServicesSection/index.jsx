import './style.css'
import electricCabin from '../../assests/electric Cabin (1).jpg'
import guystandin1 from '../../assests/guy standin (1).jpg'
import smooth3 from '../../assests/smooth 3.jpg'
import smooth2 from '../../assests/smooth 2.jpg'
import smooth from '../../assests/smooth.jpg'

export const ServicesSection = () =>{
    return(
        <section id='services' data-aos="fade-in" data-aos-duration="300">
            <img className='guystandin' src={guystandin1} alt='professionalElectric'/>
            <div className='Services ResponsiveOff'>
                <div className='ServiceReveal 1' data-aos="zoom-out-left" data-aos-duration="600">
                    <img src={electricCabin} alt='electric cabin'/>
                    <h2>ვაწყობ ელექტრო კარადებს პროფესიონალურ დონეზე</h2>
                </div>
                <div className='ServiceReveal 2' data-aos="zoom-out-right" data-aos-duration="600">
                    <h2>ასევე გამყავს ნებისმიერი ზომის კაბელი ნებისმიერ ადგილას</h2>
                    <img src={smooth2} alt='cabels'/>
                </div>
                <div className='ServiceReveal 3' data-aos="zoom-out-left" data-aos-duration="600">
                    <img src={smooth3} alt='cabels'/>
                    <h2>ჩემს ნამუშევარში მუდამ შეხვდებით ლამაზად გაყვანილს</h2>
                </div>
                <div className='ServiceReveal' data-aos="zoom-out-right" data-aos-duration="600">
                    <h2>სუფთად დაცულად და უსაფრთხოდ გაყვანილი კაბელები ჩემი სტილია</h2>
                    <img src={smooth} alt='cabels'/>   
                </div>
            </div>
            <div className='Services ResponsiveON'>
                <div className='ServiceReveal 1' data-aos="fade-out-up" data-aos-duration="600">
                    <img src={electricCabin} alt='electric cabin'/>
                    <h2>ვაწყობ ელექტრო კარადებს პროფესიონალურ დონეზე</h2>
                </div>
                <div className='ServiceReveal 2' data-aos="fade-out-down" data-aos-duration="600">
                    <h2>ასევე გამყავს ნებისმიერი ზომის კაბელი ნებისმიერ ადგილას</h2>
                    <img src={smooth2} alt='cabels'/>
                </div>
                <div className='ServiceReveal 3' data-aos="fade-out-up" data-aos-duration="600">
                    <img src={smooth3} alt='cabels'/>
                    <h2>ჩემს ნამუშევარში მუდამ შეხვდებით ლამაზად გაყვანილს</h2>
                </div>
                <div className='ServiceReveal' data-aos="fade-out-down" data-aos-duration="600">
                    <h2>სუფთად დაცულად და უსაფრთხოდ გაყვანილი კაბელები ჩემი სტილია</h2>
                    <img src={smooth} alt='cabels'/>   
                </div>
            </div>
        </section>
    )
}