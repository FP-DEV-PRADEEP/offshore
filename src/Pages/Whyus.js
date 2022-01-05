import Feature from "../elements/Feature";
import Pagecaption from "../elements/Pagecaption";
//  helmet js
import { Helmet } from 'react-helmet';



function Whyus() {
    return <>

        <Helmet>
            <title>Best Staffing Company India | IT Offshore Solutions</title>
            <meta name="title" content="Best Staffing Company India |  IT Offshore Solutions" />
            <meta name="description" content="We Are an Award Winning Software and Web Design and Development Company in India with Expertise in All Services. Which Helps Your Business in Developing Websites. Quick Contact Us info@futureprofilez.com" />
        </Helmet>

        <Pagecaption subtitle={"WHY US"} pagetitle={"Best Offshore IT Staffing Agency"} />
        {/* our features */}
        <div className="ourfeatures py-padding">
            <div className="container">
                <p className="runningtext">Most established businesses reach the pinnacle of their industry by using the highly cost-effective IT expertise of an offshore company while they focus on their core, and that’s where the assistance of a highly proficient offshore IT staffing agency can prove to be a masterstroke. Here’s what you get from acquiring our globally acclaimed OIS solutions:</p>
                {/* features box */}
                <div className="featureslist mt-4 mt-md-5 pt-2">
                    {/* feature box */}
                    <Feature
                        featureimg={"./img/feature-1.png"}
                        featureTitle={"Remain Profitable"}
                        featuredes={"The most profitable ventures today prefer to work “smarter” rather than “harder: and outsourcing their IT projects to a reputable agency is a major part of that innovative approach. You can also take the savvy route and adopt offshore staffing which, in addition to being a highly cost-effective practice, allows you to elevate your level of productivity."}
                    />

                    {/* feature box */}
                    <Feature
                        featureimg='./img/feature-2.png'
                        featureTitle='Stay Ahead Of The Competition'
                        featuredes='An experienced offshore IT staff will always be well-versed with the latest and greatest tools & technology. They conduct thorough industry research and help deal with various custom web & software applications requirements of your patrons, hence always keeping you one step ahead of the competition.'
                    />


                    {/* feature box */}
                    <Feature
                        featureimg='./img/feature-3.png'
                        featureTitle='Lets You Focus On Your Core'
                        featuredes='Why deal with highly complex web projects on your own when you can instead use the expertise of a world-class offshore IT staff? Not only will that ensure a timely project deployment with 100% satisfaction rate, but also afford you the time to focus on your core business.  Use their highly-acclaimed global marketing to tap into new market spheres.'
                    />

                    {/* feature box */}
                    <Feature
                        featureimg='./img/feature-4.png'
                        featureTitle='Elevate Your Brand Image'
                        featuredes='Retaining an offshore IT staff is obviously cost-friendly, but that’s not all. Their technical skills & renowned IT acumen lets you acquire custom web & software development projects varying degrees of complexity. With certified experts delivering A-grade projects, your online brand reputation is bound to soar.'
                    />

                </div>
            </div>
        </div>

    </>
}
export default Whyus;
