import Pagecaption from "../elements/Pagecaption";
import Newsletter from "../elements/Newsletter";
//  helmet js
import { Helmet } from 'react-helmet';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { reqHost, reqHireDev, reqBearer } from '../config/Config';
import axios from 'axios';
function Hireus() {
    const Result = () => {
        return <div className="mt-3 alert alert-success" role="alert">
            Thank you for contact us. we will get back to you soon.
        </div>
    }
    const [result, showresult] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: { yes_i_understand: false }
    });
    const apiContact = reqHost + reqHireDev;
    const bearer = reqBearer;

    // ========= get data function =========
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        post: "",
        type: "",
        details: ""
    });

    let nameattr, valueattr;
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleInput = (e) => {
        // console.log(e)
        nameattr = e.target.name;
        valueattr = e.target.value;
        setuserdata({ ...userdata, [nameattr]: valueattr })
        // 
        console.log(userdata);
    }
    const sendEmail = (formData) => {
        var config = {
            headers: {
                Authorization: "Bearer " + bearer,
                Accept: "appilication/json",
                "Content-Type": "application/json"
            },
            params: userdata
        };
        // console.table(reqData);
        // axios.get(apiContact, userdata, {headers})
        axios.get(apiContact, config)
            .then((response) => {
                showresult(true);
                console.table(response.data);
            })
            // .then((data) => console.table(data))
            .catch((error) => {
                console.log(error.response.data.message);
                console.table(error.response.data.errors);
            });
        reset();
        setTimeout(() => { showresult(false); }, 5000);
    }

    return <>
        <Helmet>
            <title>Hire Developer</title>
        </Helmet>
        <Pagecaption subtitle="Hire Dedicated UI/UX Designers & Developer and SEO Experts" pagetitle="Hire Developer" />
        <div className="contact hire-devs pt-3">
            <div className="container">
                <div className="contactfrom">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-right">
                                <h3 className="text-center mb-0 mt-3 mt-lg-0 mb-md-3">Hire Developer Form</h3>
                                <form onSubmit={handleSubmit(sendEmail)} >
                                    <div className="row" >
                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">
                                                <input {...register("name", { required: true })} onChange={handleInput}
                                                    name="name" type="text" className="form-control" placeholder="Your name" />
                                                {errors.name && (
                                                    <div className="invalid-feedback d-block">Please fill your Full Name</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">
                                                <input {...register("email", { required: true, pattern: emailPattern })}
                                                    onChange={handleInput} name="email" type="text" className="form-control" placeholder="Email" />
                                                {errors.email && (
                                                    <div className="invalid-feedback d-block mb-3">
                                                        Please enter your valid email address
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">
                                                <input {...register("company", { required: true })} onChange={handleInput}
                                                    name="company" type="text" className="form-control" placeholder="Company name" />
                                                {errors.company && (
                                                    <div className="invalid-feedback d-block">Please Enter Company Name</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">
                                                <input
                                                    {...register("phone", { required: true, maxLength: 14, minLength: 8 })}
                                                    onChange={handleInput}
                                                    name="phone" type="tel" className="form-control" placeholder="Phone Number" />
                                                {errors.phone && (
                                                    <div className="invalid-feedback d-block mb-3">
                                                        Please enter your valid phone number
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">

                                                <select 
                                                    {...register("post", { required: true })} onChange={handleInput}
                                                     className="form-control" >
                                                    <option value=""  >Select Category</option>
                                                    <option value="Select Category">Select Category</option>
                                                    <option value="hire-seo-expert"> Hire SEO Expert From India</option>
                                                    <option value="hire-mobile-developer"> Hire Mobile App Developer</option>
                                                    <option value="hire-yii-developer"> Hire Expert YII Developer From india</option>
                                                    <option value="hire-cms-web-developer"> Hire CMS Web Developer</option>
                                                    <option value="hire-front-end-developer"> Hire Front End Developer</option>
                                                    <option value="hire-phonegap-developer"> Hire PhoneGap Developer</option>
                                                    <option value="hire-codeigniter-developer"> Hire Expert CodeIgniter Developer India</option>
                                                    <option value="hire-laravel-developer"> Hire Dedicated Laravel Developers from India</option>
                                                    <option value="hire-shopify-developer"> Hire Shopify Developer India</option>
                                                    <option value="hire-graphic-designer"> Hire Graphic Designer</option>
                                                    <option value="hire-web-designers"> Hire Web Designer</option>
                                                    <option value="hire-html-developers"> Hire HTML Developer</option>
                                                    <option value="hire-php-developer"> Hire Dedicated PHP Developer From India</option>
                                                    <option value="hire-cakephp-developer"> Hire CakePHP Developer India</option>
                                                    <option value="hire-magento-developer"> Hire Magento Web Developer India</option>
                                                    <option value="hire-wordpress-developer"> Hire WordPress Developer India</option>
                                                    <option value="hire-joomla-developer"> Hire Joomla Developer</option>
                                                    <option value="hire-drupal-developer"> Hire Drupal Developer</option>
                                                    <option value="hire-iphone-app-developer"> Hire iPhone App Developer</option>
                                                    <option value="hire-android-developer"> Hire Android App Developer</option>
                                                </select> 
                                                {errors.post && (
                                                    <div className="invalid-feedback d-block">
                                                        Please select your Developer Category
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="from-group">
                                                <select
                                                    {...register("type", { required: true })} onChange={handleInput}
                                                    name="type" className="form-control" >
                                                    <option value=""  >Select Category Model</option>
                                                    <option value="Full Time Hiring Model">Full Time Hiring Model</option>
                                                    <option value="Part Time Hiring Model">Part Time Hiring Model</option>
                                                    <option value="Bucket-System-Model">Bucket System Model</option>
                                                </select>
                                                {errors.type && (
                                                    <div className="invalid-feedback d-block">Please Select Category Model</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="from-group">
                                                <textarea placeholder="Project Details" {...register("details", { required: true })}
                                                    onChange={handleInput} className="form-control" name="details">
                                                </textarea>
                                                {errors.details && (
                                                    <div className="invalid-feedback d-block">
                                                        Min 30 characters required.
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="from-group d-flex flex-wrap align-items-center">
                                        <div className="captcha-box"></div>
                                        <button className="mainBtn border-0 px-5  ms-md-auto d-table" type="submit" >Send Us</button>
                                    </div>
                                    <div className="form-group">
                                        {result ? <Result /> : null}
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    </>
}
export default Hireus;
