import Hiredev from "../elements/Hiredev";
import Newsletter from "../elements/Newsletter";
import Pagecaption from "../elements/Pagecaption";
import { Link } from 'react-router-dom';
import './Ourclient.css'
import ClientsData from './Clientsdata';
//  helmet js
import { Helmet } from 'react-helmet';


function Ourclient() {
    const clients = ClientsData.map(cleints => {
        return (

            <div className="col-lg-4 col-sm-6 mb-4" key={cleints.sitename}>
                <div className="clientbox">
                    <div className="clientslogo">
                    <Link to={`/our-clients/${cleints.sitename}`}> <img src={cleints.clientlogo} alt={cleints.sitename} /></Link>
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
            <Helmet>
                <title>Offshore Software Development Company | Offshore Staffing Company</title>
                <meta name="title" content="Offshore Software Development Company | Offshore Staffing Company" />
                <meta name="description" content="We are an Offshore Software Development Company in india. We have served thousands of Offshore Staffing Company and best IT Offshore Solutions all over the globe for various offshore product development services." />
                <meta name="keywords" content="Offshore Software Development Company, Offshore Software Outsourcing Company, Offshore Software Testing Company, Offshore Staffing Company, Offshore Software Development Company Jaipur, Offshore Staffing Company in India, offshore software development, offshore software development outsourcing company" />
            </Helmet>


            <Pagecaption subtitle="Our Client" pagetitle="All Our Clients Are 100% Satisfied With Our Offshore Resources" />
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
