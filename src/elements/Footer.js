import logofooter from '../image/logo-footer.svg';
import './Footer.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
  
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footerinner d-flex  flex-wrap justify-content-between">
                    <div className="footer-contact">
                            <h3>Get In Touch</h3>

                            <div className="footercontact">
                                <ul>
                                    <li>
                                        <a href="tel:+919983333334">
                                            <div class="fooCircle">
                                                <img src={window.location.origin + '/img/callicon.svg'} class="img-fluid" />
                                            </div>
                                            <p>+91-9983333334</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@futureprofilez.com">
                                            <div class="fooCircle">
                                                <img src={window.location.origin + '/img/mailicon.svg'} class="img-fluid" />
                                            </div>
                                            <p>info@futureprofilez.com</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                      
                        <div className="footer-des">
                            <img src={logofooter} class="img-fluid mb-3" alt="" />
                            <p>A OffShore stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst.</p>
                            <ul class="d-flex flex-wrap justify-content-center align-items-center mt-4">
                                <li>
                                    <a href="#"
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        window.open('https://accounts.google.com/ServiceLogin?service=talk&passive=1209600&continue=https://talkgadget.google.com:443/hangouts/_/?hl%3Den%26ht%3D0%26hcb%3D0%26lm1%3D1482921102427%26hs%3D92%26hscid%3D1482921102423039878%26ssc%3DWyIiLDAsbnVsbCxudWxsLG51bGwsW10sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDkyLG51bGwsbnVsbCxudWxsLFsxNDgyOTIxMTAyNDI3XSxudWxsLG51bGwsW10sbnVsbCwiMTQ4MjkyMTEwMjQyMzAzOTg3OCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxudWxsLG51bGwsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxbXSxudWxsLG51bGwsW1siQUl6YVN5RFhOcVNsLXFTalBuRm9nQUhGZFRYUnpMT1VBbUM4LWtjIiwiZFF3NHc5V2dYY1EiLDJdXV0.&hl=en#identifier', 'Hangout', 'height=600,width=800,left=300,top=200');
                                    }}
                                    >
                                        <img src={window.location.origin + '/img/hangoutIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://api.whatsapp.com/send?phone=919983333334&text=Hello,%20I%20want%20to%20discuss%20my%20project.%20Please%20schedule%20a%20metting.' target="_blank">
                                        <img src={window.location.origin + '/img/whatsappIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='skype:vishal.soolanki?chat' target="_blank">
                                        <img src={window.location.origin + '/img/skypeIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                            </ul>

                        </div>
                        {/* <div className="footer-links">
                            <h3>PRODUCT</h3>
                            <ul>
                                <li><a href="javascript:void(0)">Discover features</a></li>
                                <li><a href="javascript:void(0)">CMS integration</a></li>
                                <li><a href="javascript:void(0)">Customers</a></li>
                                <li><a href="javascript:void(0)">Weekly sessions</a></li>
                                <li><a href="javascript:void(0)">Free trials</a></li>
                                <li><a href="javascript:void(0)">What's next ?</a></li>
                            </ul>
                        </div> */}
                        <div className="footer-links">
                            <h3>COMPANY</h3>
                            <ul>
                                        <li><NavLink  to="/services">Our Services</NavLink></li>
                                        <li><NavLink  to="/why-us">Why Us</NavLink></li>
                                        <li><NavLink  to="/our-clients">Our Clients</NavLink></li>
                                        {/* <li><NavLink  to="/privacy-policy">Privacy Policy</NavLink></li> */}
                                        {/* <li><NavLink  to="/terms-and-condition">Terms of website</NavLink></li> */}
                                    </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
            <div class="copyright">
                <div className="container">
                    <p>© 2021, All Rights Reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
