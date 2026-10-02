import "./App.css";

function Recommendation() {
  return (
    <div className="recommendation-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SVM<span>.</span>
        </a>

        <div className="nav-links">
          <a href="/#about">Profile</a>
          <a href="/#experience">Experience</a>
          <a href="/#education">Education</a>
          <a href="/">Home</a>
        </div>

        <a href="/resume.pdf" className="nav-resume" target="_blank">
          Résumé
        </a>
      </nav>

      <main className="recommendation-main">
        <header className="recommendation-hero">
          <p className="section-number">RECOMMENDATION REFERENCE</p>

          <h1>
            Writing a recommendation
            <span>for Sean?</span>
          </h1>

          <p className="recommendation-intro">
            Thank you for supporting my application to commission as an officer
            in the United States Air Force. This page provides a concise
            reference to my goals, education, professional experience,
            leadership background, and motivation for service.
          </p>

          <div className="recommendation-actions">
            <a href="/resume.pdf" target="_blank" className="button primary">
              View Résumé
            </a>

            <a href="#reference" className="button secondary">
              Candidate Overview
            </a>
          </div>
        </header>

        <section className="reference-grid" id="reference">
          <article className="reference-card">
            <span className="reference-number">01</span>
            <p className="reference-label">COMMISSIONING GOAL</p>

            <h2>United States Air Force Officer</h2>

            <p>
              My goal is to earn a commission through Air Force Officer Training
              School and serve on active duty as an Air Force officer.
            </p>
          </article>

          <article className="reference-card featured-reference">
            <span className="reference-number">02</span>
            <p className="reference-label">LEADERSHIP</p>

            <div className="reference-stat">20</div>

            <h2>Personnel Led</h2>

            <p>
              Led and coordinated a 20-person team providing logistics and
              maintenance support for a temporary U.S. Army base operation in
              Guam.
            </p>
          </article>

          <article className="reference-card">
            <span className="reference-number">03</span>
            <p className="reference-label">EDUCATION</p>

            <h2>B.S. Computer Science</h2>

            <p>
              University of Maryland Global Campus. Graduated Summa Cum Laude
              and earned President's List distinction.
            </p>
          </article>

          <article className="reference-card">
            <span className="reference-number">04</span>
            <p className="reference-label">CAREER INTEREST</p>

            <h2>Cyberspace Operations</h2>

            <p>
              Primarily interested in technical and mission-focused career
              fields, particularly Cyberspace Operations, while remaining
              interested in other non-rated officer opportunities for which I am
              qualified.
            </p>
          </article>
        </section>

        <section className="reference-details">
          <div className="reference-heading">
            <p className="section-number">CANDIDATE BACKGROUND</p>

            <h2>
              Useful context for
              <span>your letter.</span>
            </h2>
          </div>

          <div className="reference-points">
            <article>
              <span>01</span>

              <div>
                <h3>Leadership & Accountability</h3>

                <p>
                  My professional background has required independent
                  decision-making, personnel coordination, resource management,
                  troubleshooting, safety awareness, and accountability in
                  demanding operational environments.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Technical Foundation</h3>

                <p>
                  My Computer Science education includes software engineering,
                  algorithms, databases, data structures, and web development. I
                  have continued independently developing my knowledge of
                  networking, information technology, and cybersecurity.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Continuous Growth</h3>

                <p>
                  Throughout my education and professional career, I have
                  consistently pursued new challenges and opportunities to
                  expand my technical knowledge, professional capabilities, and
                  ability to lead.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>

              <div>
                <h3>Service</h3>

                <p>
                  I want the responsibility that comes with being an officer and
                  the opportunity to contribute to something larger than myself
                  while developing into a leader Airmen can trust.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="recommender-note">
          <p className="section-number">WHY I WANT TO SERVE</p>

          <blockquote>
            “My goal is to become the kind of officer who takes care of his
            Airmen, holds himself accountable, continues learning, and can be
            trusted to accomplish the mission even when circumstances are
            difficult.”
          </blockquote>

          <p className="recommender-context">
            Being a husband and father, completing my degree, working in
            physically and technically demanding environments, and overcoming
            setbacks have reinforced the importance of accountability,
            perseverance, integrity, and taking responsibility for the people
            who depend on you.
          </p>
        </section>

        <section className="recommendation-footer">
          <p>Thank you for your time and support.</p>
          <h2>Sean Vincent Mafnas</h2>

          <div>
            <a href="/resume.pdf" target="_blank">
              View Résumé →
            </a>

            <a href="/">Return Home →</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Recommendation;
