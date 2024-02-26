import { React } from "react";
import img1 from "../assets/project-1.jpg";
import img2 from "../assets/project-2.png";
import img3 from "../assets/project-3.jpg";
import img4 from "../assets/project-4.png";
import img5 from "../assets/project-5.png";
import img6 from "../assets/project-6.png";
import img7 from "../assets/project-7.png";
import img8 from "../assets/project-8.jpg";
import img9 from "../assets/project-9.png";
import Home from "./Home";

const Portfolio = () => {
  return (
    <Home>
      <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <li
            className="project-item  active"

            data-filter-item
            data-category="web development"
          >
            <a href="https://ai-spotlights.com/" target="_blank" rel="noreferrer" >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={img1} alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">Ai Directory</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://phorst-app.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={img2} alt="orizon" loading="lazy" />
              </figure>
              <h3 className="project-title">Phorst</h3>
              <p className="project-category">Social Media Web</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://virtual-travel.netlify.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={img3} alt="fundo" loading="lazy" />
              </figure>
              <h3 className="project-title">Blockchain</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://jexiexchange.com/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={img4} alt="brawlhalla" loading="lazy" />
              </figure>
              <h3 className="project-title">Crypto</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://romax-dev.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={img5} alt="dsm." loading="lazy" />
              </figure>
              <h3 className="project-title">Romax Dev</h3>
              <p className="project-category">Web Design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://geekedgorillas.io/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img6}
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">GeekedGorillas</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://ai-tech-craft-ten.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img7}
                  alt="summary"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Agency</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://digitf.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img8}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a  href="https://zon-cafee-1.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img9}
                  alt="arrival"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://restoran-lyart.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img1}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://doze-cafe.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img8}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://wealee-rahma.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img4}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://cakezone-zeta.vercel.app/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img4}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://ecommerce-app-server-dpe6.onrender.com/" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={img2}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Ecommerce</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
    </Home>
  );
};

export default Portfolio;
