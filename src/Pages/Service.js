import Pagecaption from "../elements/Pagecaption";
import Servicebox from "../elements/Servicebox";
//  helmet js
import { Helmet } from 'react-helmet';



function Service() {
  return <>
    <Helmet>
      <title>Hire Dedicated Developers | IT Offshore Solutions India</title>
      <meta name="title" content="Hire Dedicated Developers | IT Offshore Solutions India" />
      <meta name="description" content="Are you looking for an Expert IT Developer From India? We Provide Complete IT Offshore Solutions For Our Clients. Hire Dedicated Developers as Virtual Employees with Expertise in Custom Web Development, Digital Marketing and More at reasonable prices" />
    </Helmet>

    <Pagecaption subtitle={"Services"} pagetitle={"We Are Nothing Like Your Run-Of-The-Mill Outsourcing IT Agency"} />
    <div className="py-padding">
      <div className="container">
        <p className="runningtext">Are you looking for a group of certified IT developers for your next big project? Finding an outsourcing company with the requisite level of knowledge and experience is far from easy. However, our track record will undoubtedly be to your liking, as we bring a whole spectrum of advanced IT solutions under one roof, and offer our professional assistance in the most affordable manner. Here’s a glimpse into our world and the various type of services that we offer to our global clients (from the USA, UK, UAE, Australia, and 25+ countries)</p>
        <div className="serviceslist mt-3 mt-md-0">
          {/* service box */}
          <Servicebox
            img="./img/service-1.png"
            title="Web Development Services"
            description="Being the industry leader for over a decade, our team has 
          collectively launched thousands of websites successfully, 
          ranging from basic web pages to extremely complex business 
          portals for commercially operating eCommerce enterprises. 
          Our UX development team remains in sync with the latest 
          technologies & market trends to bring you an IT experience 
          that focuses on project scalability and affordability. 
          The service list includes:"
            servserial="1"
          >
            <ul>
              <li>Wordpress</li>
              <li>Joomla</li>
              <li>Maganto</li>
              <li>Shopify</li>
              <li>PHP</li>
            </ul>
          </Servicebox>


          {/* service box */}
          <Servicebox
            servserial="2"
            img="./img/service-2.png"
            title="IoT Services"
            description="Harness the power of AI technology to augment your productivity and revenue streams through our meticulously crafted Internet of Things (IoT) based applications. We are well-versed in all the best development frameworks, and use that knowledge to enhance your business’s online status. As with all our services, the aim is to yield maximum ROI through affordability but that doesn’t deter from the project quality. The service list includes:" >
            <ul>
              <li>Third-Party Integration & Device Security</li>
              <li>IoT Cloud Platform & Support</li>
              <li>Voice & Video-Assisted Tech Support</li>
              <li>IoT App Testing & API Integration</li>
              <li>IoT-Based Application Development</li>
              <li>Payment Gateway Integration & Support</li>
              <li>IoT via Amazon & Azure</li>
            </ul>
          </Servicebox>

          {/* service box */}
          <Servicebox
            servserial="3"
            img="./img/service-3.png"
            title="Online IT Solutions"
            description="We use our IT excellence to market your brand to your target audience across all the major online platforms. Now is the time to get noticed on social media and search engines. If you associate with industries incorporating banking, tourism, manufacturing, or any form of entertainment, then you will certainly relish the out-turn of the marketing techniques of an India-based agency at highly cheap costs. The service list includes:" >
            <ul>
              <li>Social Media Marketing</li>
              <li>Paid Promotion</li>
              <li>Google My Business</li>
              <li>SEO/SMO</li>
              <li>Front-end/back-end UX/UI Design</li>
              <li>SMS/Call Advertising</li>
            </ul>
          </Servicebox>


          {/* service box */}
          <Servicebox
            servserial="4"
            img="./img/service-4.png"
            title="Blockchain Development Solutions"
            description="Blockchain technology is no longer a novel concept. in fact, many eCommerce enterprises use the technology to completely overhaul their market practices and the way they complete transactions. Through our expertise, your company can more effectively cache data through distributed networks. You can partner with us and acquire innovative blockchain solutions for your web/mobile applications development. The service list includes:" >
            <ul>
              <li>Cryptocurrency & ICO Development</li>
              <li>Hire BigChain/Etherum App Developer</li>
              <li>Data Security & Blockchain Management</li>
              <li>Blockchain Wallet Deployment</li>
              <li>Private Blockchain Development</li>
              <li>Supply-Chain Management & Growth</li>
            </ul>
          </Servicebox>

          {/* service box */}
          <Servicebox
            servserial="5"
            img="./img/service-5.png"
            title="AR/VR Solutions"
            description="AR/VR is the future of eCommerce shopping. You can most of your customers using the AR/VR-based applications to fulfill a host of tasks, and that’s where our world-class VR App Development Services using the best AR devices and its SDK can set your brand apart from the competition. Say hello to the new-age implementation to showcase your products and impart a more professional, tech-savvy outlook to your company. The service list includes:" >
            <ul>
              <li>Shopping app</li>
              <li>Medical & healthcare consultation</li>
              <li>Gaming app</li>
              <li>Banking and finance app</li>
              <li>Dating app</li>
              <li>Food-delivery app</li>
              <li>Customer support & chatbot</li>
            </ul>
          </Servicebox>


        </div>
      </div>
    </div>
  </>
}
export default Service;
