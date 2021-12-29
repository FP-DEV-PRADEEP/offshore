import { useState } from "react";
import { React } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import './Newsletter.css'
import {reqHost, reqSubscribe, reqBearer} from '../config/Config';

function Newsletter(props) {
    const Result = () => {
        return <div className="mt-3 alert alert-success" role="alert">
            Thank you for subscribe. we will get back to you soon.
        </div>
    }
    const [result, showresult] = useState(false);

    // email js
    // send email js function
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: { yes_i_understand: false }
    });

    // ========= get data function =========
    const [userdata, setuserdata] = useState({
        email: "",
    });
    let nameattr, valueattr;
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const handleInput = (e) => {
        // console.log(e)
        nameattr = e.target.name;
        valueattr = e.target.value;
        setuserdata({ ...userdata, [nameattr]: valueattr })
    }

    const apiSubscribe = reqHost + reqSubscribe;
    const bearer = reqBearer;

    const subscribe = (formData) => {
        var host = apiSubscribe;
        var reqData = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+bearer,
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userdata.email
            })
        };
        fetch(host, reqData)
            .then(response => response.json())
            .then(data => {
                showresult(true);
                // console.table(data);
            })
            .catch(error => {
                showresult(false);
                // console.table(error);
            });
        reset();
        setTimeout(()=>{showresult(false);}, 50000);
    };
    
    return (
        <>
            {/* subscribe */}
            <div className="subscribe py-padding">
                <img alt="img" src={window.location.origin + '/img/newsletterbg.svg'} className="bg-img rightbottom img-fluid m-auto d-table" />

                <div className="container">
                    <div className="sec-title newsinner">
                        <h2>Subscribe</h2>
                        <h3>Our clients describe us as a product team which creates amazing Projects</h3>
                        <p>Submit your email address and subscribe to our newsletter to be on the up and up.</p>
                        <form onSubmit={handleSubmit(subscribe)}>
                            <div className="newsletterbar">
                                <div className="inputBar mt-3 mb-4 mb-lg-5">
                                    <input 
                                    {...register("email", { required: true, pattern:emailPattern })}
                                    name="email" type="email" placeholder="name@gmail.com" className="form-control"
                                    onChange={handleInput}
                                    />
                                    <img src={window.location.origin + '/img/pen.svg'} className="img-fluid m-auto d-table" />
                                </div>
                                {errors.email && (
                                    <div className="invalid-feedback d-block mb-3">
                                    Please enter your valid email address
                                    </div>
                                )}
                                
                                <button className="mainBtn border-0">Subscribe</button>
                                <div className="form-group">
                                    {result ? <Result /> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter

