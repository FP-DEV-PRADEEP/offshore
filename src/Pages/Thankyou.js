import { Helmet } from 'react-helmet';
import '../elements/thankyou.css';
export default function Thankyou() {
    return <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet" />
        </Helmet>
        <div class="wrapper-1">
            <div class="wrapper-2 text-center p-5">
                <h1>Thank you !</h1>
                <p>Your Request has been submitted. We will get back to you soon.</p>
                <a href="/" class="go-home" >go home </a>
            </div>
        </div>
    </>
}