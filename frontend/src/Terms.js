import React from "react";
import { NavLink } from "react-router-dom";
import "./terms.css";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';



function TermsConditions() {
  return (
    <div className="container">
    <div className="privacy-container">
        <Link to="/" className="back-arrow">
            <i className="fa-solid fa-chevron-left"></i>
        </Link>

      <h2 className="terms-heading">Terms & Conditions</h2>

      <div className="link-row">
        <NavLink to="/" className="link">
          Privacy Policy
        </NavLink>
        <NavLink to="/terms" className="active-link">
          Terms & Conditions
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact Us
        </NavLink>
      </div>

      <p className="effective-date">Effective Date: 21. Nov. 2024</p>

      
    </div>

    
    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <p>
        Welcome to FlowerWorker. These Terms and Conditions (“Terms”) govern your use of our platform, including project management, recruitment, and payment services. By accessing or using FlowerWorker, you agree to comply with these Terms. If you do not agree, you may not use the platform.
        </p>
        
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Acceptance of Terms</h2>
        <p>
        By creating an account or using FlowerWorker, you agree to these Terms and our Privacy Policy. We reserve the right to update or modify these Terms at any time. Continued use of the platform after changes signifies your acceptance of the updated Terms.
        </p>
        
      </div>
    </div>


    <div className="privacy-policy-container">
      {/* Existing content */}

      <div className="privacy-section">
        <h2>Eligibility</h2>
        <p>
        You must be at least 18 years old and have the legal capacity to enter into binding agreements to use FlowerWorker. If you are using the platform on behalf of a company, you represent that you are authorized to bind that entity to these Terms.
        </p>
        
      </div>
    </div>

    <div className="information-collect-section">
        <h2>User Accounts</h2>
        
        
        <ul>
          <li><h2>Account Creation</h2><p>You must provide accurate, complete, and current information during registration</p><p>You are responsible for maintaining the confidentiality of your account credentials.</p></li>
          <li><h2>Account Responsibility</h2><p>You are responsible for all activities that occur under your account.</p><p>Notify us immediately of any unauthorized use of your account.</p></li>
          
        </ul>
      </div>

      <div className="information-collect-section">
        <h2>Use of the Platform</h2>
        <p>You agree to use FlowerWorker only for lawful purposes and in compliance with these Terms. Prohibited activities include but are not limited to:</p>
        
        <ul>
          <li>Posting false or misleading information.</li>
          <li>Using the platform for unauthorized commercial purposes.</li>
          <li>Uploading malicious software or files.</li>
          <li>Engaging in harassment, discrimination, or illegal activities.</li>
          
        </ul>
      </div>


      <div className="information-collect-section">
        <h2>Recruitment and Project Management</h2>
        
        
        <ul>
          <li><h2>For Employers and Recruiters</h2><p>Employers and recruiters are solely responsible for the accuracy of job postings and recruitment activities.</p><p>FlowerWorker does not guarantee the suitability of candidates or the success of hiring processes.</p></li>
          <li><h2>For Job Seekers</h2><p>Job seekers are responsible for ensuring the accuracy of resumes, profiles, and other submitted information.</p><p>FlowerWorker does not guarantee employment opportunities or outcomes.</p></li>
          
        </ul>
      </div>

      <div className="information-collect-section">
        <h2>Payment and Billing</h2>
        
        
        <ul>
          <li><h2>Payment Processing</h2><p>All payments are processed securely through our third-party payment providers.</p><p>You are responsible for ensuring accurate payment information.</p></li>
          <li><h2>Refunds and Disputes</h2><p>Refunds, if applicable, will be processed in accordance with our refund policy.</p><p>Payment disputes must be reported within 30 days of the transaction.</p></li>
          
        </ul>
      </div>

      <div className="information-collect-section">
        <h2>Intellectual Property</h2>
        
        
        <ul>
          <li><h2>Platform Content</h2><p>All content on the platform, including logos, text, graphics, and software, is the property of FlowerWorker or its licensors</p><p>You may not copy, modify, distribute, or reproduce platform content without our explicit consent.</p></li>
          <li><h2>User Content</h2><p>You retain ownership of content you upload to the platform but grant us a non-exclusive, royalty-free license to use, display, and distribute such content for platform operations.</p></li>
          
        </ul>
      </div>

      <div className="information-collect-section">
        <h2>Limitation of Liability</h2>
        
        
       <p>To the fullest extent permitted by law, FlowerWorker is not liable for:</p>
          <p>Indirect, incidental, or consequential damages.</p>
          <p>Loss of data, employment opportunities, or revenue</p>
          <p>Errors, interruptions, or failures of the platform.</p>
          
       
      </div>
        <div className="line">__________________________________________</div>
    
    <div className="information-collect-section">
        <h2>Disclaimers</h2>
        
        
       <p>FlowerWorker is provided "as-is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the platform will meet your expectations or be error-free.</p>
           
      </div>
        <div className="line">__________________________________________</div>

        <div className="information-collect-section">
        <h2>Termination</h2>
        
        
       <p>We reserve the right to suspend or terminate your account or access to the platform at our sole discretion, with or without notice, for violations of these Terms or other reasons.</p>
           
      </div>
        <div className="line">__________________________________________</div>
    
        <div className="information-collect-section">
        <h2>Governing Law</h2>
        
        
       <p>These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.</p>
           
      </div>
        <div className="line">__________________________________________</div>

        <div className="information-collect-section">
        <h2>Miscellaneous</h2>
        
        
       <p>Severability: If any provision of these Terms is found invalid, the remaining provisions will remain enforceable.</p>
        <p>No Waiver: Failure to enforce any provision of these Terms does not constitute a waiver of that right. Entire Agreement: These Terms, along with our Privacy Policy, constitute the entire agreement between you and FlowerWorker.</p>
      </div>
        <div className="line">__________________________________________</div>


        <div className="information-collect-section">
        <h2>Dispute Resolution</h2>
        
        
       <p>Any disputes arising from these Terms will be resolved through mediation or arbitration in [Insert Location]. If mediation fails, disputes may be brought before the courts of [Insert Jurisdiction].</p>
        
      </div>
        <div className="line">__________________________________________</div>
    
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
        

        <div className="privacy-buttons">
  <button className="privacy-btn accept">Accept</button>
  <button className="privacy-btn decline">Decline</button>
</div>

    
    </div>
  );
}

export default TermsConditions;
