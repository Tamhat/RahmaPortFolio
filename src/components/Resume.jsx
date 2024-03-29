// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Home";

const Resume = () => {
  return (
    <>
      <Home>
        <article className="resume active" data-page="resume">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Munshigonj Govt Polytechnical Institute
                </h4>
                <span>2023 — 2027</span>
                <p className="timeline-text">
                  After my Secondery Education I admitted in this Institute with Computer Science Subject. and till now iam in here
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Jurain Sheikh Kamal Govt High School
                </h4>
                <span>2018 — 2023</span>
                <p className="timeline-text">
                  After my Primary Education I admitted in this school.THen
                  finished my Secondary Education.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Gained a High Skill set By Self learning
                </h4>
                <span>2021 — 2022</span>
                <p className="timeline-text">
                  Gained a high skilled set by self learning and practicing. I
                  have learned HTML, CSS,Advance JavaScript-ES6 with core
                  knowledge,Bootstrap,Tailwind css, React js, Nextjs, Redux,
                  Firebase, Git, GitHub, VS Code, Adobe XD, Figma, Photoshop,
                  Illustrator, and many more.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Still upgrading My skills
                </h4>
                <span>2020 — Running </span>
                <p className="timeline-text">
                  I am still upgrading my skills and learning new things. I am
                  also working on some projects to gain experience.
                </p>
              </li>
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web developer at AI Tech Craft</h4>
                <span>2023/Dec — 2024/Present</span>
                <p className="timeline-text">
                  As a professional Full Stack web developer I working with Ai tech Craft. 
                  I have worked with many Professionals and learned many things from them in here.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web developer</h4>
                <span>2020 — Present</span>
                <p className="timeline-text">
                  As a professional web developer I have worked with many
                  clients and companies. I have worked with many Professionals
                  and learned many things from them.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Personal Branding</h4>
                <span>2023 - Present</span>
                <p className="timeline-text">
                  I have started my personal branding journey in 2021. I have
                  learned many things from this journey. I have learned how to
                  build a brand and how to grow it.And helping others to grow
                  their business through my services
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Marketing</h4>
                <span>2020-2023</span>
                <p className="timeline-text">
                  I have worked as a marketer. I have learned many things from
                  this job. I have learned how to communicate with clients, how
                  to sell products and Boost their Profits.
                </p>
              </li>
            </ol>
          </section>
          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>
            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Front End Development</h5>
                  <data value={100}>100%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Back-End Development</h5>
                  <data value={100}>100%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Personal Branding</h5>
                  <data value={100}>100%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Time Management</h5>
                  <data value={100}>100%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Excellent in Communication</h5>
                  <data value={100}>100%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </li>
            </ul>
          </section>
        </article>
      </Home>
    </>
  );
};

export default Resume;
