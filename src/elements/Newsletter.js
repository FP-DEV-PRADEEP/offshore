import { useState } from "react";
import { React } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import './Newsletter.css'

function Newsletter(props) {
    const Result = () => {
        return <div class="mt-3 alert alert-success" role="alert">
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

    const sendEmail = (formData) => {
        emailjs

            // .send(
            //     'service_jnjzp9n', 'template_pprcpg7',
            //     formData,
            //     'user_itVge450EwlJRH3TFjFlU'
            // )

            .send(
                "service_5qjj256",
                "template_loiw1nh",
                formData,
                "user_9vGftkoNZiOYOvLBTZCvP"
            )


            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        reset();
        setTimeout(() => {
            showresult(true);
        }, 500);

        setTimeout(() => {
            showresult(false);
        }, 4000);
    };
    
    return (
        <>
            {/* subscribe */}
            <div className="subscribe py-padding">
                <img src={window.location.origin + '/img/newsletterbg.svg'} class="bg-img rightbottom img-fluid m-auto d-table" />

                <div className="container">
                    <div className="sec-title newsinner">
                        <h2>Subscribe</h2>
                        <h3>Our clients describe us as a product team which creates amazing Projects</h3>
                        <p>Submit your email address and subscribe to our newsletter to be on the up and up.</p>
                        <form onSubmit={handleSubmit(sendEmail)}>
                            <div className="newsletterbar">
                                <div className="inputBar mt-3 mb-4 mb-lg-5">
                                    <input 
                                    {...register("email", { required: "email is Required", minLength: { value:4 } })}
                                    name="email" type="text" placeholder="mail.name@gmail.com" class="form-control" />
                                    
                          
                        
                                    <img src={window.location.origin + '/img/pen.svg'} class="img-fluid m-auto d-table" />
                                </div>
                                {errors.email && (
                            <div className="invalid-feedback d-block mb-3">
                               Please enter your valid email address
                            </div>
                        )}
                                
                                <button class="mainBtn border-0">Subscribe</button>
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

