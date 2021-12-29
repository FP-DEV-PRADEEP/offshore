import Pagecaption from "../elements/Pagecaption";
import Newsletter from "../elements/Newsletter";
//  helmet js
import { Helmet } from 'react-helmet';


function Privacypolicy() {
  return <>
    <Helmet>
      <title>Privacy Policy - Offshore</title>
    </Helmet>

    <Pagecaption subtitle="Privacy Policy" pagetitle="We'd love to hear from you" />

    <div className="py-padding" >
      <div className="container">
        <h5>Privacy Policy</h5>
      </div>
    </div>

    <Newsletter />
  </>
}
export default Privacypolicy;
