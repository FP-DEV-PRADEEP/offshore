import Hiredev from "../elements/Hiredev";
import Newsletter from "../elements/Newsletter";
import Pagecaption from "../elements/Pagecaption";
import { Link } from 'react-router-dom';
import './Ourclient.css'
import ClientsData from './Clientsdata';

function Ourclient() {
    const clients = ClientsData.map(cleints => {
        return (

            <div className="col-lg-4 col-sm-6 mb-4" key={cleints.sitename}>
                <div className="clientbox">
                    <div className="clientslogo">
                        <img src={cleints.clientlogo}  alt="" />
                    </div>
                    <p>{cleints.description}</p>
                    <Link
                        to={`/our-clients/${cleints.sitename}`}
                        className="readmoreclint mainBtn border-btn mt-4"
                    >Read More</Link>
                </div>
            </div>

        );
    });

    return (
        <>
            <Pagecaption subtitle="Our Client" pagetitle="All Hi5 clients are 100% satisfied" />


            <div className="py-padding">
                <div className="container">
                    <div className="row">
                        {clients}
                    </div>
                </div>
            </div>

            <Hiredev />
            <Newsletter />
        </>
    );
}
export default Ourclient;
