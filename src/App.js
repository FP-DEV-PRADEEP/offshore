import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

// pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Header from './elements/Header';
import Footer from './elements/Footer';
import Whyus from './Pages/Whyus';

// detail page
import Ourclient from './Pages/Ourclient';
import Clientdetail from './Pages/Clientdetail';
import Preload from './elements/Preload';
import Privacypolicy from './Pages/Privacypolicy';
import Terms from './Pages/Terms';
import { useState, useEffect } from "react";

//  helmet js
import { Helmet } from 'react-helmet';
import Scroll from './elements/Scroll';
import Hireus from './Pages/Hireus';
import Notfound from './Pages/Notfound';
import Freetrial from './Pages/Freetrial';

function App() {

    // preloader
    const [preload, setpreload] = useState(true);
    setTimeout(function () {
        setpreload(false);
    }, 1500); // <-- time in milliseconds

    // chnage btn
     const [ chnagename, setchnagename] = useState(false);

    return (
        <div className="App"   >
            <Helmet>
                <title>Offshore</title>
                <meta name="title" content="Leading Offshore IT Staffing Company In India | IT Offshore Solutions" />
                <meta name="description" content="We are a top IT outsourcing & software development company as we have served thousands of satisfied clients from all over the globe in various spectrums successfully.We are a Full-Service Software Development Leading Offshore IT Staffing Company In India. Offers Complete Web Development, IoT Services, Online IT Services, AR/VR Services and also provides Mobile App Development, at affordable prices. Talk to us now on +91-9983333334" />
                <meta property="description" content="We are a top IT outsourcing & software development company as we have served thousands of satisfied clients from all over the globe in various spectrums successfully.We are a Full-Service Software Development Leading Offshore IT Staffing Company In India. Offers Complete Web Development, IoT Services, Online IT Services, AR/VR Services and also provides Mobile App Development, at affordable prices. Talk to us now on +91-9983333334" />
            </Helmet>
            {preload
                ? <Preload />
                : <Router>
                    <Header />
                    {/* switch cases */}
                    <Scroll >
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/why-us">
                                <Whyus />
                            </Route>
                            <Route path="/services">
                                <Service />
                            </Route>
                            <Route exact path="/our-clients">
                                <Ourclient />
                            </Route>
                            <Route path="/our-clients/:clientid">
                                <Clientdetail />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/privacy-policy">
                                <Privacypolicy />
                            </Route>
                            <Route path="/terms-and-condition">
                                <Terms />
                            </Route>
                            <Route path="/hire-developers">
                                <Hireus />
                            </Route>
                            <Route path="/risk-free-trial">
                                <Freetrial />
                            </Route>
                            <Route path="*">
                                <Notfound />
                            </Route>
                            <Route>
                                <Notfound />
                            </Route>
                        </Switch>
                    </Scroll>
                    {/* footer */}
                    <Footer />
                </Router>
            }
        </div>
    );
}
export default App;
 