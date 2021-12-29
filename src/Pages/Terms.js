import Pagecaption from "../elements/Pagecaption";
import Newsletter from "../elements/Newsletter";
//  helmet js
import { Helmet } from 'react-helmet';


function Terms() {
  return <>
    <Helmet>
      <title>Terms & Condition - Offshore</title>
    </Helmet>
    <Pagecaption subtitle="Terms & Condition" pagetitle="Terms & Condition" />
    <div className="py-padding">
      <div className="container">
        <h5>Terms & Condition</h5>
      </div>
    </div>

    <Newsletter />
  </>
}
export default Terms;
