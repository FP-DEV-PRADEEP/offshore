import Client from "./Clients";
import Heroform from "./Heroform";
import './Hero.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';


function Hero() {
    return <>
        <div className="homeBanner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 sec-title">
                        <h2>Welcome Offshore</h2>
                        <h1>The Leading <span>Offshore IT
                            Staffing</span> Company In India</h1>
                        <p>We provide state-of-the-art outsourcing IT solutions to all scales of businesses at highly competitive prices.</p>
                        <NavLink className="mainBtn border-btn mt-4 mt-md-5" to="/contact">Let’s talk</NavLink>
                    </div>
                    <div className="col-md-6">
                        <Heroform />
                    </div>
                </div>
            </div>
            <div className="container clientslogos">
                <ul>
                    <Client />
                </ul>
            </div>

        </div>
    </>
}
export default Hero;
