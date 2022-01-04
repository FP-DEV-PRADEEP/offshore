import { useState } from "react";
import { React } from "react";
import { useForm } from "react-hook-form";
import { reqHost, reqContact, reqSubscribe, reqBearer } from '../config/Config';
import axios from 'axios';
// googe captcha
import ReCAPTCHA from "react-google-recaptcha";

function Heroform(props) {


      // google captcha function
  const [isCaptchaVerify, CaptchaVerify] = useState(false);
  const [cToken, setCtoken] = useState('');
  function OnCaptcha(value) {
    console.log("Captcha value:", value);
    if (value.length > 1) {
      CaptchaVerify(true);
      showCerror(false);
      setCtoken(value);
    } else {
      CaptchaVerify(false);
      setCtoken('');
      // showCerror(true);
    }
  }

  // validation form
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
    phone: "",
    message: "",
  });
  let nameattr, valueattr;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleInput = (e) => {
    // console.log(e)
    nameattr = e.target.name;
    valueattr = e.target.value;
    setuserdata({ ...userdata, [nameattr]: valueattr })
  }


    //  api targets
    const apiContact = reqHost + reqContact;
    const bearer = reqBearer;
  


  let captchaToken;
  /**
   * Validate Google Captcha Response
   * @param {string} token Google Captche Token
   * @return {boolean}
   */
 
  // api function
  const sendEmail = (formData) => {
    if (isCaptchaVerify) {
      var config = {
        headers: {
          Authorization: "Bearer " + bearer,
          Accept: "appilication/json",
          "Content-Type": "application/json"
        },
        params: userdata
      };
      axios.get(apiContact, config)
        .then((response) => {
          showresult(true);
        })
        .catch((error) => console.table(error));

      reset();
      setTimeout(() => { showresult(false); }, 5000);

    } else {
      showCerror(true);
    }
  }

  // result on form success
  const [result, showresult] = useState(false);
  const Result = () => {
    return <div className="mt-3 alert alert-success" role="alert">
      Thank you for contact us. we will get back to you soon.
    </div>
  }

  // show error
  const [cresult, showCerror] = useState(false);
  const CaptchaError = () => {
    return <span className="alert alert-danger captchaerror">Please verify the captcha</span>
  }






    return <>
        <div className="heroformOuter">
            <div className="heroform">
                <h3><span>Quick</span> Contact Us</h3>
                <form onSubmit={handleSubmit(sendEmail)} >
                    <div className="form-group mb-3">
                        <input {...register("name", { required: "Name is Required", minLength: { value: 3 } })}
                            type="text"
                            value={userdata.name}
                            onChange={handleInput}
                            className="form-control" name="name" placeholder="Your name" />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                Please fill your full name
                            </div>
                        )}
                    </div>

                    <div className="form-group mb-3">
                        <input {...register("email", {
                            required: "email is Required",
                            pattern: emailPattern
                        })}
                            value={userdata.email} onChange={handleInput} className="form-control" name="email" placeholder="Email" />
                        {errors.email && (
                            <div className="invalid-feedback d-block">
                                Please enter your valid email address
                            </div>
                        )}
                    </div>

                    <div className="form-group mb-3">
                        <input
                            {...register("subject", {
                                required: "email is Required",
                                minLength: { value: 10 }
                            })}
                            value={userdata.subject}
                            onChange={handleInput}
                            type="text" className="form-control"
                            name="subject" placeholder="Subject"
                        />

                        {errors.subject && (
                            <div className="invalid-feedback d-block">
                                Min 10 characters required.
                            </div>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <textarea

                            {...register("message", { required: "message is Required", minLength: { value: 20 } })}
                            value={userdata.message}
                            onChange={handleInput}

                            className="form-control" name="message" placeholder="Message">

                        </textarea>
                        {errors.message && (
                            <div className="invalid-feedback d-block">
                                Min 30 characters required.
                            </div>
                        )}
                    </div>

                    <div className="form-group d-flex justify-content-center">
                        <div className="captcha-box">
                    <ReCAPTCHA
                        // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        sitekey="6LcljdodAAAAALp2dkas2pXKhmBqUaNT579H7iBR"
                        onChange={OnCaptcha}
                      /> 
                      
                      </div>
                      <input type="submit" className="mainBtn border-0 px-4 ms-auto me-0 d-table" value="Send Us" />

                    </div>
                    {cresult ? <CaptchaError /> : null}

                    <div className="form-group mt-3">
                        {result ? <Result /> : null}
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Heroform;