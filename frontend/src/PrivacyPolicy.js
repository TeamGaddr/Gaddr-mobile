import { NavLink } from 'react-router-dom';
import './PrivacyPolicy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


function PrivacyPolicy() {
  return (
    <div className='container'>
    <div className="privacy-container">
      <h2 className="privacy-heading">Privacy Policy</h2>
      
      <div className="link-row">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Privacy Policy</NavLink>
        <NavLink to="/terms" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Terms & Conditions</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Contact Us</NavLink>
      </div>

      <p className="effective-date">Effective Date: 21. Nov. 2024</p>

    </div>

      <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <p>
          We at FlowerWorker value your privacy and are committed to protecting the personal information you share with us.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including project management, recruitment, and payment functionalities.
        </p>
        <p>
          By accessing or using FlowerWorker, you agree to the practices described in this Privacy Policy.
        </p>
      </div>
    </div>


    {/* New Information We Collect Section */}
    <div className="information-collect-section">
        <h2>Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        
        <ul>
          <li>Personal Identification Information: Name, Email address, Contact details (phone number, address, etc.).</li>
          <li>Employment and Recruitment Information: Resumes/CVs, Work experience and professional background, Skills, certifications, and references.</li>
          <li>Account Information: Username and password, Profile photo (optional).</li>
          <li>Payment Information: Billing address, Payment details (e.g., credit card information or payment processor details).</li>
          <li>Usage Data: IP address, Device type and browser information, Usage statistics and interaction data.</li>
        </ul>
      </div>

      <div className="information-collect-section">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        
        <ul>
          <li>Provide, operate, and maintain our platform.</li>
          <li>Facilitate recruitment, project management, and payment processing.</li>
          <li>Communicate with you, including responding to inquiries or sending notifications.</li>
          <li>Enhance user experience through personalized content and recommendations.</li>
          <li>Improve the platform and conduct analytics.</li>
          <li>Enforce our terms and conditions and comply with legal obligations.</li>
        </ul>
      </div>


      <div className="information-collect-section">
        <h2>Sharing Your Information</h2>
        <p>We may share your personal information in the following circumstances:</p>
        
        <ul>
          <li>With Employers and Recruiters: To facilitate recruitment and job matching.</li>
          <li>Service Providers: To support payment processing, email delivery, analytics, and other operational services.</li>
          <li>Legal Compliance: If required by law, regulation, or legal process.</li>
          <li>Business Transfers: In the event of a merger, sale, or acquisition.</li>
          
        </ul>
        <p>We will never sell your information to third parties for marketing purposes.</p>
      </div>

      <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Data Security</h2>
        <p>
        We implement industry-standard security measures to protect your information. These include encryption, firewalls, and secure server storage. However, no system is completely secure, and we cannot guarantee the absolute safety of your data.
        </p>
       
      </div>
    </div>


    <div className="information-collect-section">
        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal </p>
        <h4>information:</h4>
        <ul>
          <li>Access and request copies of your data.</li>
          <li>Correct or update inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Restrict or object to processing.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          
        </ul>
        <p className='emailid'>info@flowerworker.com</p>
      </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Cookies and Tracking</h2>
        <p>
        We use cookies and similar technologies to improve user experience and collect usage data. You can control cookies through your browser settings.
        </p>
       
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Children's Privacy</h2>
        <p>
        FlowerWorker is not intended for use by children under 16, and we do not knowingly collect information from them.
        </p>
       
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Retention of Data</h2>
        <p>
        We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
        </p>
       
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Third-Party Links</h2>
        <p>
        Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their privacy policies before sharing your information.
        </p>
       
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Changes to This Policy</h2>
        <p>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted with the "Effective Date" at the top.
        </p>
       
      </div>
    </div>

    <div className="contact-us-section">
  <h2>Contact Us</h2>
  <div className="contact-item">
    <FontAwesomeIcon icon={faEnvelope} className="icon" />
    <span>contact@flowerworker.com</span>
  </div>
  <div className="contact-item">
    <FontAwesomeIcon icon={faLocationDot} className="icon" />
    <span>Borlänge, Sweden</span>
  </div>
</div>

      
    </div>
    

        
  );
}

export default PrivacyPolicy;
