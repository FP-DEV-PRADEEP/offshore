import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
function Notfound() {
    return <>
        <div className="notfound py-padding overflow-hidden px-4" >
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <NavLink className="gohome m-auto d-table" to="/our-clients"><i class="icon-home"></i> Go back to Home page.</NavLink>
        </div>
    </>

}
export default Notfound;
