import React from "react";
import img1 from "../assets/my-avatar.png"
import fiverr from "../assets/fiverr.svg"

const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="https://i.ibb.co/nzck4HN/371538920-309053818467445-8394852017439000874-n-removebg-preview-fotor-2023090120042.png" alt="Rahmat Ullah " width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="RahmaWeb">
            Rahmat Ullah
          </h1>
          <p className="title">MERN Stack Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:rahmatur02982@gmail.com" className="contact-link">
                rahmatur02982@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+8801714382955" className="contact-link">
                +8801714382955
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2007-01-05">January 5, 2007</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Jurain, Dhaka-1204, Bangladesh</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/rahmatullah.433"
              className="social-link"
            >
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://twitter.com/Rahmatur181"
              className="social-link"
            >
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/rahmatullah.433/"
              className="social-link"
            >
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://call.whatsapp.com/voice/Rohdg1PHr5maRgjSdBOAH1"
              className="social-link"
            >
              <ion-icon name="logo-whatsapp" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Tamhat"
              className="social-link"
            >
              <ion-icon name="logo-github" />
            </a>
          </li>
          
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
