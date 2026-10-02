import { useState } from "react";
import "./App.css";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site">
      <nav className="navbar">
        <a href="#home" className="logo">
          SVM<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Profile
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#service" onClick={() => setMenuOpen(false)}>
            Why I Serve
          </a>

          <a href="/recommendation" onClick={() => setMenuOpen(false)}>
            Recommendation
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            Résumé
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>

          <button
            className={`menu-button ${menuOpen ? "menu-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">UNITED STATES AIR FORCE OFFICER CANDIDATE</p>

            <h1>
              Sean Vincent
              <span>Mafnas</span>
            </h1>

            <p className="hero-subtitle">
              Computer Science · Leadership · Service
            </p>

            <p className="hero-description">
              Computer Science graduate and experienced professional pursuing a
              commission through United States Air Force Officer Training
              School.
            </p>

            <div className="hero-actions">
              <a href="#about" className="button primary">
                My Background
              </a>

              <a
                href="/resume.pdf"
                className="button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Résumé
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="candidate-card">
              <p className="card-number">01</p>

              <div>
                <p className="card-label">CANDIDATE PROFILE</p>
                <h2>Officer Candidate</h2>
              </div>

              <div className="candidate-details">
                <div>
                  <span>EDUCATION</span>
                  <strong>B.S. Computer Science</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Cyberspace Operations</strong>
                </div>

                <div>
                  <span>COMMISSION</span>
                  <strong>Active Duty · OTS</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        <section className="profile-section" id="about">
          <div className="section-heading">
            <p className="section-number">02 / PROFILE</p>

            <h2>
              Leadership built
              <span>through experience.</span>
            </h2>
          </div>

          <div className="profile-grid">
            <div className="profile-story">
              <p className="profile-lead">
                My path toward becoming an Air Force officer has been shaped by
                technical education, operational experience, leadership, and a
                commitment to continuous growth.
              </p>

              <p>
                My professional background has placed me in demanding
                environments where safety, accountability, communication,
                problem-solving, and teamwork directly affect the success of the
                mission.
              </p>

              <p>
                From leading personnel during a logistics operation supporting
                the U.S. Army to independently maintaining mission-critical
                heavy equipment, I have learned to remain accountable, adapt to
                changing circumstances, and make sound decisions when the work
                matters.
              </p>

              <p>
                I now want to bring those experiences together with my Computer
                Science education and continue developing as a leader through
                service as a commissioned officer in the United States Air
                Force.
              </p>
            </div>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-value">20</span>
                <div>
                  <strong>Personnel Lead</strong>
                  <p>U.S. Army logistics operation</p>
                </div>
              </div>

              <div className="stat">
                <span className="stat-value">B.S.</span>
                <div>
                  <strong>Computer Science</strong>
                  <p>Summa Cum Laude</p>
                </div>
              </div>

              <div className="stat">
                <span className="stat-value">98%</span>
                <div>
                  <strong>Customer Satisfaction</strong>
                  <p>Independent service environment</p>
                </div>
              </div>

              <div className="stat">
                <span className="stat-value">01</span>
                <div>
                  <strong>Objective</strong>
                  <p>Commission as an Air Force officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="section-heading">
            <p className="section-number">03 / LEADERSHIP & EXPERIENCE</p>

            <h2>
              Experience shaped by
              <span>accountability.</span>
            </h2>
          </div>

          <div className="experience-layout">
            <div className="experience-intro">
              <p>
                My professional experience spans military logistics support,
                heavy-equipment operations, technical troubleshooting, and
                customer-focused environments.
              </p>

              <p>
                Across each role, I have been trusted to solve problems, manage
                responsibilities independently, adapt to changing priorities,
                and remain accountable for the quality of my work.
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  <span>2026</span>
                  <p>Present</p>
                </div>

                <div className="timeline-content">
                  <p className="experience-type">HEAVY EQUIPMENT OPERATIONS</p>

                  <h3>Commercial Tire Technician II</h3>

                  <p className="company">
                    Cemak Trucking, Inc. · Los Angeles, California
                  </p>

                  <p className="experience-description">
                    Independently diagnose equipment issues, perform repairs and
                    component replacements, manage service documentation and
                    inventory, and respond to time-sensitive equipment problems
                    where operational downtime matters.
                  </p>

                  <div className="experience-tags">
                    <span>Problem Solving</span>
                    <span>Accountability</span>
                    <span>Safety</span>
                    <span>Independent Decision-Making</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item featured-experience">
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  <span>2021</span>
                  <p>May — Aug</p>
                </div>

                <div className="timeline-content">
                  <div className="featured-label">
                    <span>LEADERSHIP EXPERIENCE</span>
                  </div>

                  <p className="experience-type">U.S. ARMY CONTRACTOR</p>

                  <h3>Logistics Lead</h3>

                  <p className="company">CrossFit Hita · Guam</p>

                  <div className="leadership-callout">
                    <strong>20</strong>

                    <div>
                      <span>PERSONNEL</span>
                      <p>Led and coordinated during U.S. Army operations</p>
                    </div>
                  </div>

                  <p className="experience-description">
                    Led and coordinated a 20-person team providing logistical
                    and maintenance support for a temporary U.S. Army base
                    operation. Directed daily personnel assignments, managed
                    resources and equipment accountability, coordinated
                    maintenance requirements, and adapted to changing
                    operational priorities.
                  </p>

                  <div className="experience-tags">
                    <span>Team Leadership</span>
                    <span>Resource Management</span>
                    <span>Operational Planning</span>
                    <span>Mission Support</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  <span>2021</span>
                  <p>2025</p>
                </div>

                <div className="timeline-content">
                  <p className="experience-type">HEAVY EQUIPMENT OPERATIONS</p>

                  <h3>Heavy Equipment Tire Technician</h3>

                  <p className="company">Hawaiian Rock Products · Guam</p>

                  <p className="experience-description">
                    Maintained operational readiness of heavy construction and
                    industrial equipment through inspections, troubleshooting,
                    preventative maintenance, repairs, inventory management, and
                    adherence to established safety procedures.
                  </p>

                  <div className="experience-tags">
                    <span>Troubleshooting</span>
                    <span>Equipment Readiness</span>
                    <span>Safety</span>
                    <span>Critical Thinking</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  <span>2015</span>
                  <p>2020</p>
                </div>

                <div className="timeline-content">
                  <p className="experience-type">CUSTOMER SERVICE</p>

                  <h3>Courier</h3>

                  <p className="company">Instacart · Los Angeles, California</p>

                  <p className="experience-description">
                    Operated independently in a fast-paced service environment
                    while managing competing priorities, time-sensitive
                    assignments, and customer communication while maintaining a
                    98% customer satisfaction rating.
                  </p>

                  <div className="experience-tags">
                    <span>98% Satisfaction</span>
                    <span>Communication</span>
                    <span>Adaptability</span>
                    <span>Time Management</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="education-section" id="education">
          <div className="section-heading">
            <p className="section-number">
              04 / EDUCATION & TECHNICAL CAPABILITY
            </p>

            <h2>
              Technical foundation.
              <span>Continuous growth.</span>
            </h2>
          </div>

          <div className="education-grid">
            <div className="degree-card">
              <p className="degree-label">EDUCATION</p>

              <h3>Bachelor of Science</h3>
              <h4>Computer Science</h4>

              <p className="university">University of Maryland Global Campus</p>

              <div className="academic-achievements">
                <div>
                  <span>01</span>
                  <p>Summa Cum Laude</p>
                </div>

                <div>
                  <span>02</span>
                  <p>President's List</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Cash Control Capstone</p>
                </div>
              </div>

              <div className="coursework">
                <p>RELEVANT COURSEWORK</p>

                <div>
                  <span>Software Engineering</span>
                  <span>Data Structures</span>
                  <span>Database Systems</span>
                  <span>Algorithms</span>
                  <span>Web Development</span>
                </div>
              </div>
            </div>

            <div className="technical-panel">
              <p className="degree-label">TECHNICAL KNOWLEDGE</p>

              <div className="technical-category">
                <span className="technical-number">01</span>

                <div>
                  <h3>Networking</h3>
                  <p>
                    TCP/IP · DNS · DHCP · VPN · LAN/WAN · Network Connectivity
                    Troubleshooting · Basic Routing & Switching
                  </p>
                </div>
              </div>

              <div className="technical-category">
                <span className="technical-number">02</span>

                <div>
                  <h3>Systems</h3>
                  <p>Windows 10/11 · macOS · Linux (Ubuntu) · Windows Server</p>
                </div>
              </div>

              <div className="technical-category">
                <span className="technical-number">03</span>

                <div>
                  <h3>Programming & Development</h3>
                  <p>
                    JavaScript · Python · Java · C++ · Git · GitHub · VS Code
                  </p>
                </div>
              </div>

              <div className="technical-category">
                <span className="technical-number">04</span>

                <div>
                  <h3>Databases & Platforms</h3>
                  <p>MongoDB · MySQL · H2 · Firebase · Supabase</p>
                </div>
              </div>

              <div className="technical-category">
                <span className="technical-number">05</span>

                <div>
                  <h3>Enterprise Technology</h3>
                  <p>
                    Microsoft Office 365 · Virtual Machines · Active Directory ·
                    Group Policy
                  </p>
                </div>
              </div>

              <div className="technical-category">
                <span className="technical-number">06</span>

                <div>
                  <h3>Methodologies</h3>
                  <p>
                    Agile · Scrum · Root-Cause Analysis · Systematic
                    Troubleshooting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section" id="service">
          <div className="service-header">
            <p className="section-number">05 / WHY I SERVE</p>

            <p className="service-kicker">
              SERVICE · LEADERSHIP · RESPONSIBILITY
            </p>
          </div>

          <div className="service-statement">
            <h2>
              I want the responsibility
              <span>that comes with leading.</span>
            </h2>
          </div>

          <div className="service-grid">
            <div className="service-quote">
              <div className="quote-mark">“</div>

              <p>
                My desire to commission is about more than obtaining a
                particular job. I want the responsibility that comes with being
                an officer and the opportunity to serve as part of something
                larger than myself.
              </p>
            </div>

            <div className="service-story">
              <p>
                At this stage of my life, I understand leadership differently
                than I did when I was younger. Being a husband and father,
                completing my degree, working in physically and technically
                demanding environments, and overcoming setbacks have reinforced
                the importance of accountability, perseverance, integrity, and
                taking responsibility for the people who depend on you.
              </p>

              <p>
                I believe the Air Force would allow me to apply those
                experiences while continuing to grow as a leader. If selected,
                my goal is to become the kind of officer who takes care of his
                Airmen, holds himself accountable, continues learning, and can
                be trusted to accomplish the mission even when circumstances are
                difficult.
              </p>

              <p>
                Ultimately, I hope to build a career of meaningful service while
                providing an example for my son of what can be accomplished
                through persistence, education, discipline, and commitment.
              </p>
            </div>
          </div>

          <div className="values-row">
            <div>
              <span>01</span>
              <strong>Accountability</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Perseverance</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Integrity</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Service</strong>
            </div>
          </div>
        </section>
        <section className="objective-section" id="objective">
          <div className="objective-left">
            <p className="section-number">06 / COMMISSIONING OBJECTIVE</p>

            <h2>
              Ready to serve.
              <span>Ready to lead.</span>
            </h2>

            <p className="objective-intro">
              My goal is to earn a commission through United States Air Force
              Officer Training School and serve on active duty as an Air Force
              officer.
            </p>
          </div>

          <div className="objective-right">
            <div className="objective-block">
              <span className="objective-number">01</span>

              <div>
                <p className="objective-label">COMMISSIONING PATH</p>
                <h3>Officer Training School</h3>

                <p>
                  Pursuing a commission through Air Force Officer Training
                  School with the goal of serving on active duty as a
                  commissioned officer.
                </p>
              </div>
            </div>

            <div className="objective-block featured-objective">
              <span className="objective-number">02</span>

              <div>
                <p className="objective-label">PRIMARY CAREER INTEREST</p>
                <h3>Cyberspace Operations</h3>

                <p>
                  An opportunity to combine my Computer Science education,
                  developing networking and information systems knowledge, and
                  leadership experience in support of the Air Force mission.
                </p>
              </div>
            </div>

            <div className="objective-block">
              <span className="objective-number">03</span>

              <div>
                <p className="objective-label">ADDITIONAL INTEREST</p>
                <h3>Mission-Focused Officer Roles</h3>

                <p>
                  I am also interested in other non-rated officer opportunities
                  where my technical aptitude, operational experience,
                  adaptability, and leadership background can contribute to
                  mission accomplishment.
                </p>
              </div>
            </div>

            <div className="objective-block">
              <span className="objective-number">04</span>

              <div>
                <p className="objective-label">LONG-TERM GOAL</p>
                <h3>Meaningful Service</h3>

                <p>
                  Develop as a leader, take responsibility for Airmen and
                  mission accomplishment, continue expanding my technical and
                  professional expertise, and build a career of meaningful
                  service.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="recommendation-cta" id="recommendation">
          <p className="section-number">07 / RECOMMENDATION INFORMATION</p>

          <div className="recommendation-cta-grid">
            <div>
              <h2>
                Writing a recommendation
                <span>on my behalf?</span>
              </h2>
            </div>

            <div className="recommendation-cta-content">
              <p>
                I've created a concise reference containing my commissioning
                goals, education, leadership experience, technical background,
                and motivation for pursuing a commission in the United States
                Air Force.
              </p>

              <p>Thank you for taking the time to support my application.</p>

              <a href="/recommendation" className="button primary">
                Recommendation Center →
              </a>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="footer-main">
            <div>
              <a href="#home" className="footer-logo">
                SVM<span>.</span>
              </a>

              <p>
                Air Force Officer Candidate
                <br />
                B.S. Computer Science
              </p>
            </div>

            <div className="footer-navigation">
              <p>NAVIGATION</p>

              <a href="#about">Profile</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#service">Why I Serve</a>
              <a href="#objective">Commissioning Objective</a>
            </div>

            <div className="footer-navigation">
              <p>RESOURCES</p>

              <a href="/recommendation">Recommendation Center</a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Résumé
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>SEAN VINCENT MAFNAS</span>

            <span>OFFICER CANDIDATE PORTFOLIO</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
