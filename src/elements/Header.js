import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import Button from './Button';
import logo from '../image/logo.svg'
import './Header.css'
import { useState, useEffect } from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, NavItem } from 'react-bootstrap'
import jQuery from 'jquery';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom'

function Header() {
 
    useEffect(() => {
        jQuery('.navbar-collapse a').on('click', function(){
            jQuery('.navbar-collapse').removeClass("show");     
        });
      }, []);

    //  get page name
    const location = useLocation();
    const currentlocation = location.pathname.slice(1)

    return (
        <>
        <Helmet>
           <link rel="canonical" href={`https://itoffshoresolutions.com/${currentlocation}`} />
        </Helmet>

            <header id='header'>
                <div className="topheader">
                    <div className="container d-flex flex-wrap justify-content-between align-items-center">
                        <div className="logo">
                            <NavLink to="/"><img src={logo} className="img-fluid" alt='IT Offshore Solutions' /></NavLink>
                        </div>
                        <div className="topcontact">
                            <ul className="p-0 d-flex flex-wrap justify-content-between">
                                <li>
                                    <a href="tel:+919983333334">
                                        <div className="dtIcon" alt="call">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.35003 5.0999C10.0263 5.0999 10.6749 5.36856 11.1532 5.84678C11.6314 6.325 11.9 6.9736 11.9 7.6499C11.9 7.87534 11.9896 8.09154 12.149 8.25095C12.3084 8.41035 12.5246 8.4999 12.75 8.4999C12.9755 8.4999 13.1917 8.41035 13.3511 8.25095C13.5105 8.09154 13.6 7.87534 13.6 7.6499C13.6 6.52273 13.1523 5.44173 12.3552 4.6447C11.5582 3.84767 10.4772 3.3999 9.35003 3.3999C9.1246 3.3999 8.9084 3.48946 8.74899 3.64886C8.58958 3.80827 8.50003 4.02447 8.50003 4.2499C8.50003 4.47534 8.58958 4.69154 8.74899 4.85094C8.9084 5.01035 9.1246 5.0999 9.35003 5.0999V5.0999Z" fill="#EE334E" />
                                                <path d="M9.35 1.7C10.928 1.7 12.4414 2.32687 13.5573 3.44271C14.6731 4.55856 15.3 6.07196 15.3 7.65C15.3 7.87543 15.3895 8.09163 15.549 8.25104C15.7084 8.41045 15.9246 8.5 16.15 8.5C16.3754 8.5 16.5916 8.41045 16.751 8.25104C16.9104 8.09163 17 7.87543 17 7.65C17 5.62109 16.194 3.67529 14.7594 2.24063C13.3247 0.80598 11.3789 0 9.35 0C9.12456 0 8.90836 0.0895533 8.74896 0.248959C8.58955 0.408365 8.5 0.624566 8.5 0.85C8.5 1.07543 8.58955 1.29163 8.74896 1.45104C8.90836 1.61045 9.12456 1.7 9.35 1.7V1.7ZM16.7875 11.8235C16.7407 11.687 16.66 11.5647 16.553 11.4681C16.4459 11.3714 16.316 11.3036 16.1755 11.271L11.0755 10.1065C10.9371 10.0751 10.793 10.0789 10.6564 10.1175C10.5198 10.1561 10.395 10.2283 10.2935 10.3275C10.1745 10.438 10.166 10.4465 9.6135 11.5005C7.78022 10.6557 6.31124 9.18073 5.474 7.344C6.5535 6.8 6.562 6.8 6.6725 6.6725C6.7717 6.57097 6.8439 6.44622 6.8825 6.30962C6.92111 6.17302 6.92489 6.02893 6.8935 5.8905L5.729 0.85C5.6964 0.709492 5.62858 0.57959 5.53192 0.472525C5.43527 0.365459 5.31295 0.284752 5.1765 0.238C4.978 0.167101 4.77301 0.115855 4.5645 0.0849999C4.34966 0.0351859 4.13043 0.00671444 3.91 0C2.873 0 1.87848 0.411945 1.14521 1.14521C0.411945 1.87848 0 2.873 0 3.91C0.00449813 7.3803 1.38506 10.7072 3.83894 13.1611C6.29282 15.6149 9.6197 16.9955 13.09 17C13.6035 17 14.1119 16.8989 14.5863 16.7024C15.0607 16.5059 15.4917 16.2179 15.8548 15.8548C16.2179 15.4917 16.5059 15.0607 16.7024 14.5863C16.8989 14.1119 17 13.6035 17 13.09C17.0003 12.8737 16.9832 12.6576 16.949 12.444C16.9133 12.2329 16.8592 12.0253 16.7875 11.8235V11.8235Z" fill="#EE334E" />
                                            </svg>
                                        </div>
                                        <p>+91-9983333334</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@itoffshoresolutions.com">
                                        <div className="dtIcon" alt="Mail">
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.38991e-09 3.98533L8.23264 8.295C8.31522 8.33822 8.40692 8.36078 8.5 8.36078C8.59308 8.36078 8.68478 8.33822 8.76736 8.295L17 3.98611V11.4722C17 12.1179 16.7546 12.7391 16.3141 13.2084C15.8735 13.6777 15.2713 13.9596 14.6308 13.9961L14.4886 14H2.51136C1.86989 14 1.25272 13.753 0.786458 13.3096C0.320193 12.8662 0.0401808 12.26 0.00386373 11.6153L5.38991e-09 11.4722V3.98533ZM2.51136 5.42515e-09H14.4886C15.1301 -4.22697e-05 15.7473 0.246986 16.2135 0.690411C16.6798 1.13384 16.9598 1.74004 16.9961 2.38467L17 2.52778V2.67089L8.5 7.11978L5.38991e-09 2.67089V2.52778C-4.19952e-05 1.88212 0.245383 1.26091 0.685928 0.791598C1.12647 0.322285 1.72874 0.0404434 2.36918 0.00388898L2.51136 5.42515e-09H14.4886H2.51136Z" fill="#EE334E" />
                                            </svg>
                                        </div>
                                        <p>contact@itoffshoresolutions.com</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <NavLink className="mainBtn" to="/contact">Get a Quote</NavLink>

                    </div>
                </div>

                <div className=" container">
                    <div className="menuBar d-flex flex-wrap justify-content-between align-items-center">
                        <nav className="navbar navbar-expand-lg p-0">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                                <ul className="d-flex flex-wrap">
                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
                                    </li>

                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" className="nav-link" to="/services" >Services</NavLink>
                                    </li>

                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" className="nav-link" to="/our-clients">Our Clients</NavLink>
                                    </li>
                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" className="nav-link" to="/why-us">Why Us</NavLink>
                                    </li>

                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" className="nav-link" to="/hire-developers">Hire Developer</NavLink>

                                    </li>
                                    <li className="nav-item me-4">
                                        <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>




                            </div>
{/* 
                            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/signup">Signup</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar> */}
                        </nav>
                        <div className="rightIcons">
                            <ul className="d-flex flex-wrap align-items-center">
                                <li>
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open('https://accounts.google.com/ServiceLogin?service=talk&passive=1209600&continue=https://talkgadget.google.com:443/hangouts/_/?hl%3Den%26ht%3D0%26hcb%3D0%26lm1%3D1482921102427%26hs%3D92%26hscid%3D1482921102423039878%26ssc%3DWyIiLDAsbnVsbCxudWxsLG51bGwsW10sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDkyLG51bGwsbnVsbCxudWxsLFsxNDgyOTIxMTAyNDI3XSxudWxsLG51bGwsW10sbnVsbCwiMTQ4MjkyMTEwMjQyMzAzOTg3OCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxudWxsLG51bGwsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxbXSxudWxsLG51bGwsW1siQUl6YVN5RFhOcVNsLXFTalBuRm9nQUhGZFRYUnpMT1VBbUM4LWtjIiwiZFF3NHc5V2dYY1EiLDJdXV0.&hl=en#identifier', 'Hangout', 'height=600,width=800,left=300,top=200');
                                        }}
                                    >
                                        <img alt='hangout' src={window.location.origin + '/img/hangoutIcon.svg'} className="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://api.whatsapp.com/send?phone=919983333334&text=Hello,%20I%20want%20to%20discuss%20my%20project.%20Please%20schedule%20a%20metting.' target="_blank">
                                        <img alt='whatsapp' src={window.location.origin + '/img/whatsappIcon.svg'} className="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='skype:vishal.soolanki?chat' target="_blank">
                                        <img alt='skype' src={window.location.origin + '/img/skypeIcon.svg'} className="img-fluid" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
