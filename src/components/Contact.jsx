import { React } from "react";
import Home from "./Home";

const Contact = () => {
  return (
    <Home>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29228.862086118028!2d90.4042152849278!3d23.68998112698406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e7d89677bd%3A0x3b5c34ece56ca8e!2sJurain%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1686176119515!5m2!1sen!2sbd"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </figure>
        </section>
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>
            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
              defaultValue={""}
            />
            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane" />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </Home>
  );
};

export default Contact;