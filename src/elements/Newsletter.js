import { useState } from "react";
import { React } from "react";
import { useForm } from "react-hook-form";
import './Newsletter.css'
import { reqHost, reqSubscribe, reqBearer } from '../config/Config';
import axios from 'axios';
import LazyLoad from "react-lazyload";




function Newsletter(props) {
    const Result = () => {
        return <div className="mt-3 alert alert-success" role="alert">
            Thank you for subscribe. we will get back to you soon.
        </div>
    }
    const [result, showresult] = useState(false);

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
    let emailPattern = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/;

    const handleInput = (e) => {
        nameattr = e.target.name;
        valueattr = e.target.value;
        setuserdata({ ...userdata, [nameattr]: valueattr })
    }

    const apiSubscribe = reqHost + reqSubscribe;
    const bearer = reqBearer;

    const subscribe = (formData) => {
        var config = {
            headers: {
                Authorization: "Bearer " + bearer,
                Accept: "appilication/json",
                "Content-Type": "application/json"
            },
            params: userdata
        };
        axios.get(apiSubscribe, config)
            .then((response) => {
                showresult(true);
            })
            .catch((error) => console.table(error));
        reset();
        setTimeout(() => { showresult(false); }, 50000);
    };

    return (
        <>
            {/* subscribe */}
            <div className="subscribe py-padding">
                <LazyLoad once>
                    <img alt="img" src={window.location.origin + '/img/newsletterbg.svg'} className="bg-img rightbottom img-fluid m-auto d-table" />
                </LazyLoad>
                <div className="container">
                    <div className="sec-title newsinner">
                        <h2>Subscribe</h2>
                        <h3>Our clients describe us as a product team which creates amazing Projects</h3>
                        <p>Submit your email address and subscribe to our newsletter to be on the up and up.</p>
                        <form onSubmit={handleSubmit(subscribe)}>
                            <div className="newsletterbar">
                                <div className="inputBar mt-3 mb-1 mb-lg-1">
                                    <input
                                        {...register("email", { required: true, pattern: emailPattern })}
                                        name="email" type="email" placeholder="name@gmail.com" className="form-control"
                                        onChange={handleInput}
                                    />
                                    <LazyLoad once>
                                        <img alt="pen" src={window.location.origin + '/img/pen.svg'} className="img-fluid m-auto d-table" />
                                    </LazyLoad>
                                </div>
                                {errors.email && (
                                    <div className="invalid-feedback d-block mb-3">
                                        Please enter your valid email address
                                    </div>
                                )}

                                <button className="mainBtn border-0 mt-4">Subscribe</button>
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

