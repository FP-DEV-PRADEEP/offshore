import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
//  get page name
function Pagecaption(props) {
const location = useLocation();
const currentlocation = location.pathname.slice(1)

    return <>
        <div className={`innerbanner position-relative ${props.addiclass}`}  >
        <img src={'../img/innerbg.svg'} class="img-fluid bg-img rightbottom" alt="image" />
            <div className="container">
                <div className="sec-title">
                    <h2>{props.subtitle}</h2>
                    <h3>{props.pagetitle}</h3>
                </div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{currentlocation}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </>
}

export default Pagecaption;