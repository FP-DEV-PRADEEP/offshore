import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
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
import { useState } from 'react';
import Preload from './elements/Preload';
import Privacypolicy from './Pages/Privacypolicy';
import Terms from './Pages/Terms';
 

function App() {
    // preloader
    const [preload, setpreload] = useState(true);
    setTimeout(function () {
        setpreload(false);
    }, 1500); // <-- time in milliseconds

    
    return (
        <div className="App"   >
            {preload ? <Preload /> :
                <Router>
                    <Header />
                    {/* switch cases */}
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
                    </Switch>
                    {/* footer */}
                    <Footer />
                </Router>
            }
        </div>
    );
}
export default App;
