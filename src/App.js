import './App.css';
import { useState } from 'react'; // ✅ Don't forget to import useState!
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const images = [
    '/caro1.png',
    '/img2.jpg',
    '/img3.jpg',
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="App">   {/* 👈 One single wrapper div */}
    <Link to="/" className="back-arrow">
            <i className="fa-solid fa-chevron-left"></i>
        </Link>
      <nav className="navbar">
      
        <img src="/logo.svg" alt="Logo" className="logo-img" />
         {/* <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul> */}
      </nav>

      <div className="carousel">
       
        
          <div className="carousel-text top-text">
          <h2>Is the all-in-one platform to streamline workflows, connect with top talents, foster seamless collaboration, assign tasks effortlessly, and securely track progress.</h2>
  </div>
        <img src={images[current]} alt="carousel" className="carousel-image" />
       
  <div className="carousel-text bottom-text">
 
  </div>
      </div>
      <div className="section-heading">
  <h2>What <span className='lavender'>We Offer Now</span></h2>
  <hr className="lavender-line" />
  <div className="offer-grid">
  <div className="offer-item large">Efficient Project Management</div>
  <div className="offer-item small">Organize tasks, timelines, and resources - all in one place with FlowerWork’s intuitive dashboard, keeping deadlines and progress on track.</div>

  <div className="offer-item large">Flexible Talent and Scalability</div>
  <div className="offer-item small">Access verified professionals and scale projects seamlessly, whether for solo ventures or multi-team workflows.</div>

  <div className="offer-item large">Collaborative Workflows</div>
  <div className="offer-item small">Streamline communication with real-time updates, file sharing, and feedback tools to stay aligned and productive.</div>

  <div className="offer-item large">Secure Data and Goal Tracking</div>
  <div className="offer-item small">Protect your data while tracking project actions with clear documentation and customizable tools to achieve your goals.</div>
</div>

</div>

<div className="section-heading">
  <h2>Our <span className='lavender'>Mission</span></h2>
  <hr className="lavender-line" />
  <div className="offer-grid">
  <div className="offer-item large">Empowering Teams and Individuals</div>
  <div className="offer-item small">Drive efficient project management and seamless collaboration, enabling teams and individuals to focus on what truly matters and achieve exceptional results.</div>

  <div className="offer-item large">Bridging Talent and Opportunity</div>
  <div className="offer-item small">Bridge the gap between talent and opportunity by curating professional talent pools tailored to meet unique needs and exceed expectations.</div>

  <div className="offer-item large">Scaling Success with Flexibility</div>
  <div className="offer-item small">Deliver adaptable solutions that evolve with you—scaling effortlessly from small tasks to complex workflows, empowering teams of any size to succeed.</div>

  <div className="offer-item large">Increase productivity efficiently</div>
  <div className="offer-item small">Equipped with advanced features to streamline workflows, optimizing resource with seasoned experts, and tailored solutions, businesses drive efficiency and boost productivity</div>
</div>

</div>

<div className="section-heading">
  <h2>Upcoming Features on<span className='lavender'>Gaddr</span></h2>
  <hr className="lavender-line" />
  <div className="offer-grid">
  <div className="offer-item large">AI-Driven Task Management</div>
  <div className="offer-item small">Elevate your entire project management with our AI tools, automating task creation, priority setting, precise forecasting, real time updates, etc.</div>

  <div className="offer-item large">Blockchain-Powered Talent Verification</div>
  <div className="offer-item small">Build trust and transparency with blockchain-secured profiles and verified credentials for talent connections you can rely on</div>

  <div className="offer-item large">Automated Talent Matching</div>
  <div className="offer-item small">Let AI intelligently match your projects with the best-fit professionals based on skills, availability, and performance history, while automating your interview process.</div>

  <div className="offer-item large">Smart Contract Onboarding</div>
  <div className="offer-item small">Simplify onboarding and collaboration with blockchain-powered smart contracts for secure and efficient agreements.</div>
</div>

</div>

<div className="success-team-section">
  <h2 className="section-title">Our Success Team</h2>
  <div className="team-scroll-container">
    <div className="team-card">
      <img src="/team1.png" alt="Team Member 1" />
      
    </div>
    <div className="team-card">
      <img src="/team2.png" alt="Team Member 2" />
      
    </div>
    <div className="team-card">
      <img src="/team3.png" alt="Team Member 3" />
      
    </div>
   
    <div className="team-card">
      <img src="/team5.png" alt="Team Member 4" />
      
    </div>
    <div className="team-card">
      <img src="/team6.png" alt="Team Member 4" />
      
    </div>
    {/* Add more cards if needed */}
  </div>
</div>

<div className="collaborate-section">
  <h2 className="collaborate-heading">You can be one of us too!</h2>
  <button className="collaborate-button">Collaborate with us!</button>
</div>


    </div>
</>
  );
}

export default App;
