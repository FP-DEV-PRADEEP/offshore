import { useState } from "react";
import { React } from "react";
import { useForm } from "react-hook-form";

function Heroform(props) {

    // ========= result success message =========
    const Result = () => {
        return <div class="mt-3 alert alert-success" role="alert">
            Your Message has been sent. we will back to you soon.
        </div>
    }
    const [result, showresult] = useState(false);

    // ========= react hook form validation function =========
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
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let nameattr, valueattr;
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const handleInput = (e) => {
        // console.log(e)
        nameattr = e.target.name;
        valueattr = e.target.value;
        setuserdata({ ...userdata, [nameattr]: valueattr })
    }

    // ========= send email =========
    const sendEmail = (formData) => {
        var host = 'http://api.itoffshoresolutions.com/api/email-data';
        var reqData = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJpdiI6Imo3anhyOFlRSm5JVVVDclZxdTF6MkE9PSIsInZhbHVlIjoiK1Z6RmQ1MDJ0MHljSno4bDZRS2FPYUpmOXNuOFMwVEgrWi9HdlhFYUlOQT0iLCJtYWMiOiI4ZWJhZmE5YTRjM2FhNmFhZjI1NTdkNjAxZWU3OTlhMDIxYmJmN2UzMmVmMzQ5MWFlZDhhNjViMjY5ZDZhNTQ4IiwidGFnIjoiIn0=',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userdata.name,
                email: userdata.email,
                subject: userdata.subject,
                message: userdata.message
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
                console.table(error);
            });
        reset();
        

        // setTimeout(() => {
        //     showresult(true);
        // }, 500);
        // setTimeout(() => {
        //     showresult(false);
        // }, 4000);

    }

    return <>
        <div class="heroformOuter">
            <div class="heroform">
                <h3><span>Quick</span> Contact Us</h3>
                <form onSubmit={handleSubmit(sendEmail)} >
                    <div class="form-group mb-3">
                        <input {...register("name", { required: "Name is Required", minLength: { value: 3 } })}
                            type="text"
                            value={userdata.name}
                            onChange={handleInput}
                            class="form-control" name="name" placeholder="Your name" />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                Please fill your full name
                            </div>
                        )}
                    </div>

                    <div class="form-group mb-3">
                        <input {...register("email", {
                            required: "email is Required",
                            pattern: emailPattern
                        })}
                            value={userdata.email} onChange={handleInput} class="form-control" name="email" placeholder="Email" />
                        {errors.email && (
                            <div className="invalid-feedback d-block">
                                Please enter your valid email address
                            </div>
                        )}
                    </div>

                    <div class="form-group mb-3">
                        <input
                            {...register("subject", {
                                required: "email is Required",
                                minLength: { value: 10 }
                            })}
                            value={userdata.subject}
                            onChange={handleInput}
                            type="text" class="form-control"
                            name="subject" placeholder="Subject"
                        />

                        {errors.subject && (
                            <div className="invalid-feedback d-block">
                                Min 10 characters required.
                            </div>
                        )}
                    </div>


                    <div class="form-group mb-3">
                        <textarea

                            {...register("message", { required: "message is Required", minLength: { value: 20 } })}
                            value={userdata.message}
                            onChange={handleInput}

                            class="form-control" name="message" placeholder="Message">

                        </textarea>
                        {errors.message && (
                            <div className="invalid-feedback d-block">
                                Min 30 characters required.
                            </div>
                        )}
                    </div>

                    <div class="form-group">
                        <input type="submit" class="mainBtn border-0 px-5" value="Send Us" />
                    </div>


                    <div className="form-group mt-3">
                        {result ? <Result /> : null}
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Heroform;