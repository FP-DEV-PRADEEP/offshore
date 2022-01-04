import './Ourclient.css'
import './Detail.css'
import React from "react";
import { useParams } from "react-router-dom";
import Clientsdata from './Clientsdata';
import Pagecaption from "../elements/Pagecaption";
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";


//  helmet js
import { Helmet } from 'react-helmet';

function Clientdetail() {

    const { clientid } = useParams();
    const thisclient = Clientsdata.find((prod) => prod.sitename === clientid);
    /**
     * for import all acpects from this client to avoid {thisclient.technologies}
     * @param {string}  thisclient // this clients data
     */

    const { beforesiteimg, aftersiteimg, description, technologies, sitelink, sitename, siteThumbnail, whatWeDid } = thisclient;
   
   
    //   techlology list
    const tech = technologies.map(techno => {
        return (
            <li key={sitename}> {techno} </li>
        );
    });
    // what we did list
    const wedid = whatWeDid.map(wedidi => {
        return (
            <li key={wedidi}>{wedidi}</li>
        );
    });
    const parent = {
        url : '/our-clients',
        name: 'Our Clients'
    };

    return <>

        <Pagecaption  subtitle="Our Client"  pagetitle={sitename} parent={true} detailpage={sitename} />

        <div className="py-4 py-md-5">
            <div className="container">
                <div className="row flex-lg-row-reverse">
                <div className="col-lg-6 ">
                        <div className="site-gal me-0 me-md-4 screen">
                            <LazyLoad once>
                               <img alt="img" src={siteThumbnail} className='img-fluid' alt="images" />
                            </LazyLoad>
                            <a target="_blank" href={sitelink}>
                                <span className='readmoreclint mainBtn'>Visit Site</span>
                            </a>
                        </div> 
                    </div>
                    
                    <div className="col-lg-6">
                        {/* additional info */}
                        <div className="additonalinfo site-des pt-lg-3 pt-4">
                            <h2 className='m-0 pb-2'>{sitename}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="additonalinfo  pt-lg-3 pt-4">
                            <h3>Technology used : </h3>
                            <ul>{tech}</ul>
                        </div>
                        <div className="additonalinfo pt-lg-3 pt-4">
                            <h3>What we did :</h3>
                            <ul>{wedid}</ul>
                        </div>
                        <a target="_blank" className="readmoreclint mainBtn border-btn mt-3 mb-3 mb-lg-0" href={sitelink}>Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Clientdetail;