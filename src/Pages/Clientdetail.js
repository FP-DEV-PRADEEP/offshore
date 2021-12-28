import './Ourclient.css'
import './Detail.css'
import React from "react";
import { useParams } from "react-router-dom";
import Clientsdata from './Clientsdata';
import Pagecaption from "../elements/Pagecaption";
import Button from '../elements/Button';
import { useState } from 'react';

function Clientdetail() {

    const { clientid } = useParams();
    const thisclient = Clientsdata.find((prod) => prod.sitename === clientid);

    
    return <>
        <Pagecaption addiclass={'onlypagination'} subtitle="Our Client" />
        <div className="py-5">
            <div className="container">

                <div className="before change-title">
                    <div className="bimg-left">
                        <img src={thisclient.beforesiteimg} className='img-fluid' alt="images" />
                    </div>
                    <div className="chnages-title">
                        <h2>Before</h2>
                    </div>
                </div>

                <div className="after change-title">
                    <div className="chnages-title">
                        <h2>After</h2>
                    </div>
                    <div className="bimg-left">
                        <img src={thisclient.aftersiteimg} className='img-fluid' alt="images" />
                    </div>
                </div>

                {/* additional info */}
                <div className="additonalinfo">
                    <h3>About the Project</h3>
                    <p>{thisclient.description}</p>
                </div>
                <div className="additonalinfo">
                    <h3>Used Technologies</h3>
                    <ul>
                        {thisclient.technologies}

                    </ul>
                    <Button text='Visit Site' addclass="mt-5" href='#' />
                </div>
            </div>
        </div>
    </>
}
export default Clientdetail;