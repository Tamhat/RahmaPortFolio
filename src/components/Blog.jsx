import { React } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/blog-1.jpg";
import img2 from "../assets/blog-2.jpg";
import img3 from "../assets/blog-3.jpg";
import img4 from "../assets/blog-4.jpg";
import img5 from "../assets/blog-5.jpg";
import img6 from "../assets/blog-6.jpg";
import Home from "./Home";

const Blog = () => {
  return (
    <Home>
      <article
        className="blog active"
        data-page="blog"
      >
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>
        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={img1}
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">
                    Design conferences in 2022
                  </h3>
                  <p className="blog-text">
                    Our team is always happy to share our experience in the
                    field of design and development of web interfaces, as well
                    as marketing and branding.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={img2}
                    alt="Best fonts every designer"
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">
                    Best fonts every designer
                  </h3>
                  <p className="blog-text">
                    best fonts every designer should own. We have selected for
                    you the best fonts that will be relevant in 2022.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={img3} alt="Design digest #80" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design digest #80</h3>
                  <p className="blog-text">
                    design digest #80. We have selected for you the best fonts
                    that will be relevant in 2022.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={img4}
                    alt="UI interactions of the week"
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">
                    UI interactions of the week
                  </h3>
                  <p className="blog-text">
                    UI interactions of the week #203. We have selected for you
                    the best fonts that will be relevant in 2022.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={img5}
                    alt="The forgotten art of spacing"
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">
                    The forgotten art of spacing
                  </h3>
                  <p className="blog-text">
                    the forgotten art of spacing. We have selected for you the
                    best fonts that will be relevant in 2022.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={img6} alt="Design digest #79" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design digest #79</h3>
                  <p className="blog-text">
                    design digest #79 We have selected for you the best fonts
                    that will be relevant in 2022.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </Home>
  );
};

export default Blog;
