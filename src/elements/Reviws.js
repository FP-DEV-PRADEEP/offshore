export default function Reviws() {
    return <>
        <div className="reviews pt-md-5 pt-sm-4 pb-md-5 pt-sm-4 " >
            <div className="container" >
                <div className="sec-title text-center">
                    <h1>Award-<span>Winning</span> Outsourcing IT Company</h1>
                    <p>We are proud to showcase our awards and accolades in the IT industry for software development.</p>
                </div>
                <div className="reviwsBoxes">
                    <div className="reviwBoc">
                        <a href="https://goo.gl/maps/pD7UUtACV1u1nRkL8" target="_blank" >
                            <img src={window.location.origin + '/img/digital-marketing-team-google.png'} alt="itOffshoreSolutions" className="img-fluid" />
                        </a>
                    </div>
                    <div className="reviwBoc">
                        <a href="https://www.crowdreviews.com/it-offshore-solutions" target="_blank" >
                            <img src={window.location.origin + '/img/digital-marketing-team-crowdreviews.jpg'} alt="itOffshoreSolutions" className="img-fluid" />
                        </a>
                    </div>
                    <div className="reviwBoc">
                        <a href="https://www.semfirms.com/profile/it-offshore-solutions/" target="_blank" >
                            <img src={window.location.origin + '/img/top-digital-marketing-companies.svg'} alt="itOffshoreSolutions" className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}