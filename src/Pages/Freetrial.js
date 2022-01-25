import Pagecaption from "../elements/Pagecaption";
import './Contact.css'
import Newsletter from "../elements/Newsletter";
import { useState } from "react";
import { React } from "react";
import { useForm } from "react-hook-form";
import { reqHost, reqContact, reqBearer, gCaptchaSecret } from '../config/Config';
import axios from 'axios';
// googe captcha
import ReCAPTCHA from "react-google-recaptcha";
//  helmet js
import { Helmet } from 'react-helmet';

function Freetrial() {

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
    return <span className="alert alert-danger">Please verify the captcha</span>
  }


  return <>
    <Helmet>
      <title>Contact US | Hire Dedicated Web Developers India</title>
      <meta name="title" content="Contact US | Hire Dedicated Web Developers India" />
      <meta name="description" content="Hire Dedicated Developers From India as virtual employees. We provide you best developers for your requirements which are less in cost and complete tasks on time with expertise Web Development, IoT services, Online IT Services, AR/VR Services, PHP Development, Mobile Development, .Net Development" />
    </Helmet>

    {/* <Pagecaption subtitle="Contact Us" pagetitle="We'd love to hear from you" /> */}
    <div className="contact pt-3">
      <div className="container">
        <div className="contactfrom">
          <div className="row">
            <div className="col-lg-5 mb-3 mb-md-0">
              <div className="rightcontact">
                <a href="#">
                  <div className="dIcons location">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="white" />
                    </svg>
                  </div>
                  <div className="dt-link">
                    <h2>Location</h2>
                    <p>D-105 B, Devi Marg, Bani Park,<br></br>
                      Jaipur, Rajasthan, India 302016</p>
                  </div>
                </a>
                <a href="mailto:contact@itoffshoresolutions.com">
                  <div className="dIcons email">
                    <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.3077 5.96762V18.5769C28.3077 19.75 27.8417 20.875 27.0122 21.7045C26.1827 22.534 25.0577 23 23.8846 23H4.42308C3.25 23 2.12498 22.534 1.29549 21.7045C0.466001 20.875 0 19.75 0 18.5769V5.96762L13.7045 14.0318C13.8406 14.1121 13.9958 14.1544 14.1538 14.1544C14.3119 14.1544 14.4671 14.1121 14.6032 14.0318L28.3077 5.96762ZM23.8846 5.47624e-08C24.9729 -0.000171113 26.0231 0.400919 26.8343 1.12654C27.6454 1.85216 28.1606 2.85137 28.2812 3.933L14.1538 12.2431L0.0265386 3.933C0.147126 2.85137 0.662265 1.85216 1.47341 1.12654C2.28455 0.400919 3.33474 -0.000171113 4.42308 5.47624e-08H23.8846Z" fill="white" />
                    </svg>
                  </div>
                  <div className="dt-link">
                    <h2>Email Address</h2>
                    <p>contact@itoffshoresolutions.com</p>
                  </div>
                </a>
                <a href="tel:+919983333334">
                  <div className="dIcons number">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 9C17.6935 9 18.8381 9.4741 19.682 10.318C20.5259 11.1619 21 12.3065 21 13.5C21 13.8978 21.158 14.2794 21.4393 14.5607C21.7206 14.842 22.1022 15 22.5 15C22.8978 15 23.2794 14.842 23.5607 14.5607C23.842 14.2794 24 13.8978 24 13.5C24 11.5109 23.2098 9.60322 21.8033 8.1967C20.3968 6.79018 18.4891 6 16.5 6C16.1022 6 15.7206 6.15804 15.4393 6.43934C15.158 6.72064 15 7.10217 15 7.5C15 7.89782 15.158 8.27935 15.4393 8.56066C15.7206 8.84196 16.1022 9 16.5 9Z" fill="white" />
                      <path d="M16.5 3C19.2848 3 21.9555 4.10625 23.9246 6.07538C25.8937 8.04451 27 10.7152 27 13.5C27 13.8978 27.158 14.2794 27.4393 14.5607C27.7206 14.842 28.1022 15 28.5 15C28.8978 15 29.2794 14.842 29.5607 14.5607C29.842 14.2794 30 13.8978 30 13.5C30 9.91958 28.5777 6.4858 26.0459 3.95406C23.5142 1.42232 20.0804 0 16.5 0C16.1022 0 15.7206 0.158035 15.4393 0.43934C15.158 0.720644 15 1.10218 15 1.5C15 1.89782 15.158 2.27936 15.4393 2.56066C15.7206 2.84196 16.1022 3 16.5 3ZM29.625 20.865C29.5425 20.6242 29.4001 20.4083 29.2111 20.2378C29.0222 20.0672 28.793 19.9475 28.545 19.89L19.545 17.835C19.3007 17.7796 19.0464 17.7863 18.8054 17.8544C18.5643 17.9225 18.3442 18.0499 18.165 18.225C17.955 18.42 17.94 18.435 16.965 20.295C13.7298 18.8042 11.1375 16.2013 9.66 12.96C11.565 12 11.58 12 11.775 11.775C11.9501 11.5958 12.0775 11.3757 12.1456 11.1346C12.2137 10.8936 12.2204 10.6393 12.165 10.395L10.11 1.5C10.0525 1.25204 9.93279 1.02281 9.76221 0.833867C9.59165 0.644928 9.3758 0.502503 9.135 0.42C8.7847 0.294884 8.42297 0.204451 8.055 0.15C7.67588 0.0620928 7.289 0.011849 6.9 0C5.07001 0 3.31496 0.726962 2.02096 2.02096C0.726962 3.31496 0 5.07001 0 6.9C0.00793788 13.0241 2.44423 18.895 6.7746 23.2254C11.105 27.5558 16.9759 29.9921 23.1 30C24.0061 30 24.9034 29.8215 25.7405 29.4748C26.5777 29.128 27.3383 28.6198 27.979 27.979C28.6198 27.3383 29.128 26.5777 29.4748 25.7405C29.8215 24.9034 30 24.0061 30 23.1C30.0005 22.7182 29.9704 22.337 29.91 21.96C29.847 21.5874 29.7516 21.221 29.625 20.865Z" fill="white" />
                    </svg>
                  </div>
                  <div className="dt-link">
                    <h2>Phone Number</h2>
                    <p>+91-9983333334</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="form-right">
                <h3>Write Us</h3>
                <form onSubmit={handleSubmit(sendEmail)} >
                  <div className="from-group mb-3">
                    <input
                      {...register("name", { required: true })}
                      onChange={handleInput}
                      name="name" type="text" className="form-control" placeholder="Your name" />
                    {errors.name && (
                      <div className="invalid-feedback d-block">
                        Please fill your Full Name
                      </div>
                    )}
                  </div>
                  <div className="from-group mb-3">
                    <input
                      {...register("phone", { required: true, maxLength: 10, minLength: 10 })}
                      onChange={handleInput}
                      name="phone" type="tel" className="form-control" placeholder="Phone Number" />
                    {errors.phone && (
                      <div className="invalid-feedback d-block mb-3">
                        Please enter your valid phone number
                      </div>
                    )}
                  </div>

                  <div className="from-group mb-3">
                    <input
                      {...register("email", { required: true, pattern: emailPattern })}
                      onChange={handleInput}
                      name="email" type="text" className="form-control" placeholder="Email" />
                    {errors.email && (
                      <div className="invalid-feedback d-block mb-3">
                        Please enter your valid email address
                      </div>
                    )}
                  </div>

                  <div className="from-group mb-3">
                    <textarea
                      {...register("message", { required: true, minLength: { value: 20 } })}
                      onChange={handleInput}
                      name="message" className="form-control" placeholder="Message" />
                    {errors.message && (
                      <div className="invalid-feedback d-block">
                        Min 30 characters required.
                      </div>
                    )}
                  </div>
                  <div className="from-group d-flex flex-wrap align-items-center justify-content-between">
                    <div className="captcha-box me-2">
                      <ReCAPTCHA  
                        // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                         sitekey="6LcljdodAAAAALp2dkas2pXKhmBqUaNT579H7iBR"
                        onChange={OnCaptcha}
                      />
                      {cresult ? <CaptchaError /> : null}
                    </div>
                    <button className="mainBtn border-0 px-5 m-auto d-table ms-lg-auto me-auto me-md-0 " 
                    type="submit"   >Start Free Trial</button>
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
export default Freetrial;
