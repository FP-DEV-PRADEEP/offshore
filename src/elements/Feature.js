import './Feature.css'
function Feature(props) {
    return <>
        <div className="featurebox">
            <div className="feature-img">
                <img src={props.featureimg} className="img-fluid" alt="image" />
            </div>
            <div className="feature-text">
                <h2>{props.featureTitle}</h2>
                <p>{props.featuredes}</p>
            </div>
        </div>
    </>
}
export default Feature;
 