import './App.css';
import { useState } from 'react'; // ✅ Don't forget to import useState!

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
        <button className="arrow left-arrow" onClick={prevSlide}>❮</button>
         {/* Top text */}
          <div className="carousel-text top-text">
          <h2>Higher Workforce effortlessly and streamline workflows</h2>
  </div>
        <img src={images[current]} alt="carousel" className="carousel-image" />
        <button className="arrow right-arrow" onClick={nextSlide}>❯</button>
          {/* Bottom text */}
  <div className="carousel-text bottom-text">
  <h2>
  <span className="lavender-text">Gaddr</span> allows you to define workflows
</h2>
  </div>
      </div>
    </div>

      <div className="our-team-section">
      <h2>Our Team Has Worked With</h2>

      <div className="logo-slider">
      <div className="logo-track">
        <img src="/compony1.png" alt="Company 1" />
        <img src="/compony2.png" alt="Company 2" />
        <img src="/compony3.png" alt="Company 3" />
        <img src="/compony4.png" alt="Company 4" />
        <img src="/compony5.png" alt="Company 3" />
        <img src="/compony6.png" alt="Company 4" />
        {/* Repeat logos if you want continuous scroll */}
        <img src="/compony1.png" alt="Company 1" />
        <img src="/compony2.png" alt="Company 2" />
        <img src="/compony3.png" alt="Company 3" />
        <img src="/compony4.png" alt="Company 4" />
        <img src="/compony5.png" alt="Company 3" />
        <img src="/compony6.png" alt="Company 4" />
      </div>
      </div>
      </div>
      <div className="subscribe-section">
        <h2>Start to flow with us today!!!</h2>
        <p>More features, updates, offers, and free blockchain lessons</p>

        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

            <div className="cards-section">
        <div className="card">
          <img src="/card1.png" alt="Logo" className="card-logo" />
                    <div className="card-content">
              {/* Empty div for spacing below logo */}
              <div style={{ height: '60px' }}></div> 
              <h3>All-in-one project dashboard</h3>

                  <ul>
                    <li>Streamline your workflow with the centralized platform for all your project needs</li>
                    <li>Effortless task management and team collaboration.</li>
                    <li>Keep your team in sync and projects on track, regardless of size</li>
                  </ul>

              <button className="info-button">+ Info</button>
            </div>
        </div>

        <div className="card">
          <img src="/card2.png" alt="Logo" className="card-logo" />
          <div className="card-content">
              {/* Empty div for spacing below logo */}
              <div style={{ height: '60px' }}></div> 

              <h3>Talent pool access with multi-platform job listing</h3>

              <ul>
                <li>Post job ADs on your personal or FlowerWork's LinkedIn</li>
                <li>Get access to the unlimited talent pool</li>
                <li>Follow the hiring process on your dashboard</li>
              </ul>

              <button className="info-button">+ Info</button>
            </div>
        </div>

        <div className="card">
          <img src="/card3.png" alt="Logo" className="card-logo" />
          <div className="card-content">
              {/* Empty div for spacing below logo */}
              <div style={{ height: '60px' }}></div> 

              <h3>End-end AI Assistance & Blockchain Security System</h3>

              <ul>
                <li>Enhance talent matching and interviewing through AI-driven recommendations</li>
                <li>Streamline workflows, hiring and project management with AI-powered analytics and automation</li>
                <li>Ensure secure payments and data protection with blockchain encryption</li>
              </ul>

              <button className="info-button">+ Info</button>
            </div>
        </div>
      </div>


      <h1>Join us with the free plan</h1>
      <div className="two-cards-section">
        
  <div className="card2 card-1">
    <h2>Free plan</h2>
    <p>Unlock full access to the platform and experience seamless efficiency with us.</p>

    <h2>0€</h2>
    <h5>Free for your whole team!</h5>
    <ul>
      <li>Full access to current features and tools</li>
      <li>Unlimited optimization for projects and tasks</li>
      <li>Outsource top talents in field</li>
      <li>Premium support from our team</li>
    </ul>

    <button className="start-now-button">Start Now</button>
  </div>

  <div className="card2 card-2">
    <h2>Pro plan</h2>
    <p>Access AI tools for higher productivity,obtain collaboration opportunity, and optimize talent outsourcing.</p>

    <h2>Coming soon</h2>
    <ul>
      <li>Full access to all AI-powered features and tools</li>
      <li>On-hand AI optimization and unlimited access to projects and tasks</li>
      <li>Freelancer payments security and team data protection with blockchain-powered encryption</li>
    </ul>

    <h5>Contact us for more details</h5>
  </div>
</div>
<div className="boost-section">
  <h2>Boost Your Team's Productivity</h2>
  <h4>Simply Project management, Empower Collaboration, Achieve More</h4>
  <p>
    With Gaddr's flexible and intuitive platform, you can effortlessly assign tasks, set timelines, and track milestones all in your collaborative workspace.
  </p>

  <img src="/screenshot.png" alt="Screenshot" className="screenshot-img" />

  <div className="button-wrapper">
    <button className="boost-button">Start Boosting My Team Today</button>
  </div>
</div>



<div className="info-section">
  <h2>Manage Every Project Seamlessly</h2>
  <p>
  We keep your tasks and subtasks structured, set clear timelines, and assign responsibilities.
  Our visualized progress help you to track progress effortlessly from planning to completion. Customize your milestones or follow our default three-stage progress tracker.
  </p>

  <h2>Collaborate Effortlessly with Your Team</h2>
  <p>
  Work smarter, not harder.
  Use our intuitive dashboard to collaborate in real time with specific teams, track updates, and ensure smooth communication for every project milestone.
  </p>

  <h3>End-to-End Project Control</h3>
  <p>
  From setting goals to final delivery, we provide everything you need to manage projects efficiently.
  Simplify your process with one click.
  </p>
</div>
<div className="boost-team-section">
  <div className="logo-heading-row">
    <img src="/card2.png" alt="Small Logo" className="small-logo" />
    <h2 className="main-heading">Recruitment made easy </h2>
  </div>

  <h3 className="sub-heading">Post the Perfect Job Ad and Attract Top Talent</h3>

  <p className="description">
  We want you to focus on what's important: growing your company. users should be interested.
  </p>

  <img src="/screenshot2.png" alt="Screenshot" className="team-screenshot" />

  <div className="button-center">
    <button className="boost-team-button">Start Boosting My Team Today</button>
  </div>
</div>


<div className="info-section">
  <h2>Instant Access to Top Talent</h2>
  <p>
  Your job listings can be posted directly on FlowerWork or LinkedIn. This give you access to our global pool of qualified professionals.
You can reach the right candidates quickly with our diverse and extensive talent network.
  </p>

  <h2>Streamlined Hiring Made Simple</h2>
  <p>
  You deserve a faster, more efficient way to find the right talent. With FlowerWork, optimize job postings, track candidates, and customize ads to attract the best.
Simplify your hiring process with our intuitive dashboard, keeping everything organized and chaos-free.
  </p>

  <h3>Tailored Solutions for Your Growth</h3>
  <p>
  We provide professionally designed job ads tailored to meet both your immediate needs and long-term growth.
  Effortlessly customized postings match you with top-tier talent exactly suited to your goals.
  </p>
</div>

      </>
  );
}

export default App;
