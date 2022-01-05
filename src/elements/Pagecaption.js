import { useState } from 'react';
import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

//  get page name
function Pagecaption(props) {
    const location = useLocation();
    const currentlocation = location.pathname.slice(1)
    const parent = props.hasOwnProperty('parent') ? props.parent : false;

    const pageurl = props.parent;
    const detailpage = props.detailpage;

    return <>
        <div className={`innerbanner position-relative ${props.addiclass}`}  >
            <img src={'../img/innerbg.svg'} className="img-fluid bg-img rightbottom" alt="image" />
            <div className="container">
                <div className="sec-title">
                    <h2>{props.subtitle}</h2>
                    <h1>{props.pagetitle}</h1>
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            pageurl ?
                                <>
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/our-clients">Our Clients</Link></li>
                                    <li className="breadcrumb-item active">{detailpage}</li>
                                </>
                                :
                                <>
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{currentlocation}</li>
                                </>
                        }
                    </ol>
                </nav>
            </div>
        </div>
    </>
}

export default Pagecaption;