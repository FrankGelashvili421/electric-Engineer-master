import './style.css'
import Typewriter from 'typewriter-effect'
import guystandin4 from '../../assests/guy standin (4).jpg'

export const ContactSection = ()=>{
    return(
        <section id='contact' data-aos="fade-out-up">
            <img src={guystandin4} alt='electric'/>
            <div className='Contacts'>
                <div className='typewriter' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <Typewriter 
                        onInit={(typewriter)=>{
                          typewriter
                            .start()
                            .typeString('გსურს დამიკავშირდე?')
                        }}
                    />
                </div>
                <div className='ContactContainer' data-aos="zoom-in-down" data-aos-duration="900">
                    <ul data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="900" className='ContactBox'>
                        <li>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.5C19.67 15.5 18.4 15.28 17.2 14.86C16.77 14.7 16.29 14.82 16 15.16L14.06 17.1C11.26 15.75 8.73 13.23 7.39 10.43L9.34 8.5C9.68 8.15 9.79 7.67 9.63 7.24C9.21 6.04 9 4.77 9 3.5C9 3.22 8.78 3 8.5 3H4C3.72 3 3.5 3.22 3.5 3.5C3.5 12.39 11.11 20 20 20C20.28 20 20.5 19.78 20.5 19.5V15C20.5 14.72 20.28 14.5 20 14.5H18.5C18.22 14.5 18 14.72 18 15C18 15.93 18.07 16.86 18.2 17.79C18.34 18.73 18.52 19.66 18.75 20.57C19.29 19.43 19.93 18.34 20.68 17.29C20.9 16.99 21 16.62 21 16.25V15.5Z"/></svg>
                            <h6>ტელეფონი:</h6>
                            <h6> 421 421 421</h6>
                        </li>
                        <li>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            <h6>ელ ფოსტა:</h6>
                            <h6>NOTaGMAIL@gmail.com</h6>
                        </li>
                        <li>
                            <svg viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>map-marker</title><desc>Created with Sketch.</desc><defs></defs><g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)"><g id="Icons" transform="translate(37.000000, 169.000000)"><g id="map-marker" transform="translate(78.000000, 468.000000)"><g transform="translate(10.000000, 6.000000)"><path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#000000"></path><circle id="Oval" fill="#ffffff" fillRule="nonzero" cx="14" cy="14" r="7"></circle></g></g></g></g></g></g></svg>
                            <h6>ადგილი:</h6>
                            <h6>ჩეხეთი</h6>
                        </li>
                    </ul>
                    <div data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="900"  className="Links">
                        <h3>სოციალური ქსელები:</h3>
                        <div>
                            <ul>
                                <li className="icon">
                                    <a href="https://www.facebook.com/tengizgelashvili19">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="##">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}