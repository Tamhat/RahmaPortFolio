import Home from "./Home";

const Contact = () => {
  return (
    <Home>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
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
              rows={15}
            />
            <div className="button-contact">
              <button className="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane" />
                <span>Send Message</span>
              </button>
              <a
                className="call-btn"
                href="https://call.whatsapp.com/voice/Rohdg1PHr5maRgjSdBOAH1"
                target="_blank" rel="noreferrer" 
              >
                <ion-icon name="logo-whatsapp" />
                <span>Call Me</span>
              </a>
            </div>
          </form>
        </section>
      </article>
    </Home>
  );
};

export default Contact;
