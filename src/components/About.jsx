import img2 from "../assets/icon-quote.svg";
import img3 from "../assets/icon-design.svg";
import img4 from "../assets/icon-dev.svg";
import img5 from "../assets/icon-app.svg";
import img6 from "../assets/icon-photo.svg";
import avt1 from "../assets/avatar-1.png";
import avt2 from "../assets/avatar-4.png";
import logo1 from "../assets/logo-1-color.png";
import logo2 from "../assets/logo-2-color.png";
import logo3 from "../assets/logo-3-color.png";
import logo4 from "../assets/logo-4-color.png";
import logo5 from "../assets/logo-5-color.png";
import logo6 from "../assets/logo-6-color.png";

import Home from "./Home";

const About = () => {
  return (
    <Home>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm Full Stack MERN Developer with 4 years of experience in both Front-end and Back-end, working
            in web development and Design. I enjoy turning complex problems into
            simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many brand and
            Clients.
          </p>
        </section>
        <section className="service">
          <h3 className="h3 service-title">💪What I do</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={img3} alt="design icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={img4} alt="Web development icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={img5} alt="mobile app icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Digital Marketing</h4>
                <p className="service-item-text">
                  Helping new Business to grow their business through Digital
                  Marketing and Boost Profit.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={img6} alt="camera icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>
                <p className="service-item-text">
                  I Click high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">🔥Real Testimonials</h3>
          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="https://i.ibb.co/XJLkx9b/C329-F74-E-414-C-4461-B189-F2300-C4697-AB.webp"
                    alt="Henry william"
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Nizihad824
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    🇩🇪Germany <br />I am satisfied with his work.Wanna work with
                    him again.
                  </p>
                </div>
              </div>
            </li>
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="https://i.ibb.co/WPT7HMH/f78b2b91-3ea3-4c81-a7e6-2332dbfb2c7f.webp"
                    alt="Daniel lewis"
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Dominiccueto
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    🇵🇭Philippines
                    <br />
                    Rahmat Ullah works with the heart! Thank you! Very
                    responsive and easy to work with! You wont regret your
                    orders with him!
                  </p>
                </div>
              </div>
            </li>
            
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={avt1}

                    alt="Jessica miller"
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Nasem_j
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    🇺🇸United States
                    <br />
                    Rahmat did Great communication and works well.I will
                    definitely work with him again.
                  </p>
                </div>
              </div>
            </li>
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={avt2}

                    alt="Emily evans"
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Necteller
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                   United Kingdom 
                    <br />
                    Very patient, supportive and professional web Designed.
                  </p>
                </div>
              </div>
            </li>
            
          </ul>
        </section>
        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay />
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline" />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                    src="https://i.ibb.co/XJLkx9b/C329-F74-E-414-C-4461-B189-F2300-C4697-AB.webp"
                  alt="Daniel lewis"
                  width={80}
                  data-modal-img
                />
              </figure>
              <img src={img2} alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>
              <time dateTime="2022-3">March, 2022</time>
              <div data-modal-text>
                <p>
                  Rahmat Ullah was hired to create a corporate identity. We were
                  very pleased with the work done. He has a lot of experience
                  and is very concerned about the needs of client. Lorem ipsum
                  dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                  seds do et eiusmod tempor incididunt ut laborels dolore
                  magnarels alia.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="clients">
          <h3 className="h3 clients-title">🤝Clients</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src={logo1} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src={logo2} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src={logo3} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src={logo4} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src={logo5} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src={logo6} alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </Home>
  );
};

export default About;
