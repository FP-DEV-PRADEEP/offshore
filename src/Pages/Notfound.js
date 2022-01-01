import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
function Notfound() {
    return <>
        <div className="notfound py-padding overflow-hidden px-4" >
        <div className="container" >
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <NavLink to="/"><i class="icon-home"></i>Back to Home</NavLink>
        </div>
        </div>
    </>

}
export default Notfound;
