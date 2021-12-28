import './Feature.css'
function Feature(props) {
    return <>
        <div class="featurebox">
            <div class="feature-img">
                <img src={props.featureimg} class="img-fluid" alt="image" />
            </div>
            <div class="feature-text">
                <h2>{props.featureTitle}</h2>
                <p>{props.featuredes}</p>
            </div>
        </div>
    </>
}
export default Feature;
 